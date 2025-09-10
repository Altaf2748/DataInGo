import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const DigitalMarketing: React.FC = () => {
  const contentBlocks = [
    {
      title: "Comprehensive Digital Marketing Solutions",
      content: "Drive growth with our full-service digital marketing approach that combines data-driven strategies with creative execution. From email campaigns to social media management, we create integrated marketing programs that deliver measurable results across all digital channels.",
      imagePosition: 'left' as const
    },
    {
      title: "Data-Driven Campaign Optimization",
      content: "Leverage our deep data expertise to create highly targeted and personalized marketing campaigns. We use advanced analytics, customer segmentation, and performance tracking to continuously optimize your campaigns for maximum ROI and engagement.",
      imagePosition: 'right' as const
    },
    {
      title: "Multi-Channel Marketing Expertise",
      content: "Whether you need email marketing, LinkedIn campaigns, content creation, or social media management, our team has the expertise to execute campaigns that drive results. We ensure consistent messaging and branding across all channels while optimizing each platform for its unique strengths.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "Multi-Channel Campaigns",
    "Performance Tracking & Analytics",
    "A/B Testing & Optimization",
    "Creative Content Development",
    "Lead Generation Focus",
    "ROI Measurement"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' }
  ];

  return (
    <ServicePageTemplate
      title="Digital Marketing Services"
      subtitle="Comprehensive digital marketing services to maximize your reach and engagement"
      description="Accelerate your business growth with our comprehensive digital marketing services. We create data-driven campaigns across email, social media, LinkedIn, and content marketing that generate qualified leads and drive measurable ROI."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default DigitalMarketing;