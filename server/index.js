// Main server entry point
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Global rate limiting
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again after 15 minutes.'
  }
});

app.use('/api/', globalLimiter);

// Import API routes
const allConferencesApi = require('./api/all-conferences-request');
const { testConnection } = require('./mailer');

// Use API routes
app.use('/', allConferencesApi);

// Contact form endpoint (existing functionality)
app.post('/api/contact', async (req, res) => {
  const { sendContactFormEmail } = require('./mailer');
  
  try {
    const { name, company, email, phone, message, hp } = req.body;
    
    // Honeypot check
    if (hp && hp.trim() !== '') {
      return res.status(400).json({ error: 'Invalid submission detected.' });
    }
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }
    
    const formData = {
      name: name.trim(),
      company: company?.trim() || '',
      email: email.trim(),
      phone: phone?.trim() || '',
      message: message.trim(),
      ip: req.ip || req.connection.remoteAddress
    };
    
    const emailResult = await sendContactFormEmail(formData, process.env.CONTACT_TO);
    
    if (emailResult.success) {
      res.status(200).json({ 
        ok: true, 
        message: 'Thank you for your message. We will get back to you soon.' 
      });
    } else {
      res.status(500).json({ 
        error: 'Failed to send message. Please try again later.' 
      });
    }
    
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Health check
app.get('/api/health', async (req, res) => {
  const emailTest = await testConnection();
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    email: emailTest.success ? 'Connected' : 'Error',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({ 
    error: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { details: error.message })
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  
  // Test email connection on startup
  testConnection().then(result => {
    if (result.success) {
      console.log('✅ Email service connected successfully');
    } else {
      console.log('❌ Email service connection failed:', result.error);
    }
  });
});

module.exports = app;