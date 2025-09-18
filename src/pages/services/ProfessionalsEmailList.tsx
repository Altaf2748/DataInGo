import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import professionalsHeroImage from '@/assets/services-professionals-hero.jpg';
import professionalsMeetingImage from '@/assets/services-professionals-meeting.jpg';
import professionalsOfficeImage from '@/assets/services-professionals-office.jpg';

const ProfessionalsEmailList: React.FC = () => {
  const contentBlocks = [
    {
      title: "Connect with Top-Level Professionals Across Industries",
      content: "Access verified contact information for executives, consultants, lawyers, accountants, and other high-level professionals across various industries. Our professionals email lists include contacts from legal services, consulting firms, financial services, and other professional service sectors.",
      imagePosition: 'left' as const,
      image: professionalsMeetingImage
    },
    {
      title: "Target by Professional Expertise and Company Type",
      content: "Filter contacts by specific professional qualifications, certifications, industry expertise, and firm size. Whether you're targeting partners at law firms, senior consultants at top agencies, or C-level executives at Fortune 500 companies, our detailed filtering helps you reach the most relevant decision-makers.",
      imagePosition: 'right' as const,
      image: professionalsOfficeImage
    },
    {
      title: "Premium Quality Professional Contacts",
      content: "Our professional lists are continuously updated and verified through multiple professional networks and industry associations. We track career changes, company moves, and professional certifications to ensure you're always reaching active professionals in their current roles.",
      imagePosition: 'left' as const,
      image: professionalsMeetingImage
    },
    {
      title: "Drive Business Growth with Professional Networks",
      content: "Leverage our highly-targeted Professionals List to connect with influential decision-makers across legal, consulting, finance, and other professional services. Our lists help you engage the right prospects who have the authority and budget to make purchasing decisions.",
      imagePosition: 'right' as const,
      image: professionalsOfficeImage
    },
    {
      title: "Accelerate Your B2B Professional Outreach",
      content: "Get started immediately with our clean, verified Professionals List—free from invalid contacts and ready to deliver results. The data is fully customizable, enabling you to target specific professional sectors and seniority levels for maximum impact.",
      imagePosition: 'left' as const,
      image: professionalsMeetingImage
    }
  ];

  const features = [
    "C-Level Executive Contacts",
    "Professional Service Firms",
    "Industry Certification Filtering",
    "Senior Management Targeting",
    "Professional Association Data",
    "Geographic Precision Targeting"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'B2B Email Lists', href: '/services/b2b-email-list' },
    { name: 'Professionals Email List', href: '/services/b2b-email-list/professionals-email-list' }
  ];

  return (
    <ServicePageTemplate
      title="Professionals Email List"
      subtitle="Connect with top-level professionals and executives across industries"
      description="Reach high-level professionals including executives, lawyers, consultants, and industry leaders with our comprehensive professionals email lists. Our database includes verified contacts from professional service firms, Fortune 500 companies, and industry associations."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
      heroImage={professionalsHeroImage}
    />
  );
};

export default ProfessionalsEmailList;