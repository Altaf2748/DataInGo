import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 20; // Max requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  record.count++;
  return true;
}

// Message validation constants
const MAX_MESSAGE_LENGTH = 1000;
const MAX_MESSAGES = 20;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

function validateMessages(data: unknown): { valid: true; messages: ChatMessage[] } | { valid: false; error: string } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Invalid request body' };
  }

  const obj = data as Record<string, unknown>;

  if (!obj.messages || !Array.isArray(obj.messages)) {
    return { valid: false, error: 'Messages must be an array' };
  }

  if (obj.messages.length === 0) {
    return { valid: false, error: 'At least one message is required' };
  }

  if (obj.messages.length > MAX_MESSAGES) {
    return { valid: false, error: `Too many messages (max ${MAX_MESSAGES})` };
  }

  const validatedMessages: ChatMessage[] = [];

  for (let i = 0; i < obj.messages.length; i++) {
    const msg = obj.messages[i];
    
    if (!msg || typeof msg !== 'object') {
      return { valid: false, error: `Invalid message at index ${i}` };
    }

    const msgObj = msg as Record<string, unknown>;

    if (typeof msgObj.role !== 'string' || !['user', 'assistant'].includes(msgObj.role)) {
      return { valid: false, error: `Invalid role at message ${i}` };
    }

    if (typeof msgObj.content !== 'string') {
      return { valid: false, error: `Invalid content at message ${i}` };
    }

    if (msgObj.content.length > MAX_MESSAGE_LENGTH) {
      return { valid: false, error: `Message ${i} is too long (max ${MAX_MESSAGE_LENGTH} characters)` };
    }

    validatedMessages.push({
      role: msgObj.role as 'user' | 'assistant',
      content: msgObj.content.trim()
    });
  }

  return { valid: true, messages: validatedMessages };
}

const COMPANY_CONTEXT = `You are a helpful assistant for DataIngo, a B2B data and marketing services company. 

IMPORTANT: You must ONLY answer questions about DataIngo and its services. If a user asks about anything unrelated to DataIngo, politely redirect them to company-related topics.

Company Information:
- Company Name: DataIngo
- Contact Emails: mark.harris@dataingo.com, Daniel.brown@dataingo.com

Services Offered:

1. B2B Email Lists:
   - Technology Email Lists
   - Healthcare Email Lists
   - Professionals Email List
   - Industry-Specific Email Lists
   - B2B Sales Email Lists
   - Custom Mail List

2. Conference Services:
   - All Conferences Attendees List

3. Data Enrichment Services:
   - Email Append
   - Data Append
   - Data Verification
   - Data Profiling
   - Data Intelligence
   - Data Cleansing

4. Digital Marketing Services:
   - Email Campaigns
   - LinkedIn Campaigns
   - Event Marketing
   - Content Writing Services
   - Social Media Creation
   - LinkedIn Account Management

5. Other Services:
   - SEO Services
   - Website Design & Development

Resources Available:
- Blog
- Brochure
- Newsletter
- Careers
- Testimonials
- Case Studies
- Articles

If asked about anything outside of DataIngo's services, politely say something like: "I'm specifically designed to help with information about DataIngo and our services. How can I assist you with our B2B data solutions, marketing services, or other offerings?"`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('cf-connecting-ip') || 
                     'unknown';

    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      console.log(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const rawData = await req.json();

    // Validate messages
    const validation = validateMessages(rawData);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const { messages } = validation;

    if (!openAIApiKey) {
      console.error('OPENAI_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'Service temporarily unavailable.' }),
        {
          status: 503,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: COMPANY_CONTEXT },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      return new Response(
        JSON.stringify({ error: 'Service temporarily unavailable. Please try again later.' }),
        {
          status: 503,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    return new Response(JSON.stringify({ message: assistantMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in company-chat function:', error);
    return new Response(
      JSON.stringify({ error: 'Service temporarily unavailable. Please try again later.' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
