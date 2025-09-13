import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const EmailAppend: React.FC = () => {
  const contentBlocks = [
    {
      title: "Fill Missing Email Addresses Instantly",
      content: "Transform incomplete contact databases by appending verified email addresses. Our email append service uses multiple data sources and validation techniques to find and verify missing email addresses for your business contacts, increasing your database completeness up to 95%.",
      imagePosition: 'left' as const
    },
    {
      title: "Advanced Email Discovery & Validation",
      content: "Our sophisticated algorithms search across professional networks, business directories, and verified databases to discover accurate email addresses. Each found email undergoes multi-step validation including SMTP verification, domain checks, and deliverability testing.",
      imagePosition: 'right' as const
    },
    {
      title: "GDPR Compliant & CAN-SPAM Ready",
      content: "All email append services comply with GDPR, CAN-SPAM, and international data protection regulations. We provide opt-in status verification and include necessary compliance data for your marketing campaigns. Delivery within 2-5 business days.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "SMTP Email Verification",
    "Multi-Source Data Discovery", 
    "Deliverability Testing",
    "Compliance Status Tracking",
    "Duplicate Detection",
    "CSV/Excel Export"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Data Enrichment', href: '/services/data-enrichment' },
    { name: 'Email Append', href: '/services/data-enrichment/email-append' }
  ];

  return (
    <ServicePageTemplate
      title="Email Append Services"
      subtitle="Discover and verify missing email addresses for complete contact profiles"
      description="Fill gaps in your contact database with verified email addresses. Our email append service helps you reach more prospects by finding missing email contacts through advanced data discovery and multi-step verification processes."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default EmailAppend;