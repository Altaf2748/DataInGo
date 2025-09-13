import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const DataVerification: React.FC = () => {
  const contentBlocks = [
    {
      title: "Multi-Step Email & Contact Verification",
      content: "Ensure your contact database accuracy with our comprehensive verification process. We validate email addresses through SMTP checks, domain verification, bounce detection, and deliverability testing to maintain high-quality contact lists.",
      imagePosition: 'left' as const
    },
    {
      title: "Real-Time Data Quality Assessment",
      content: "Our verification system provides detailed accuracy reports including email validity status, phone number verification, address standardization, and data completeness scores. Identify and flag risky contacts before campaign launches.",
      imagePosition: 'right' as const
    },
    {
      title: "Compliance & Deliverability Optimization",
      content: "Improve email deliverability rates and maintain sender reputation by removing invalid, inactive, and high-risk email addresses. Our verification process helps you stay compliant with anti-spam regulations and achieve better campaign performance.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "SMTP Verification",
    "Domain & MX Record Checks",
    "Bounce Detection",
    "Catch-All Identification",
    "Phone Number Validation",
    "Address Standardization"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Data Enrichment', href: '/services/data-enrichment' },
    { name: 'Data Verification', href: '/services/data-enrichment/data-verification' }
  ];

  return (
    <ServicePageTemplate
      title="Data Verification Services"
      subtitle="Validate and verify contact data for maximum accuracy and deliverability"
      description="Ensure your marketing campaigns reach real, active contacts with our comprehensive data verification services. We validate email addresses, phone numbers, and contact details to improve deliverability and campaign performance."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default DataVerification;