import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import webDevelopmentImage from '@/assets/services-web-development.jpg';
import technologyInnovationImage from '@/assets/home-technology-innovation.jpg';
import digitalMarketingImage from '@/assets/services-digital-marketing.jpg';

const WebsiteDesignDevelopment: React.FC = () => {
  const contentBlocks = [
    {
      title: "Modern, Responsive Website Design",
      content: "Create stunning, user-friendly websites that convert visitors into customers. Our design team creates responsive, mobile-first websites that provide exceptional user experiences across all devices. Every website is optimized for speed, accessibility, and search engines.",
      imagePosition: 'left' as const,
      image: webDevelopmentImage
    },
    {
      title: "Custom Development Solutions",
      content: "From simple business websites to complex web applications, our development team brings your vision to life. We specialize in modern technologies including React, WordPress, e-commerce platforms, and custom CMS solutions that are scalable and maintainable.",
      imagePosition: 'right' as const,
      image: technologyInnovationImage
    },
    {
      title: "Ongoing Support and Optimization",
      content: "Keep your website performing at its best with our ongoing maintenance and optimization services. We provide regular updates, security monitoring, performance optimization, and continuous improvements to ensure your website stays current and competitive.",
      imagePosition: 'left' as const,
      image: digitalMarketingImage
    }
  ];

  const features = [
    "Responsive Design",
    "SEO Optimization",
    "Fast Loading Speed",
    "E-commerce Development",
    "CMS Integration",
    "Ongoing Maintenance"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Website Design & Development', href: '/services/website-design-development' }
  ];

  return (
    <ServicePageTemplate
      title="Our Development Services"
      subtitle="Modern, responsive websites that convert visitors into customers"
      description="Build a powerful online presence with our custom website design and development services. We create responsive, SEO-optimized websites that deliver exceptional user experiences and drive business growth across all devices and platforms."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
      faqKey="website-design-development"
      serviceName="Website Design & Development"
    />
  );
};

export default WebsiteDesignDevelopment;