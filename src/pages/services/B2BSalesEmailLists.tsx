import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const B2BSalesEmailLists: React.FC = () => {
  const contentBlocks = [
    {
      title: "Sales-Ready Lead Lists",
      content: "The digital era has transformed marketing strategies, with B2B marketing emerging as one of the most effective approaches. According to a recent word stream survey, B2B campaigns boast higher click-through rates (CTRs) than many other channels. In fact, 59% of leading marketers agree that B2B lists are the most powerful tool for generating revenue. It's evident that B2B marketing is a top priority for businesses today. However, the key to success lies in having access to accurate and reliable B2B contact lists. Many companies waste valuable time and resources sending cold emails to unqualified leads, resulting in poor campaign performance. Partnering with DataInGo Solutions eliminates that risk. Our B2B lists are continuously updated and enriched, providing verified and precise data to fuel your marketing efforts. With our pre-validated lists, you can confidently run targeted campaigns and achieve better results, without the common pitfalls.",
      imagePosition: 'left' as const
    },
    {
      title: "Expand your Global Reach",
      content: "Unlock new growth opportunities by connecting with the right audience worldwide through DataInGo Solutions' comprehensive leads database. Whether you're focusing on specific countries, industries, or job roles, we provide tailored data solutions to help you engage the prospects that matter most to your business. Our database offers access to accurate, regularly updated contact information across a wide range of sectors including healthcare, technology, finance, manufacturing, and more. This enables you to launch highly targeted marketing campaigns that reach decision-makers and key professionals with precision. With DataInGo Solutions, you don't just reach more people you reach the right people. Our verified, data-driven leads empower you to improve campaign performance, reduce waste, and accelerate business growth. Start targeting your ideal markets today and turn data into results.",
      imagePosition: 'right' as const
    },
    {
      title: "Reach the Right Audience with Focused Lead Generation Strategies",
      content: "Connect with the Right Prospects Worldwide Using DataInGo Solutions' Comprehensive Leads Database. DataInGo Solutions empowers your business to reach ideal prospects across the globe with precision. Whether you're targeting specific industries, countries, or job roles, our customized data solutions support highly focused marketing campaigns that generate real results. With access to accurate, up-to-date contact information across key sectors—such as healthcare, finance, technology, and manufacturing—you can engage with the decision-makers who matter most to your business. Our database ensures your outreach is both efficient and impactful, helping you build strong connections, increase conversions, and drive sustainable growth through reliable, data-driven leads.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "Pre-Qualified Leads",
    "Lead Scoring System",
    "Buying Intent Signals",
    "CRM Integration Ready",
    "Sales Intelligence Data",
    "Conversion Optimization"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'B2B Email Lists', href: '/services/b2b-email-list' },
    { name: 'B2B Sales Email Lists', href: '/services/b2b-email-list/b2b-sales-email-lists' }
  ];

  return (
    <ServicePageTemplate
      title="B2B Sales Email Lists"
      subtitle="Maintain a Strategic Advantage with Trusted B2B Contact Intelligence & High-quality leads ready for your sales team to convert"
      description="Access a database of over 80 million verified business executives, including senior decision-makers in the U.S. Expand your reach into global markets with premium B2B leads designed to deliver measurable results. Accelerate your sales process with pre-qualified B2B leads. Our sales email lists include prospects with verified buying intent, decision-making authority, and budget allocation, giving your sales team the best chance of conversion success."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default B2BSalesEmailLists;