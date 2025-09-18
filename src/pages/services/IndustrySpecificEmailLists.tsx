import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import industrySpecificHeroImage from '@/assets/services-industry-specific-hero.jpg';
import servicesDataAnalyticsImage from '@/assets/services-data-analytics.jpg';
import servicesGlobalNetworkingImage from '@/assets/services-global-networking.jpg';

const IndustrySpecificEmailLists: React.FC = () => {
  const contentBlocks = [
    {
      title: "Targeted Industry-Specific Email Lists for Every Sector",
      content: "Access comprehensive email lists tailored to specific industries including manufacturing, retail, finance, construction, education, and more. Our industry-specific databases provide verified contacts from decision-makers within each sector, ensuring your campaigns reach the most relevant prospects for your business.",
      imagePosition: 'left' as const,
      image: servicesDataAnalyticsImage
    },
    {
      title: "Deep Industry Segmentation and Filtering",
      content: "Filter contacts by industry sub-sectors, company size, revenue, geographic location, and job functions. Whether you're targeting automotive manufacturers, retail chain executives, or financial services professionals, our granular segmentation capabilities help you reach your ideal prospects.",
      imagePosition: 'right' as const,
      image: servicesGlobalNetworkingImage
    },
    {
      title: "Industry-Leading Data Accuracy and Compliance",
      content: "Our industry-specific lists are continuously updated with new contacts and verified through multiple industry sources. We maintain partnerships with industry associations and trade organizations to ensure our data reflects the latest industry changes and personnel updates.",
      imagePosition: 'left' as const,
      image: servicesDataAnalyticsImage
    },
    {
      title: "Maximize ROI with Industry-Focused Campaigns",
      content: "Leverage our industry-specific targeting to create highly relevant marketing campaigns that resonate with your audience. Our lists help you speak the language of each industry and address sector-specific pain points, resulting in higher engagement and conversion rates.",
      imagePosition: 'right' as const,
      image: servicesGlobalNetworkingImage
    },
    {
      title: "Comprehensive Coverage Across All Major Industries",
      content: "From emerging sectors like renewable energy and fintech to established industries like manufacturing and healthcare, our database covers all major industry verticals. Choose from our pre-built industry lists or work with our team to create custom industry-specific targeting for your unique needs.",
      imagePosition: 'left' as const,
      image: servicesDataAnalyticsImage
    }
  ];

  const features = [
    "50+ Industry Verticals",
    "Sub-Industry Targeting",
    "Company Size Filtering",
    "Revenue-Based Segmentation",
    "Industry Association Data",
    "Trade Organization Contacts"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'B2B Email Lists', href: '/services/b2b-email-list' },
    { name: 'Industry-Specific Email Lists', href: '/services/b2b-email-list/industry-specific-email-lists' }
  ];

  return (
    <ServicePageTemplate
      title="Industry-Specific Email Lists"
      subtitle="Targeted email lists customized for your specific industry vertical"
      description="Reach decision-makers in your target industry with our comprehensive industry-specific email lists. From manufacturing and retail to finance and healthcare, our database covers all major industry verticals with verified, up-to-date contact information."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
      heroImage={industrySpecificHeroImage}
    />
  );
};

export default IndustrySpecificEmailLists;