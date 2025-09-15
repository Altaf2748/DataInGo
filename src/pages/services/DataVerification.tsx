import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const DataVerification: React.FC = () => {
  const contentBlocks = [
    {
      title: "Guaranteeing Data Integrity with Our Verification Services",
      content: "Accurate and current data is crucial for maximizing the impact of your marketing strategies and business processes. At DataInGo Solutions, our thorough data verification services guarantee that your contact lists remain precise and free from errors. By cross-checking your data with trusted sources, we remove outdated or duplicate entries, resulting in a streamlined and more effective list. This ensures improved email deliverability, so your campaigns reach the right audience and avoid issues like bounced emails or wasted efforts.",
      imagePosition: 'left' as const
    },
    {
      title: "Maximizing Campaign Performance and ROI",
      content: "The effectiveness of your email campaigns hinges on the accuracy of your contact list. Email verification ensures that the addresses in your list are valid and active, helping you avoid issues like deliverability problems and a tarnished sender reputation. By verifying your emails, you ensure they are accurate and trustworthy, so your messages reach the right audience without any obstacles.",
      imagePosition: 'right' as const
    },
    {
      title: "Email Verification",
      content: "The effectiveness of your email campaigns hinges on the accuracy of your contact list. Email verification ensures that the addresses in your list are valid and active, helping you avoid issues like deliverability problems and a tarnished sender reputation. By verifying your emails, you ensure they are accurate and trustworthy, so your messages reach the right audience without any obstacles.",
      imagePosition: 'left' as const
    },
    {
      title: "Tele Verification",
      content: "Each incorrect contact can harm your business. Our phone verification service cleans and updates your database by detecting and correcting any inconsistencies in your contact information. We employ a comprehensive process to remove outdated or inactive entries, ensuring your database remains accurate and optimized for effective outreach. This leads to improved communication with potential leads and minimizes wasted efforts.",
      imagePosition: 'right' as const
    },
    {
      title: "Social Verification",
      content: "We validate the company names and job titles of contacts in your database by cross-checking them across multiple social media and online platforms. This ensures you're connecting with the right individuals in the appropriate roles. Our social verification services enhance your telemarketing and follow-up efforts, boosting your engagement with the most relevant prospects.",
      imagePosition: 'left' as const
    },
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