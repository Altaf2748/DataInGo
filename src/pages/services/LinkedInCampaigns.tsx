import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const LinkedInCampaigns: React.FC = () => {
  const contentBlocks = [
    {
      title: "Professional LinkedIn Outreach & Lead Generation",
      content: "Generate high-quality B2B leads with targeted LinkedIn campaigns that reach decision-makers in your industry. Our strategic approach combines profile optimization, content creation, and personalized outreach to build meaningful business relationships.",
      imagePosition: 'left' as const
    },
    {
      title: "Advanced Targeting & Message Personalization",
      content: "Reach the right prospects with precision targeting based on industry, job title, company size, and behavior. Our personalized messaging approach ensures each outreach feels authentic and relevant, resulting in higher response rates and quality connections.",
      imagePosition: 'right' as const
    },
    {
      title: "Campaign Management & Performance Tracking",
      content: "Full campaign management including connection requests, follow-up sequences, and relationship nurturing. We provide detailed reporting on connection acceptance rates, response rates, and lead quality to optimize your LinkedIn ROI.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "Profile Optimization",
    "Prospect Research & Targeting",
    "Personalized Outreach",
    "Follow-up Sequences",
    "Sponsored InMail Campaigns",
    "Performance Analytics"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'LinkedIn Campaigns', href: '/services/digital-marketing/linkedin-campaigns' }
  ];

  return (
    <ServicePageTemplate
      title="LinkedIn Campaign Services"
      subtitle="Generate quality B2B leads with strategic LinkedIn outreach and campaigns"
      description="Expand your professional network and generate high-quality leads with our comprehensive LinkedIn campaign services. We help you connect with decision-makers and build relationships that drive business growth."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default LinkedInCampaigns;