import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import b2bSalesHeroImage from '@/assets/services-b2b-sales-hero.jpg';
import servicesLeadGenerationImage from '@/assets/services-lead-generation.jpg';
import servicesEmailOutreachImage from '@/assets/services-email-outreach.jpg';

const B2BSalesEmailLists: React.FC = () => {
  const contentBlocks = [
    {
      title: "Accelerate Your B2B Sales Pipeline with Quality Leads",
      content: "Transform your sales process with our comprehensive B2B sales email lists designed specifically for sales teams. Access verified contact information for decision-makers across industries, including purchasing managers, procurement officers, and C-level executives who have the authority to make buying decisions.",
      imagePosition: 'left' as const,
      image: servicesLeadGenerationImage
    },
    {
      title: "Sales-Ready Prospects with Buying Intent",
      content: "Our B2B sales lists are curated with sales teams in mind, focusing on prospects who are actively seeking solutions in your market space. We identify companies in growth phases, those with recent funding, and organizations with expansion plans to ensure you're targeting prospects with genuine buying intent.",
      imagePosition: 'right' as const,
      image: servicesEmailOutreachImage
    },
    {
      title: "Advanced Sales Intelligence and Lead Scoring",
      content: "Go beyond basic contact information with our sales intelligence features. Get insights into company financials, recent news, technology stack, employee count, and growth indicators to help your sales team prioritize leads and personalize their outreach for maximum conversion rates.",
      imagePosition: 'left' as const,
      image: servicesLeadGenerationImage
    },
    {
      title: "CRM-Ready Data Integration",
      content: "Our B2B sales email lists are formatted for seamless integration with popular CRM systems including Salesforce, HubSpot, and Pipedrive. Import your leads instantly and start your sales campaigns without data formatting delays or technical complications.",
      imagePosition: 'right' as const,
      image: servicesEmailOutreachImage
    },
    {
      title: "Sales Team Success Metrics and ROI Tracking",
      content: "Track your sales success with our built-in analytics and reporting features. Monitor email open rates, response rates, meeting bookings, and conversion metrics to continuously optimize your sales outreach and demonstrate clear ROI from your email campaigns.",
      imagePosition: 'left' as const,
      image: servicesLeadGenerationImage
    }
  ];

  const features = [
    "Sales-Qualified Leads",
    "Buying Intent Indicators",
    "CRM Integration Ready",
    "Lead Scoring Metrics",
    "Sales Intelligence Data",
    "ROI Tracking Tools"
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
      subtitle="Sales-ready prospects with verified contact information and buying intent"
      description="Supercharge your B2B sales efforts with our targeted sales email lists. Reach decision-makers and influencers who are actively seeking solutions in your market. Our sales-focused database includes buying intent signals, company intelligence, and CRM-ready formatting."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
      heroImage={b2bSalesHeroImage}
    />
  );
};

export default B2BSalesEmailLists;