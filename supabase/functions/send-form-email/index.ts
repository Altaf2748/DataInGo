import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max requests per window
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

// HTML escape function to prevent XSS
function escapeHtml(text: string | undefined | null): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

interface FormEmailRequest {
  formType: string;
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  requirements?: string;
  category?: string;
  country?: string;
}

// Input validation
function validateFormData(data: unknown): { valid: true; data: FormEmailRequest } | { valid: false; error: string } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Invalid request body' };
  }

  const obj = data as Record<string, unknown>;

  // Required fields
  if (!obj.formType || typeof obj.formType !== 'string' || obj.formType.length > 50) {
    return { valid: false, error: 'Invalid or missing formType' };
  }

  if (!obj.fullName || typeof obj.fullName !== 'string' || obj.fullName.length < 2 || obj.fullName.length > 100) {
    return { valid: false, error: 'Name must be between 2 and 100 characters' };
  }

  if (!obj.email || typeof obj.email !== 'string' || obj.email.length > 255) {
    return { valid: false, error: 'Invalid email address' };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(obj.email)) {
    return { valid: false, error: 'Invalid email format' };
  }

  // Optional fields with length limits
  if (obj.phone !== undefined && obj.phone !== null && obj.phone !== '' && (typeof obj.phone !== 'string' || obj.phone.length > 30)) {
    return { valid: false, error: 'Phone number too long' };
  }

  if (obj.company !== undefined && obj.company !== null && obj.company !== '' && (typeof obj.company !== 'string' || obj.company.length > 200)) {
    return { valid: false, error: 'Company name too long' };
  }

  if (obj.requirements !== undefined && obj.requirements !== null && obj.requirements !== '' && (typeof obj.requirements !== 'string' || obj.requirements.length > 5000)) {
    return { valid: false, error: 'Requirements too long (max 5000 characters)' };
  }

  if (obj.message !== undefined && obj.message !== null && obj.message !== '' && (typeof obj.message !== 'string' || obj.message.length > 5000)) {
    return { valid: false, error: 'Message too long (max 5000 characters)' };
  }

  if (obj.category !== undefined && obj.category !== null && obj.category !== '' && (typeof obj.category !== 'string' || obj.category.length > 100)) {
    return { valid: false, error: 'Category too long' };
  }

  if (obj.country !== undefined && obj.country !== null && obj.country !== '' && (typeof obj.country !== 'string' || obj.country.length > 100)) {
    return { valid: false, error: 'Country too long' };
  }

  return {
    valid: true,
    data: {
      formType: obj.formType as string,
      fullName: obj.fullName as string,
      email: obj.email as string,
      phone: (obj.phone as string) || undefined,
      company: (obj.company as string) || undefined,
      requirements: (obj.requirements as string) || undefined,
      message: (obj.message as string) || undefined,
      category: (obj.category as string) || undefined,
      country: (obj.country as string) || undefined,
    }
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
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
        JSON.stringify({ success: false, error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const rawData = await req.json();
    
    // Validate input
    const validation = validateFormData(rawData);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ success: false, error: validation.error }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const formData = validation.data;
    
    console.log("Processing validated form submission for:", formData.email);
    
    // Prepare email content with escaped HTML to prevent XSS
    const subject = `New ${escapeHtml(formData.formType)} Form Submission from ${escapeHtml(formData.fullName)}`;
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Form Submission - ${escapeHtml(formData.formType)}
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #495057; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${escapeHtml(formData.fullName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
          ${formData.phone ? `<p><strong>Phone:</strong> ${escapeHtml(formData.phone)}</p>` : ''}
          ${formData.company ? `<p><strong>Company:</strong> ${escapeHtml(formData.company)}</p>` : ''}
        </div>
        
        ${formData.requirements ? `
        <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #856404; margin-top: 0;">Requirements</h3>
          <p style="color: #856404;">${escapeHtml(formData.requirements)}</p>
        </div>
        ` : ''}
        
        ${formData.message ? `
        <div style="background: #d1ecf1; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0c5460; margin-top: 0;">Message</h3>
          <p style="color: #0c5460;">${escapeHtml(formData.message)}</p>
        </div>
        ` : ''}
        
        ${formData.category ? `<p><strong>Category:</strong> ${escapeHtml(formData.category)}</p>` : ''}
        ${formData.country ? `<p><strong>Country:</strong> ${escapeHtml(formData.country)}</p>` : ''}
        
        <div style="margin-top: 30px; padding: 15px; background: #e9ecef; border-radius: 8px;">
          <p style="margin: 0; color: #6c757d; font-size: 14px;">
            <strong>Submitted:</strong> ${new Date().toLocaleString()}<br>
            <strong>Form Type:</strong> ${escapeHtml(formData.formType)}
          </p>
        </div>
      </div>
    `;

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "DataInGo Solutions <noreply@dataingo.com>",
      to: ["mark.harris@dataingo.com"],
      cc: formData.formType === "All Conferences Form" ? ["daniel.brown@dataingo.com"] : undefined,
      subject,
      html: htmlBody,
      replyTo: formData.email,
    });

    console.log("Email sent successfully");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Form submitted successfully"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: unknown) {
    console.error("Error in send-form-email function:", error);
    // Return generic error message to avoid exposing internal details
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Failed to submit form. Please try again later."
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
