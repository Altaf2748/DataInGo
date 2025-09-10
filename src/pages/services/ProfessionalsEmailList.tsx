import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const ProfessionalsEmailList: React.FC = () => {
  const contentBlocks = [
    {
      title: "Target High-Value Professional Contacts",
      content: "Access verified email addresses for executives, managers, consultants, and specialists across all industries. Our professionals email list includes C-level executives, directors, senior managers, and department heads who make purchasing decisions for their organizations.",
      imagePosition: 'left' as const
    },
    {
      title: "Job Function and Seniority Filtering",
      content: "Filter contacts by specific job functions, seniority levels, and decision-making authority. Whether you're targeting CFOs for financial software, HR directors for recruitment tools, or operations managers for supply chain solutions, find the exact professionals you need.",
      imagePosition: 'right' as const
    },
    {
      title: "Multi-Industry Professional Coverage",
      content: "Our database spans professionals across finance, consulting, legal, education, non-profit, government, and service industries. Each contact includes detailed job title, company information, and professional background to help you craft targeted messages.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "C-Level Executive Contacts",
    "Job Function Targeting",
    "Seniority Level Filtering",
    "Multi-Industry Coverage",
    "Decision-Maker Focus",
    "Professional Background Data"
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
      subtitle="Connect with executives and decision-makers across industries"
      description="Reach high-value professional contacts including executives, managers, and specialists who drive business decisions. Our comprehensive professionals email list provides verified contacts across all major industries and job functions."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default ProfessionalsEmailList;