import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Content } from 'vaul';
import technologyHeroImage from '@/assets/services-technology-hero.jpg';
import technologyCodingImage from '@/assets/services-technology-coding.jpg';
import technologyDatacenterImage from '@/assets/services-technology-datacenter.jpg';

const TechnologyEmailLists: React.FC = () => {
  const contentBlocks = [
    {
      title: "Connect with Technology Decision-Makers",
      content: "Access verified contact information for CTOs, IT Directors, Software Engineers, and technology professionals across startups and Fortune 500 companies. Our technology email lists include contacts from software development, cybersecurity, cloud computing, AI/ML, and emerging tech sectors.",
      imagePosition: 'left' as const,
      image: technologyCodingImage
    },
    {
      title: "Target by Technology Stack and Company Size",
      content: "Filter contacts by specific technologies, programming languages, cloud platforms, and software tools. Whether you're targeting companies using specific CRM systems, programming frameworks, or infrastructure solutions, our granular filtering helps you reach the most relevant prospects.",
      imagePosition: 'right' as const,
      image: technologyDatacenterImage
    },
    {
      title: "Industry-Leading Data Accuracy",
      content: "Our technology lists are updated daily with new contacts and verified through multiple touchpoints. We track job changes, company updates, and technology adoptions to ensure you're always reaching active decision-makers in the tech industry.",
      imagePosition: 'left' as const,
      image: technologyCodingImage
    },
    {
      title: "Drive Sales with Precision",
      content: "Leverage our highly-targeted Technology List to connect with key decision-makers across a variety of tech sectors, including software development, IT services, cybersecurity, and cloud computing. Our lists help you engage the right prospects who are primed to benefit from your solutions.",
      imagePosition: 'right' as const,
      image: technologyDatacenterImage
    }, 
    {
      title: "Accelerate Your Marketing Campaigns",
      content: "Get started right away with our clean, verified Technology List—free from invalid contacts and ready to deliver results. The data is fully customizable, enabling you to target specific sectors like SaaS, AI, hardware, and telecommunications for maximum impact.",
      imagePosition: 'left' as const,
      image: technologyCodingImage
    },
    {
      title: "Strengthen Connections, Close More Deals",
      content: "Reach the right audience, deliver the right message, and build lasting relationships that drive sales growth. Choose our Technology List today and give your sales efforts the boost they need!",
      imagePosition: 'right' as const,
      image: technologyDatacenterImage
    },
    
  ];
  const features = [
    "CTO & IT Director Contacts",
    "Startup to Enterprise Coverage",
    "Technology Stack Filtering",
    "Daily Data Updates",
    "Job Function Segmentation",
    "Geographic Targeting"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'B2B Email Lists', href: '/services/b2b-email-list' },
    { name: 'Technology Email Lists', href: '/services/b2b-email-list/technology-email-lists' }
  ];

  return (
    <ServicePageTemplate
      title="Power your campaigns with our comprehensive Technology Email Lists"
      subtitle="Harness lists that are reliable, adaptable, budget-friendly, and designed to drive impactful results & Reach technology professionals and IT decision-makers"
      description="Connect with the technology leaders driving innovation in their organizations. Our comprehensive technology email lists provide verified contacts for software engineers, IT directors, CTOs, and technology decision-makers across companies of all sizes."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
      heroImage={technologyHeroImage}
    />
  );
};

export default TechnologyEmailLists;