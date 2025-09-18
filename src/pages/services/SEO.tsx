import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import seoImage from '@/assets/services-seo.jpg';
import dataAnalyticsImage from '@/assets/services-data-analytics.jpg';
import webDevelopmentImage from '@/assets/services-web-development.jpg';
import seoHeroImage from '@/assets/services-seo-hero.jpg';
import seoOptimizationImage from '@/assets/services-seo-optimization.jpg';

const SEO: React.FC = () => {
  const contentBlocks = [
    {
      title: "Improve Your Search Engine Visibility",
      content: "Drive organic traffic and increase your online presence with our comprehensive SEO services. Our team of SEO experts uses proven strategies including keyword research, technical audits, content optimization, and link building to help your website rank higher in search results.",
      imagePosition: 'left' as const,
      image: seoImage
    },
    {
      title: "SEO Optimization and Performance Tracking",
      content: "Monitor and improve your search engine performance with our advanced SEO optimization tools and analytics. We track keyword rankings, analyze competitor strategies, and provide detailed reports to help you understand your SEO progress and ROI.",
      imagePosition: 'right' as const,
      image: seoOptimizationImage
    },
    {
      title: "Technical SEO and Performance Optimization",
      content: "Ensure your website meets all technical SEO requirements with our detailed audits and optimization services. We improve site speed, mobile responsiveness, crawlability, and technical structure to give you a competitive edge in search rankings.",
      imagePosition: 'left' as const,
      image: dataAnalyticsImage
    },
    {
      title: "Content Strategy and Link Building",
      content: "Build authority and trust with high-quality content and strategic link building campaigns. Our content team creates valuable, SEO-optimized content while our outreach specialists secure high-quality backlinks from authoritative industry websites.",
      imagePosition: 'right' as const,
      image: webDevelopmentImage
    }
  ];

  const features = [
    "Keyword Research & Strategy",
    "Technical SEO Audits",
    "On-Page Optimization",
    "Content Marketing",
    "Link Building Campaigns",
    "Performance Tracking"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'SEO Services', href: '/services/seo' }
  ];

  return (
    <ServicePageTemplate
      title="Our SEO Services"
      subtitle="Improve your search engine visibility and drive organic traffic"
      description="Boost your online visibility and drive qualified organic traffic with our comprehensive SEO services. Our expert team provides keyword research, technical audits, content optimization, and strategic link building to help your website achieve top search rankings."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
      faqKey="seo-services"
      heroImage={seoHeroImage}
    />
  );
};

export default SEO;