import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const DataIntelligence: React.FC = () => {
  const contentBlocks = [
    {
      title: "Advanced Business Intelligence & Intent Signals",
      content: "Transform raw data into actionable business intelligence with intent signals, buying behavior analysis, and market insights. Our data intelligence service identifies prospects showing purchase intent and provides strategic recommendations for optimal timing.",
      imagePosition: 'left' as const
    },
    {
      title: "Technographic & Competitive Intelligence", 
      content: "Discover what technologies your prospects use, their digital footprint, and competitive landscape insights. This intelligence enables precise targeting, personalized messaging, and strategic positioning for maximum campaign effectiveness.",
      imagePosition: 'right' as const
    },
    {
      title: "Predictive Analytics & Opportunity Scoring",
      content: "Leverage machine learning algorithms to score leads, predict conversion likelihood, and identify the best opportunities in your pipeline. Our intelligence platform helps prioritize prospects and optimize resource allocation for maximum ROI.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "Intent Signal Detection",
    "Technographic Profiling",
    "Behavioral Analytics",
    "Competitive Intelligence",
    "Predictive Lead Scoring",
    "Market Trend Analysis"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Data Enrichment', href: '/services/data-enrichment' },
    { name: 'Data Intelligence', href: '/services/data-enrichment/data-intelligence' }
  ];

  return (
    <ServicePageTemplate
      title="Data Intelligence Services"
      subtitle="Maximize the Power of Data Insights. Transform data into actionable business intelligence and intent insights"
      description="Unlock the power of your data with advanced intelligence services that reveal buying intent, competitive insights, and predictive analytics. Make data-driven decisions and identify high-value opportunities with our AI-powered intelligence platform."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default DataIntelligence;