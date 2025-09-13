import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const LinkedInAccountManagement: React.FC = () => {
  const contentBlocks = [
    {
      title: "Complete LinkedIn Profile & Account Optimization",
      content: "Transform your LinkedIn presence with comprehensive account management that positions you as an industry leader. We optimize profiles, create compelling content, and manage daily activities to build authority and generate quality business connections.",
      imagePosition: 'left' as const
    },
    {
      title: "Strategic Content Creation & Engagement Management",
      content: "Build thought leadership with consistent, valuable content that engages your network and attracts prospects. Our team creates posts, articles, and engages with your network to maintain an active, professional presence that drives business opportunities.",
      imagePosition: 'right' as const
    },
    {
      title: "Network Growth & Lead Generation Focus",
      content: "Expand your professional network strategically with targeted connection building and relationship nurturing. We identify and connect with relevant prospects, manage conversations, and develop relationships that convert into business opportunities.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "Profile Optimization",
    "Content Creation & Posting",
    "Network Management",
    "Engagement Strategy",
    "Lead Nurturing",
    "Performance Analytics"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'LinkedIn Account Management', href: '/services/digital-marketing/linkedin-account-management' }
  ];

  return (
    <ServicePageTemplate
      title="LinkedIn Account Management"
      subtitle="Professional LinkedIn management for thought leadership and lead generation"
      description="Build your professional brand and generate leads with comprehensive LinkedIn account management. We handle profile optimization, content creation, network building, and engagement to establish your authority and drive business growth."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default LinkedInAccountManagement;