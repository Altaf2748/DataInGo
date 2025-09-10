import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const B2BSalesEmailLists: React.FC = () => {
  const contentBlocks = [
    {
      title: "Sales-Ready Lead Lists",
      content: "Get pre-qualified leads that are ready for your sales team to contact. Our B2B sales email lists include prospects who have shown buying intent, have the budget and authority to make purchasing decisions, and match your ideal customer profile.",
      imagePosition: 'left' as const
    },
    {
      title: "Lead Scoring and Qualification",
      content: "Each lead comes with detailed scoring based on company growth, recent funding, technology adoption, and buying signals. Focus your sales efforts on the highest-potential prospects with our advanced lead qualification and scoring methodology.",
      imagePosition: 'right' as const
    },
    {
      title: "CRM Integration and Sales Intelligence",
      content: "Seamlessly import leads into your CRM system with our standardized data formats. Each contact includes company insights, recent news, technology stack, and other sales intelligence to help your team personalize their outreach and increase conversion rates.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "Pre-Qualified Leads",
    "Lead Scoring System",
    "Buying Intent Signals",
    "CRM Integration Ready",
    "Sales Intelligence Data",
    "Conversion Optimization"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'B2B Email Lists', href: '/services/b2b-email-list' },
    { name: 'B2B Sales Email Lists', href: '/services/b2b-email-list/b2b-sales-email-lists' }
  ];

  return (
    <ServicePageTemplate
      title="B2B Sales Email Lists"
      subtitle="High-quality leads ready for your sales team to convert"
      description="Accelerate your sales process with pre-qualified B2B leads. Our sales email lists include prospects with verified buying intent, decision-making authority, and budget allocation, giving your sales team the best chance of conversion success."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default B2BSalesEmailLists;