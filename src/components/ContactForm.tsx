import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  requirements: string;
  hp: string; // honeypot field
}

interface ContactInfo {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    label: "Address",
    value: "16192 Coastal Highway, Lewes, DE 19958 USA" 
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 307 683 8467",
    href: "tel:+13076838467"
  },
  {
    icon: Mail,
    label: "Mailbox",
    value: "projects@dataingo.com",
    href: "mailto:projects@dataingo.com"
  },
  {
    icon: Mail,
    label: "Sales & Support",
    value: "mark.harris@dataingo.com",
    href: "mailto:mark.harris@dataingo.com"
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Monday - Friday : 09 AM - 05 PM"
  }
];

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirements: '',
    hp: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Please describe your data requirements';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.hp) {
      console.log('Bot submission detected');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          requirements: formData.requirements,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          requirements: '',
          hp: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-poppins">
            Connect With Us Now
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to transform your business with our data solutions? Get in touch with our experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">
                Get In Touch
              </h3>
              <p className="text-foreground/70 mb-8">
                Have questions about our services? Need a custom data solution? 
                Our team is here to help you succeed.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = (
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-hero-text" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.label}
                      </h4>
                      <p className="text-foreground/70">
                        {info.value}
                      </p>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a key={index} href={info.href} className="block hover:opacity-80 transition-opacity">
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-primary rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-hero-text mb-2 font-poppins">
                Send Us a Message
              </h3>
              <p className="text-hero-text/80">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-hero-text mx-auto mb-4" />
                <h4 className="text-xl font-bold text-hero-text mb-2">
                  Thank You!
                </h4>
                <p className="text-hero-text/80">
                  Your message has been sent successfully. We'll contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="hp"
                  value={formData.hp}
                  onChange={handleInputChange}
                  className="sr-only"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="form-label text-hero-text">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input bg-hero-text/10 border-hero-text/20 text-hero-text placeholder-hero-text/50 focus:border-hero-text ${
                      errors.name ? 'border-destructive' : ''
                    }`}
                    placeholder="Enter your full name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-destructive-foreground flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="form-label text-hero-text">
                    Company Name*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`form-input bg-hero-text/10 border-hero-text/20 text-hero-text placeholder-hero-text/50 focus:border-hero-text ${
                      errors.company ? 'border-destructive' : ''
                    }`}
                    placeholder="Enter your company name"
                    aria-describedby={errors.company ? 'company-error' : undefined}
                  />
                  {errors.company && (
                    <p id="company-error" className="mt-2 text-sm text-destructive-foreground flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="form-label text-hero-text">
                    Business Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input bg-hero-text/10 border-hero-text/20 text-hero-text placeholder-hero-text/50 focus:border-hero-text ${
                      errors.email ? 'border-destructive' : ''
                    }`}
                    placeholder="Enter your business email"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-destructive-foreground flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="form-label text-hero-text">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`form-input bg-hero-text/10 border-hero-text/20 text-hero-text placeholder-hero-text/50 focus:border-hero-text ${
                      errors.phone ? 'border-destructive' : ''
                    }`}
                    placeholder="Enter your phone number"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-2 text-sm text-destructive-foreground flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Requirements */}
                <div>
                  <label htmlFor="requirements" className="form-label text-hero-text">
                    Your Data Requirements*
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    value={formData.requirements}
                    onChange={handleInputChange}
                    className={`form-input bg-hero-text/10 border-hero-text/20 text-hero-text placeholder-hero-text/50 focus:border-hero-text resize-vertical ${
                      errors.requirements ? 'border-destructive' : ''
                    }`}
                    placeholder="Describe your data requirements, target audience, or specific needs..."
                    aria-describedby={errors.requirements ? 'requirements-error' : undefined}
                  />
                  {errors.requirements && (
                    <p id="requirements-error" className="mt-2 text-sm text-destructive-foreground flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.requirements}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-hero-text text-primary font-semibold py-4 px-6 rounded-lg hover:bg-hero-text/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>SUBMIT</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;