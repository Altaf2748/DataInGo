// Email utility module for consistent email sending
const nodemailer = require('nodemailer');

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Send email utility function
const sendEmail = async (options) => {
  try {
    const transporter = createTransporter();
    const result = await transporter.sendMail(options);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
};

// Template for contact form emails
const sendContactFormEmail = async (formData, recipient = 'mark.harris@dataingo.com') => {
  const emailContent = `
    New Contact Form Submission
    
    Name: ${formData.name}
    Company: ${formData.company || 'Not provided'}
    Email: ${formData.email}
    Phone: ${formData.phone || 'Not provided'}
    
    Message:
    ${formData.message}
    
    Submitted at: ${new Date().toLocaleString()}
    IP Address: ${formData.ip || 'Unknown'}
  `;
  
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: recipient,
    subject: 'New Contact Form Submission - DataInGo Solutions',
    text: emailContent,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p style="background: #f5f5f5; padding: 10px; border-radius: 5px;">${formData.message}</p>
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}<br>IP Address: ${formData.ip || 'Unknown'}</small></p>
    `
  };
  
  return await sendEmail(mailOptions);
};

// Template for All Conferences emails
const sendAllConferencesEmail = async (formData, recipient = 'Daniel.brown@dataingo.com') => {
  const emailContent = `
    New All Conferences Attendees List Request
    
    Full Name: ${formData.fullName}
    Email: ${formData.businessEmail}
    Phone: ${formData.phoneNumber}
    
    Requirements:
    ${formData.requirements}
    
    Submitted at: ${new Date().toLocaleString()}
    IP Address: ${formData.ip || 'Unknown'}
  `;
  
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: recipient,
    cc: process.env.CONTACT_TO || 'mark.harris@dataingo.com',
    subject: 'New All Conferences Attendees List Request',
    text: emailContent,
    html: `
      <h2>New All Conferences Attendees List Request</h2>
      <p><strong>Full Name:</strong> ${formData.fullName}</p>
      <p><strong>Email:</strong> ${formData.businessEmail}</p>
      <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
      <p><strong>Requirements:</strong></p>
      <p style="background: #f5f5f5; padding: 10px; border-radius: 5px;">${formData.requirements}</p>
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}<br>IP Address: ${formData.ip || 'Unknown'}</small></p>
    `
  };
  
  return await sendEmail(mailOptions);
};

// Test email connection
const testConnection = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    return { success: true };
  } catch (error) {
    console.error('SMTP connection failed:', error);
    return { success: false, error: error.message };
  }
};

module.exports = {
  createTransporter,
  sendEmail,
  sendContactFormEmail,
  sendAllConferencesEmail,
  testConnection
};