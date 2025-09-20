// GDPR Compliance page
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GdprCompliance: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-poppins">
              GDPR Compliance
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              
              <p className="mb-8">
                DataInGo Solutions is committed to protecting your personal data and respecting your 
                privacy rights under the General Data Protection Regulation (GDPR).
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Your Rights Under GDPR
              </h2>
              <p className="mb-4">
                Under the GDPR, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Right to be informed:</strong> You have the right to know how your data is processed</li>
                <li><strong>Right of access:</strong> You can request a copy of your personal data</li>
                <li><strong>Right to rectification:</strong> You can request correction of inaccurate data</li>
                <li><strong>Right to erasure:</strong> You can request deletion of your personal data</li>
                <li><strong>Right to restrict processing:</strong> You can limit how we use your data</li>
                <li><strong>Right to data portability:</strong> You can request your data in a portable format</li>
                <li><strong>Right to object:</strong> You can object to certain types of processing</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Legal Basis for Processing
              </h2>
              <p className="mb-4">
                We process your personal data based on the following legal bases:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Consent:</strong> When you have given clear consent for specific processing</li>
                <li><strong>Contract:</strong> When processing is necessary for a contract with you</li>
                <li><strong>Legal obligation:</strong> When we must process data to comply with the law</li>
                <li><strong>Legitimate interests:</strong> When processing is necessary for our legitimate business interests</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Data Protection Measures
              </h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your data:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Staff training on data protection</li>
                <li>Data minimization and retention policies</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                International Transfers
              </h2>
              <p className="mb-6">
                When we transfer your personal data outside the European Economic Area (EEA), 
                we ensure adequate protection through appropriate safeguards such as Standard 
                Contractual Clauses or adequacy decisions by the European Commission.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Data Retention
              </h2>
              <p className="mb-6">
                We retain your personal data only for as long as necessary to fulfill the purposes 
                for which it was collected, comply with legal obligations, or resolve disputes.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Exercising Your Rights
              </h2>
              <p className="mb-6">
                To exercise any of your GDPR rights, please contact us using the information below. 
                We will respond to your request within one month.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Contact Our Data Protection Officer
              </h2>
              <div className="bg-accent/20 p-4 rounded-lg mb-6">
                <p><strong>Email:</strong> daniel.brown@dataingo.com</p>
                <p><strong>General Contact:</strong> projects@dataingo.com</p>
                <p><strong>Phone:</strong> {/*+1 307 683 8467*/}</p>
                <p><strong>Address:</strong> 16192 Coastal Highway, Lewes, DE 19958 USA</p>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Complaints
              </h2>
              <p className="mb-6">
                If you believe we have not handled your personal data properly, you have the right 
                to lodge a complaint with your local supervisory authority.
              </p>

              <p className="text-sm text-foreground/60 mt-8">
                <em>Note: This is a general GDPR compliance statement. Please consult with legal counsel 
                to ensure full compliance with GDPR requirements specific to your business operations.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GdprCompliance;