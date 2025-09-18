import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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
    
    console.log("Processing form submission:", formData);
    
    // Prepare email content
    const subject = `New ${formData.formType} Form Submission from ${formData.fullName}`;
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Form Submission - ${formData.formType}
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #495057; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${formData.fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          ${formData.phone ? `<p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>` : ''}
          ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
        </div>
        
        ${formData.requirements ? `
        <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #856404; margin-top: 0;">Requirements</h3>
          <p style="color: #856404;">${formData.requirements}</p>
        </div>
        ` : ''}
        
        ${formData.message ? `
        <div style="background: #d1ecf1; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0c5460; margin-top: 0;">Message</h3>
          <p style="color: #0c5460;">${formData.message}</p>
        </div>
        ` : ''}
        
        ${formData.category ? `<p><strong>Category:</strong> ${formData.category}</p>` : ''}
        ${formData.country ? `<p><strong>Country:</strong> ${formData.country}</p>` : ''}
        
        <div style="margin-top: 30px; padding: 15px; background: #e9ecef; border-radius: 8px;">
          <p style="margin: 0; color: #6c757d; font-size: 14px;">
            <strong>Submitted:</strong> ${new Date().toLocaleString()}<br>
            <strong>Form Type:</strong> ${formData.formType}
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

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Form submitted and email sent successfully",
        emailId: emailResponse.data?.id 
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

serve(handler);