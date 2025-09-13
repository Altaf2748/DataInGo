import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const EmailCampaigns: React.FC = () => {
  const contentBlocks = [
    {
      title: "Strategic Email Campaign Planning & Execution",
      content: "Create high-converting email campaigns with our comprehensive strategy and execution services. From audience segmentation and message crafting to automation setup and performance optimization, we handle every aspect of your email marketing success.",
      imagePosition: 'left' as const
    },
    {
      title: "Advanced Segmentation & Personalization",
      content: "Maximize engagement with precise audience segmentation and personalized messaging. Our data-driven approach ensures each subscriber receives relevant content that drives action, resulting in higher open rates, click-through rates, and conversions.",
      imagePosition: 'right' as const
    },
    {
      title: "A/B Testing & Performance Optimization",
      content: "Continuously improve campaign performance with systematic A/B testing of subject lines, content, send times, and call-to-actions. Our optimization process ensures your campaigns deliver maximum ROI and achieve your business objectives.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "Campaign Strategy Development",
    "Template Design & Creation",
    "Audience Segmentation",
    "A/B Testing Programs",
    "Automation Setup",
    "Performance Analytics"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Email Campaigns', href: '/services/digital-marketing/email-campaigns' }
  ];

  return (
    <ServicePageTemplate
      title="Email Campaign Services"
      subtitle="Drive results with strategic email marketing campaigns and automation"
      description="Boost your marketing ROI with professional email campaign services. We create, execute, and optimize email marketing campaigns that engage your audience, nurture leads, and drive conversions for your business."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default EmailCampaigns;