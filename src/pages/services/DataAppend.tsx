import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const DataAppend: React.FC = () => {
  const contentBlocks = [
    {
      title: "Enrich Contact Records with Business Intelligence",
      content: "Append missing business data including company information, job titles, phone numbers, social profiles, and firmographic details. Transform basic contact lists into comprehensive business intelligence databases for better segmentation and targeting.",
      imagePosition: 'left' as const
    },
    {
      title: "Advanced Firmographic & Technographic Data",
      content: "Add valuable business insights including company size, revenue bands, industry classifications (SIC/NAICS), technology stack usage, and buying signals. Perfect for CRM enrichment, lead scoring, and personalized outreach campaigns.",
      imagePosition: 'right' as const
    },
    {
      title: "Scalable Data Enhancement Solutions",
      content: "Process databases of any size with our scalable data append services. From small contact lists to enterprise databases with millions of records, we deliver consistent data quality and completeness within agreed timeframes.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "Firmographic Data Append",
    "Technographic Intelligence",
    "Social Profile Discovery",
    "Phone Number Append",
    "Industry Classification",
    "Revenue & Size Data"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Data Enrichment', href: '/services/data-enrichment' },
    { name: 'Data Append', href: '/services/data-enrichment/data-append' }
  ];

  return (
    <ServicePageTemplate
      title="Data Append Services" 
      subtitle="Complete your contact profiles with comprehensive business intelligence"
      description="Enhance your existing contact databases with missing business information, firmographic data, and intelligence insights. Our data append services help you build comprehensive customer profiles for more effective marketing and sales campaigns."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default DataAppend;