import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const TechnologyEmailLists: React.FC = () => {
  const contentBlocks = [
    {
      title: "Connect with Technology Decision-Makers",
      content: "Access verified contact information for CTOs, IT Directors, Software Engineers, and technology professionals across startups and Fortune 500 companies. Our technology email lists include contacts from software development, cybersecurity, cloud computing, AI/ML, and emerging tech sectors.",
      imagePosition: 'left' as const
    },
    {
      title: "Target by Technology Stack and Company Size",
      content: "Filter contacts by specific technologies, programming languages, cloud platforms, and software tools. Whether you're targeting companies using specific CRM systems, programming frameworks, or infrastructure solutions, our granular filtering helps you reach the most relevant prospects.",
      imagePosition: 'right' as const
    },
    {
      title: "Industry-Leading Data Accuracy",
      content: "Our technology lists are updated daily with new contacts and verified through multiple touchpoints. We track job changes, company updates, and technology adoptions to ensure you're always reaching active decision-makers in the tech industry.",
      imagePosition: 'left' as const
    }
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
      title="Technology Email Lists"
      subtitle="Reach technology professionals and IT decision-makers"
      description="Connect with the technology leaders driving innovation in their organizations. Our comprehensive technology email lists provide verified contacts for software engineers, IT directors, CTOs, and technology decision-makers across companies of all sizes."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default TechnologyEmailLists;