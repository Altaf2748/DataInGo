import React, { useState } from 'react';
import { Download, CheckCircle } from 'lucide-react';

const BrochureForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    try {
      // POST to /api/brochure-request would go here
      console.log('Brochure request:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting brochure request:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-xl p-8 shadow-card text-center">
        <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
          Brochure Request Submitted!
        </h3>
        <p className="text-foreground/70 mb-6">
          Thank you for your interest. We've sent the brochure to your email address. 
          You should receive it within the next 5-10 minutes.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="btn-outline"
        >
          Request Another Brochure
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-8 shadow-card">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Download className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2 font-poppins">
          Download Our Brochure
        </h3>
        <p className="text-foreground/70">
          Get detailed information about our services and solutions.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="form-label">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="form-input"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="form-label">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="form-input"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label className="form-label">
            Company Name *
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            required
            className="form-input"
            placeholder="Enter your company name"
          />
        </div>

        <div>
          <label className="form-label">
            Country *
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
            className="form-input"
          >
            <option value="">Select your country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="UK">United Kingdom</option>
            <option value="AU">Australia</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
            <option value="IN">India</option>
            <option value="JP">Japan</option>
            <option value="SG">Singapore</option>
            <option value="OTHER">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full btn-primary flex items-center justify-center space-x-2"
        >
          <Download className="w-5 h-5" />
          <span>Download Brochure</span>
        </button>
      </form>

      <p className="text-xs text-foreground/60 mt-4 text-center">
        By downloading our brochure, you agree to receive marketing communications from DataInGo Solutions.
      </p>
    </div>
  );
};

export default BrochureForm;