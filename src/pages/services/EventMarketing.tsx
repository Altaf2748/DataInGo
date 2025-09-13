import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const EventMarketing: React.FC = () => {
  const contentBlocks = [
    {
      title: "Complete Event Marketing Strategy & Execution",
      content: "Maximize your event ROI with comprehensive marketing strategies that drive attendance, engagement, and lead generation. From pre-event promotion to post-event follow-up, we ensure your events deliver maximum business value and audience engagement.",
      imagePosition: 'left' as const
    },
    {
      title: "Multi-Channel Event Promotion & Lead Capture",
      content: "Promote your events across multiple channels including email, social media, LinkedIn, and industry platforms. Our integrated approach ensures maximum reach and includes sophisticated lead capture systems to convert attendees into qualified prospects.",
      imagePosition: 'right' as const
    },
    {
      title: "Post-Event Nurturing & Conversion Optimization",
      content: "Turn event attendance into business opportunities with strategic follow-up campaigns. We create personalized nurturing sequences, provide attendee insights, and implement conversion strategies that maximize your event investment ROI.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "Event Strategy Development",
    "Multi-Channel Promotion",
    "Registration Optimization",
    "Lead Capture Systems",
    "Attendee Engagement",
    "Post-Event Follow-up"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Event Marketing', href: '/services/digital-marketing/event-marketing' }
  ];

  return (
    <ServicePageTemplate
      title="Event Marketing Services"
      subtitle="Drive event success with comprehensive marketing and lead generation strategies"
      description="Boost your event attendance and ROI with our comprehensive event marketing services. We handle promotion, lead capture, and follow-up to ensure your events generate maximum business value and qualified leads."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default EventMarketing;