import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const CustomMailList: React.FC = () => {
  const contentBlocks = [
    {
      title: "Tailored to Your Exact Requirements",
      content: "Get custom email lists built specifically for your unique business needs. Whether you need contacts from specific niches, geographic regions, company sizes, or with particular technology requirements, we create bespoke lists that match your precise targeting criteria.",
      imagePosition: 'left' as const
    },
    {
      title: "Advanced Filtering and Research",
      content: "Our research team uses advanced data mining techniques to identify prospects that match your custom specifications. We can filter by any combination of industry, job title, company revenue, employee count, technology stack, location, and hundreds of other data points.",
      imagePosition: 'right' as const
    },
    {
      title: "Dedicated Account Management",
      content: "Work directly with our data specialists who understand your business and target market. From initial consultation to final delivery, you'll have dedicated support to ensure your custom list meets all your requirements and delivers the results you need.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "100% Custom Targeting",
    "Advanced Data Research",
    "Unlimited Filter Options",
    "Dedicated Account Manager",
    "Quality Guarantee",
    "Fast Turnaround Time"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'B2B Email Lists', href: '/services/b2b-email-list' },
    { name: 'Custom Mail List', href: '/services/b2b-email-list/custom-mail-list' }
  ];

  return (
    <ServicePageTemplate
      title="Custom Mail List"
      subtitle="Maximize Your Marketing Impact Using a Personalized Mailing List. Personalized lists built according to your specific requirements"
      description="Connect with your ideal audience, enhance campaign performance, and achieve impactful results using customized customer mailing lists from DataInGo Solutions. Get precisely targeted email lists created to match your unique business requirements. Our custom mail list service provides dedicated research and filtering to deliver exactly the prospects you need to reach your marketing and sales goals."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default CustomMailList;