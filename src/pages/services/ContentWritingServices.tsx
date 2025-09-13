import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const ContentWritingServices: React.FC = () => {
  const contentBlocks = [
    {
      title: "Professional Content Creation & SEO Optimization",
      content: "Create compelling, search-optimized content that engages your audience and drives business results. Our expert writers craft blogs, whitepapers, case studies, and marketing copy that establishes authority and generates leads for your business.",
      imagePosition: 'left' as const
    },
    {
      title: "Industry-Specific Expertise & Thought Leadership",
      content: "Leverage our industry expertise to create content that resonates with your target audience. Our writers understand B2B markets, technology trends, and business challenges to produce authoritative content that positions you as a thought leader.",
      imagePosition: 'right' as const
    },
    {
      title: "Content Strategy & Performance Optimization",
      content: "Develop content that supports your marketing funnel and business objectives. We create content strategies aligned with your goals, optimize for search engines, and provide performance analytics to ensure maximum impact and ROI.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "Blog Writing & SEO",
    "Whitepaper Creation",
    "Case Study Development",
    "Landing Page Copy",
    "Email Marketing Content",
    "Social Media Content"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Content Writing Services', href: '/services/digital-marketing/content-writing-services' }
  ];

  return (
    <ServicePageTemplate
      title="Content Writing Services"
      subtitle="Create compelling, SEO-optimized content that drives engagement and results"
      description="Elevate your brand with professional content writing services that engage audiences and drive conversions. Our expert writers create blogs, whitepapers, case studies, and marketing copy optimized for search engines and designed to generate leads."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default ContentWritingServices;