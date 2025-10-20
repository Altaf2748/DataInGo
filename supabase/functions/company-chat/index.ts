import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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
    const { messages } = await req.json();

    if (!openAIApiKey) {
      throw new Error('OPENAI_API_KEY is not configured');
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
      const error = await response.text();
      console.error('OpenAI API error:', error);
      throw new Error('Failed to get response from AI');
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    return new Response(JSON.stringify({ message: assistantMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in company-chat function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
