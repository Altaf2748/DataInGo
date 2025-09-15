import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const DataProfiling: React.FC = () => {
  const contentBlocks = [
    {
      title: "Optimizing Your Database for More Effective Campaigns",
      content: "At DataInGo Solutions, we recognize the value of having clean, organized data. Our robust data profiling services go beyond just eliminating duplicates—they also address data format inconsistencies and enrich your database with essential insights. By ensuring your contact information is accurate and current, we help maximize the effectiveness of your marketing campaigns. With a combination of manual and automated verification, we maintain the accuracy and reliability of your data, driving higher success rates.",
      imagePosition: 'left' as const
    },
    {
      title: "Enhancing Efficiency and ROI with Reliable Data",
      content: "Effective data profiling transforms your marketing strategy by ensuring your database is not only clean but enriched with valuable insights. Our team goes beyond basic data cleaning to enhance your contact records, helping you target the right audience with precision. With a well-organized and normalized database, you can optimize your outreach efforts, minimize wasted resources, and focus on high-potential leads. Partnering with DataInGo Solutions means gaining access to data-driven marketing tools that improve engagement, boost ROI, and accelerate business growth. Contact us today to start optimizing your data!",
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
      subtitle="Enhance Your Insight into Prospects with Data Profiling, Analyze and understand your database quality with detailed profiling reports"
      description="Streamline your database to uncover distinct data profiles and execute focused campaigns. Identify key buyer segments with our Data Profiling services. Gain deep insights into your database quality and composition with our comprehensive data profiling services. We analyze your data to identify patterns, quality issues, and opportunities for optimization."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default DataProfiling;