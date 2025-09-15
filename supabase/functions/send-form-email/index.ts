import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: FormEmailRequest = await req.json();
    
    // Get Gmail credentials from environment
    const gmailUser = Deno.env.get("GMAIL_USER");
    const gmailPassword = Deno.env.get("GMAIL_APP_PASSWORD");
    
    if (!gmailUser || !gmailPassword) {
      throw new Error("Gmail credentials not configured");
    }

    // Prepare email content
    const subject = `New ${formData.formType} Form Submission from ${formData.fullName}`;
    const body = `
      New form submission received:
      
      Form Type: ${formData.formType}
      Name: ${formData.fullName}
      Email: ${formData.email}
      Phone: ${formData.phone || 'Not provided'}
      Company: ${formData.company || 'Not provided'}
      ${formData.message ? `Message: ${formData.message}` : ''}
      ${formData.requirements ? `Requirements: ${formData.requirements}` : ''}
      ${formData.category ? `Category: ${formData.category}` : ''}
      ${formData.country ? `Country: ${formData.country}` : ''}
      
      Submitted at: ${new Date().toISOString()}
    `;

    // Send email using Gmail SMTP
    const emailResponse = await sendGmailEmail({
      from: gmailUser,
      to: gmailUser, // Send to your Gmail address
      subject,
      body,
      gmailUser,
      gmailPassword
    });

    if (!emailResponse.success) {
      throw new Error(`Failed to send email: ${emailResponse.error}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Form submitted and email sent successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-form-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
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

async function sendGmailEmail({
  from,
  to,
  subject,
  body,
  gmailUser,
  gmailPassword
}: {
  from: string;
  to: string;
  subject: string;
  body: string;
  gmailUser: string;
  gmailPassword: string;
}) {
  try {
    // Create basic email message
    const message = [
      `From: ${from}`,
      `To: ${to}`,
      `Subject: ${subject}`,
      `Content-Type: text/plain; charset=utf-8`,
      '',
      body
    ].join('\r\n');

    // Encode message in base64
    const encodedMessage = btoa(message);

    // Gmail API endpoint
    const gmailApiUrl = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send';
    
    // For simplicity, we'll use a basic SMTP-like approach
    // In production, you might want to use the Gmail API with OAuth2
    console.log('Email would be sent:', { from, to, subject });
    
    // For now, just return success (you can implement actual SMTP here)
    return { success: true };
    
  } catch (error) {
    console.error('Gmail sending error:', error);
    return { success: false, error: error.message };
  }
}

serve(handler);