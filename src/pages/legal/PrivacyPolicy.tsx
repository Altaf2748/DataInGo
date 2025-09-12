// Privacy Policy page
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-poppins">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              
              <p className="mb-8">
                Global Datasys Group ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Information We Collect
              </h2>
              <p className="mb-4">
                We may collect information about you in a variety of ways, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Personal Data: Name, email address, phone number, company information</li>
                <li>Usage Data: Information about how you use our website and services</li>
                <li>Technical Data: IP address, browser type, device information</li>
                <li>Marketing Data: Your preferences in receiving marketing communications</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Data Sharing and Disclosure
              </h2>
              <p className="mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Your Rights
              </h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification or correction</li>
                <li>Right to erasure or deletion</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Contact Us
              </h2>
              <p className="mb-6">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-accent/20 p-4 rounded-lg">
                <p><strong>Email:</strong> info@globaldatasysgroup.com</p>
                <p><strong>Phone:</strong> +1 307 683 8467</p>
                <p><strong>Address:</strong> 1309 Coffeen Avenue, STE 1200, Sheridan, Wyoming 82801</p>
              </div>

              <p className="text-sm text-foreground/60 mt-8">
                <em>Note: This is a general privacy policy template. Please consult with legal counsel 
                to ensure compliance with applicable privacy laws and regulations.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;