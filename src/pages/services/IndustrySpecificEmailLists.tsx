import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const IndustrySpecificEmailLists: React.FC = () => {
  const contentBlocks = [
    {
      title: "Comprehensive Industry Coverage",
      content: "Access targeted email lists for manufacturing, finance, retail, education, government, non-profit, and dozens of other industries. Each industry list is curated with contacts who understand sector-specific challenges and have purchasing authority within their organizations.",
      imagePosition: 'left' as const
    },
    {
      title: "Deep Industry Segmentation",
      content: "Go beyond basic industry classification with detailed sub-industry targeting. Filter by company size, revenue, geographic location, and specific business models. Whether you're targeting boutique financial advisors or large manufacturing plants, find your ideal prospects.",
      imagePosition: 'right' as const
    },
    {
      title: "Industry Expertise and Insights",
      content: "Each industry-specific list comes with market insights and best practices for reaching that particular sector. Our team understands the unique communication preferences, regulatory requirements, and business cycles of each industry we serve.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "50+ Industry Verticals",
    "Sub-Industry Targeting",
    "Company Size Filtering",
    "Revenue-Based Segmentation",
    "Geographic Targeting",
    "Industry Best Practices"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'B2B Email Lists', href: '/services/b2b-email-list' },
    { name: 'Industry-Specific Email Lists', href: '/services/b2b-email-list/industry-specific-email-lists' }
  ];

  return (
    <ServicePageTemplate
      title="Connect with Larger Audiences through Industry-Specific Email Lists"
      subtitle="Our email lists are built to be practical, adaptable, dependable, affordable, and credible empowering you to grow into larger markets. Targeted lists for manufacturing, finance, retail, and more"
      description="Access specialized email lists tailored to specific industries including manufacturing, finance, retail, education, healthcare, and government. Each list is carefully curated with decision-makers who understand your industry's unique challenges."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default IndustrySpecificEmailLists;