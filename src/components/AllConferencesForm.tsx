// All Conferences Attendees form component with validation and submission
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { submitFormToDatabase } from '@/lib/formSubmission';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  fullName: string;
  phoneNumber: string;
  businessEmail: string;
  requirements: string;
  hp: string; // honeypot field
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  businessEmail?: string;
  requirements?: string;
}

const AllConferencesForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    businessEmail: '',
    requirements: searchParams.get('category') || '',
    hp: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please enter a valid email address';
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Please tell us your requirements';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Honeypot check
    if (formData.hp) {
      console.log('Bot submission detected');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Submit to database
      const dbResult = await submitFormToDatabase({
        form_type: 'all_conferences',
        full_name: formData.fullName,
        email: formData.businessEmail,
        phone: formData.phoneNumber,
        requirements: formData.requirements,
        category: searchParams.get('category') || undefined,
        ip_address: undefined, // Will be handled by server
        user_agent: navigator.userAgent
      });

      if (!dbResult.success) {
        throw new Error('Failed to save to database');
      }

      // Send email via edge function
      const { error: emailError } = await supabase.functions.invoke('send-form-email', {
        body: {
          formType: 'All Conferences Request',
          fullName: formData.fullName,
          email: formData.businessEmail,
          phone: formData.phoneNumber,
          requirements: formData.requirements,
          category: searchParams.get('category')
        }
      });

      if (emailError) {
        console.error('Email sending error:', emailError);
        // Don't throw error - form was saved to database
      }

      setSubmitSuccess(true);
      toast({
        title: "Success!",
        description: "Thank you for your requirements submission. We will get back to you soon.",
      });
      
      setFormData({
        fullName: '',
        phoneNumber: '',
        businessEmail: '',
        requirements: '',
        hp: ''
      });
    } catch (error) {
      console.error('All conferences form error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
      toast({
        title: "Error",
        description: "Failed to send your requirements. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-primary rounded-2xl p-6 md:p-8 text-hero-text shadow-hover">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold font-poppins mb-2">
          Submit Your Requirements Here!
        </h3>
        <p className="text-hero-text/80">
          Tell us what you're looking for and we'll get back to you within 24 hours.
        </p>
      </div>

      {submitSuccess && (
        <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4 mb-6">
          <p className="text-green-100 text-center">
            Thank you! Your requirements have been submitted successfully. We'll contact you soon.
          </p>
        </div>
      )}

      {submitError && (
        <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4 mb-6">
          <p className="text-red-100 text-center" role="alert">
            {submitError}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Honeypot field */}
        <input
          type="text"
          name="hp"
          value={formData.hp}
          onChange={(e) => handleInputChange('hp', e.target.value)}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg bg-white/10 border text-hero-text placeholder-hero-text/60 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-hero-text/50 transition-all ${
              errors.fullName ? 'border-red-400' : 'border-hero-text/30'
            }`}
            placeholder="Enter your full name"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-red-200 text-sm mt-1" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg bg-white/10 border text-hero-text placeholder-hero-text/60 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-hero-text/50 transition-all ${
              errors.phoneNumber ? 'border-red-400' : 'border-hero-text/30'
            }`}
            placeholder="Enter your phone number"
            aria-invalid={!!errors.phoneNumber}
            aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
          />
          {errors.phoneNumber && (
            <p id="phoneNumber-error" className="text-red-200 text-sm mt-1" role="alert">
              {errors.phoneNumber}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="businessEmail" className="block text-sm font-medium mb-2">
            Business Email Address *
          </label>
          <input
            type="email"
            id="businessEmail"
            value={formData.businessEmail}
            onChange={(e) => handleInputChange('businessEmail', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg bg-white/10 border text-hero-text placeholder-hero-text/60 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-hero-text/50 transition-all ${
              errors.businessEmail ? 'border-red-400' : 'border-hero-text/30'
            }`}
            placeholder="Enter your business email"
            aria-invalid={!!errors.businessEmail}
            aria-describedby={errors.businessEmail ? 'businessEmail-error' : undefined}
          />
          {errors.businessEmail && (
            <p id="businessEmail-error" className="text-red-200 text-sm mt-1" role="alert">
              {errors.businessEmail}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="requirements" className="block text-sm font-medium mb-2">
            Tell us Your Requirements *
          </label>
          <textarea
            id="requirements"
            rows={4}
            value={formData.requirements}
            onChange={(e) => handleInputChange('requirements', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg bg-white/10 border text-hero-text placeholder-hero-text/60 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-hero-text/50 transition-all resize-none ${
              errors.requirements ? 'border-red-400' : 'border-hero-text/30'
            }`}
            placeholder="Please describe your specific requirements, target audience, event categories of interest, etc."
            aria-invalid={!!errors.requirements}
            aria-describedby={errors.requirements ? 'requirements-error' : undefined}
          />
          {errors.requirements && (
            <p id="requirements-error" className="text-red-200 text-sm mt-1" role="alert">
              {errors.requirements}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-hero-text text-secondary-dark font-semibold py-4 px-6 rounded-lg hover:bg-hero-text/90 focus:outline-none focus:ring-2 focus:ring-hero-text/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>SUBMITTING...</span>
            </>
          ) : (
            <span>SUBMIT</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default AllConferencesForm;