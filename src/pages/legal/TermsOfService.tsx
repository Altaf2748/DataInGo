// Terms of Service page
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-poppins">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              
              <p className="mb-8">
                These Terms of Service ("Terms") govern your use of the DataInGo Solutions website 
                and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Acceptance of Terms
              </h2>
              <p className="mb-6">
                By accessing and using our website and services, you accept and agree to be bound by 
                the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Use License
              </h2>
              <p className="mb-4">
                Permission is granted to temporarily access our services for personal, non-commercial 
                transitory viewing only. This is the grant of a license, not a transfer of title, and 
                under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for commercial purposes or for public display</li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>Attempt to reverse engineer any software contained on our website</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Service Terms
              </h2>
              <p className="mb-4">
                Our data and marketing services are subject to the following terms:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Data is provided "as is" with accuracy guarantees as specified in service agreements</li>
                <li>Use of data must comply with applicable privacy and anti-spam regulations</li>
                <li>Clients are responsible for their own compliance with GDPR, CAN-SPAM, and other laws</li>
                <li>Services are delivered according to agreed timelines and specifications</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Limitations
              </h2>
              <p className="mb-6">
                In no event shall DataInGo Solutions be liable for any damages arising out of the use 
                or inability to use the materials on our website or services, even if we have been 
                notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Governing Law
              </h2>
              <p className="mb-6">
                These terms and conditions are governed by and construed in accordance with the laws 
                of Wyoming, USA, and you irrevocably submit to the exclusive jurisdiction of the courts 
                in that state or location.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Contact Information
              </h2>
              <div className="bg-accent/20 p-4 rounded-lg">
                <p><strong>Email:</strong> projects@dataingo.com</p>
                <p><strong>Phone:</strong> +1 307 683 8467</p>
                <p><strong>Address:</strong> 16192 Coastal Highway, Lewes, DE 19958 USA</p>
              </div>

              <p className="text-sm text-foreground/60 mt-8">
                <em>Note: This is a general terms of service template. Please consult with legal counsel 
                to ensure compliance with applicable laws and regulations.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;