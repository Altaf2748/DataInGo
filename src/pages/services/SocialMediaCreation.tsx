import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const SocialMediaCreation: React.FC = () => {
  const contentBlocks = [
    {
      title: "Professional Social Media Content & Visual Design",
      content: "Create engaging social media content that captures attention and drives engagement across all platforms. Our design team creates professional posters, infographics, short videos, and visual content optimized for each social media platform.",
      imagePosition: 'left' as const
    },
    {
      title: "Video Production & Motion Graphics",
      content: "Boost engagement with professional video content including promotional videos, explainer animations, and motion graphics. Our video production services help you communicate complex ideas effectively and increase social media reach and engagement.",
      imagePosition: 'right' as const
    },
    {
      title: "Content Strategy & Brand Consistency",
      content: "Maintain consistent brand messaging across all social platforms with our strategic content planning. We create content calendars, develop brand guidelines, and ensure all visual content aligns with your marketing objectives and brand identity.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "Social Media Posters",
    "Video Content Creation",
    "Motion Graphics Design",
    "Infographic Development",
    "Content Calendar Planning",
    "Brand Guidelines"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Social Media Creation', href: '/services/digital-marketing/social-media-creation' }
  ];

  return (
    <ServicePageTemplate
      title="Social Media Content Creation"
      subtitle="Create professional visual content and videos that drive social media engagement"
      description="Enhance your social media presence with professional content creation services. We design engaging posters, create compelling videos, and develop visual content that captures attention and drives engagement across all social platforms."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default SocialMediaCreation;