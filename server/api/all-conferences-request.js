// Server endpoint for All Conferences Attendees List form submissions
const express = require('express');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting: 10 submissions per IP per hour
const allConferencesLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // limit each IP to 10 requests per windowMs
  message: {
    error: 'Too many submissions from this IP, please try again after an hour.'
  }
});

// Email transporter configuration
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

// Validation functions
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const sanitizeInput = (input) => {
  return input.toString().trim().replace(/[<>]/g, '');
};

// CSV logging function
const logToCsv = async (formData) => {
  const csvDir = path.join(__dirname, '../logs');
  const csvFile = path.join(csvDir, 'all-conferences-requests.csv');
  
  try {
    // Ensure logs directory exists
    await fs.mkdir(csvDir, { recursive: true });
    
    const timestamp = new Date().toISOString();
    const csvRow = `"${timestamp}","${formData.fullName}","${formData.businessEmail}","${formData.phoneNumber}","${formData.requirements.replace(/"/g, '""')}"\n`;
    
    // Check if file exists, if not create with headers
    try {
      await fs.access(csvFile);
    } catch (error) {
      const headers = '"Timestamp","Full Name","Email","Phone","Requirements"\n';
      await fs.writeFile(csvFile, headers);
    }
    
    // Append the new row
    await fs.appendFile(csvFile, csvRow);
    console.log('Form submission logged to CSV');
  } catch (error) {
    console.error('Error logging to CSV:', error);
  }
};

// JSON logging function
const logToJson = async (formData) => {
  const logDir = path.join(__dirname, '../logs');
  const logFile = path.join(logDir, 'all-conferences-requests.json');
  
  try {
    await fs.mkdir(logDir, { recursive: true });
    
    const logEntry = {
      timestamp: new Date().toISOString(),
      ...formData,
      ip: formData.ip || 'unknown'
    };
    
    let logs = [];
    try {
      const existingLogs = await fs.readFile(logFile, 'utf8');
      logs = JSON.parse(existingLogs);
    } catch (error) {
      // File doesn't exist or is empty, start with empty array
    }
    
    logs.push(logEntry);
    
    // Keep only the last 1000 entries to prevent file from growing too large
    if (logs.length > 1000) {
      logs = logs.slice(-1000);
    }
    
    await fs.writeFile(logFile, JSON.stringify(logs, null, 2));
    console.log('Form submission logged to JSON');
  } catch (error) {
    console.error('Error logging to JSON:', error);
  }
};

// Main handler
app.post('/api/all-conferences-request', allConferencesLimiter, async (req, res) => {
  try {
    const { fullName, phoneNumber, businessEmail, requirements, hp } = req.body;
    
    // Honeypot check
    if (hp && hp.trim() !== '') {
      console.log('Honeypot triggered, potential spam submission');
      return res.status(400).json({
        error: 'Invalid submission detected.'
      });
    }
    
    // Validation
    const errors = {};
    
    if (!fullName || fullName.trim().length < 2) {
      errors.fullName = 'Full name is required and must be at least 2 characters';
    }
    
    if (!phoneNumber || phoneNumber.trim().length < 6) {
      errors.phoneNumber = 'Valid phone number is required';
    }
    
    if (!businessEmail || !validateEmail(businessEmail)) {
      errors.businessEmail = 'Valid business email address is required';
    }
    
    if (!requirements || requirements.trim().length < 10) {
      errors.requirements = 'Please provide detailed requirements (minimum 10 characters)';
    }
    
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors
      });
    }
    
    // Sanitize inputs
    const cleanData = {
      fullName: sanitizeInput(fullName),
      phoneNumber: sanitizeInput(phoneNumber),
      businessEmail: sanitizeInput(businessEmail),
      requirements: sanitizeInput(requirements),
      ip: req.ip || req.connection.remoteAddress
    };
    
    // Log to CSV and JSON
    await Promise.all([
      logToCsv(cleanData),
      logToJson(cleanData)
    ]);
    
    // Send email notification
    try {
      const transporter = createTransporter();
      
      const emailContent = `
        New All Conferences Attendees List Request
        
        Full Name: ${cleanData.fullName}
        Email: ${cleanData.businessEmail}
        Phone: ${cleanData.phoneNumber}
        
        Requirements:
        ${cleanData.requirements}
        
        Submitted at: ${new Date().toLocaleString()}
        IP Address: ${cleanData.ip}
      `;
      
      const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_TO_AC_EVENTS || 'Daniel.brown@dataingo.com',
        cc: process.env.CONTACT_TO || 'mark.harris@dataingo.com', // Copy to general contact
        subject: 'New All Conferences Attendees List Request',
        text: emailContent,
        html: `
          <h2>New All Conferences Attendees List Request</h2>
          <p><strong>Full Name:</strong> ${cleanData.fullName}</p>
          <p><strong>Email:</strong> ${cleanData.businessEmail}</p>
          <p><strong>Phone:</strong> ${cleanData.phoneNumber}</p>
          <p><strong>Requirements:</strong></p>
          <p style="background: #f5f5f5; padding: 10px; border-radius: 5px;">${cleanData.requirements}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}<br>IP Address: ${cleanData.ip}</small></p>
        `
      };
      
      await transporter.sendMail(mailOptions);
      console.log('Email notification sent successfully');
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }
    
    // Success response
    res.status(200).json({
      ok: true,
      message: 'Your requirements have been submitted successfully. We will contact you within 24 hours.'
    });
    
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      error: 'Internal server error. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

module.exports = app;
