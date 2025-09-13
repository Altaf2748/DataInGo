import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const DataProfiling: React.FC = () => {
  const contentBlocks = [
    {
      title: "Comprehensive Database Analysis & Insights",
      content: "Discover the true state of your database with detailed profiling reports. Our data profiling service analyzes completeness, accuracy, consistency, and uniqueness across all data fields to provide actionable insights for database optimization.",
      imagePosition: 'left' as const
    },
    {
      title: "Data Quality Scoring & Recommendations",
      content: "Receive detailed quality scores and recommendations for each data field. Our profiling reports include distribution charts, pattern analysis, and specific suggestions for improving data quality and campaign performance.",
      imagePosition: 'right' as const
    },
    {
      title: "Segmentation & Campaign Optimization Insights",
      content: "Transform profiling insights into actionable marketing strategies. Identify high-value segments, discover data gaps, and receive recommendations for targeted campaigns based on your database composition and quality patterns.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "Data Completeness Analysis",
    "Quality Scoring Reports",
    "Pattern Recognition",
    "Uniqueness Assessment",
    "Distribution Charts",
    "Segmentation Insights"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Data Enrichment', href: '/services/data-enrichment' },
    { name: 'Data Profiling', href: '/services/data-enrichment/data-profiling' }
  ];

  return (
    <ServicePageTemplate
      title="Data Profiling Services"
      subtitle="Analyze and understand your database quality with detailed profiling reports"
      description="Gain deep insights into your database quality and composition with our comprehensive data profiling services. We analyze your data to identify patterns, quality issues, and opportunities for optimization."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default DataProfiling;