import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const DataEnrichment: React.FC = () => {
  const contentBlocks = [
    {
      title: "Transform Incomplete Data into Business Assets",
      content: "Turn your existing customer and prospect databases into powerful business tools with our comprehensive data enrichment services. We fill in missing information, verify accuracy, and add valuable insights that help you better understand and engage with your audience.",
      imagePosition: 'left' as const
    },
    {
      title: "Advanced Data Enhancement Techniques",
      content: "Our enrichment process uses multiple data sources and advanced algorithms to append missing contact information, company details, demographic data, and behavioral insights. Increase your data completeness from fragmented records to comprehensive customer profiles.",
      imagePosition: 'right' as const
    },
    {
      title: "Real-Time Verification and Updates",
      content: "Keep your data fresh and accurate with ongoing verification and updates. Our system continuously monitors changes in contact information, job titles, company status, and other key data points to ensure your database remains current and reliable.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "Data Completeness Enhancement",
    "Real-Time Verification",
    "Multi-Source Data Append",
    "Quality Scoring System",
    "Duplicate Removal",
    "Compliance Management"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Data Enrichment', href: '/services/data-enrichment' }
  ];

  return (
    <ServicePageTemplate
      title="Data Enrichment Services"
      subtitle="Maximize the impact of your data with comprehensive data enrichment.)  (Advantages of Data Enrichment & Transform your existing data into valuable business assets"
      description="DataInGo Solutions data enrichment services deliver critical insights that empower marketing, sales, and business leaders to make smarter decisions. By enhancing your data with detailed segmentation—covering technology usage, company specifics, and industry trends—we provide a deeper, more comprehensive understanding of your audience. Our enrichment includes psychographic profiling and geo-tagging, allowing precise targeting and location-based lead sorting. This holistic approach transforms your data into a powerful asset that drives improved outcomes across all your business strategies. Enhance your customer and prospect databases with our comprehensive data enrichment services. We fill missing information, verify accuracy, and add valuable insights to help you make better business decisions and improve campaign performance."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default DataEnrichment;