import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import b2bEmailListsImage from '@/assets/services-b2b-email-lists.jpg';
import emailOutreachImage from '@/assets/services-email-outreach.jpg';
import dataVerificationImage from '@/assets/services-data-verification.jpg';
import b2bHeroImage from '@/assets/services-b2b-hero.jpg';
import emailDashboardImage from '@/assets/services-email-dashboard.jpg';
import leadGenerationImage from '@/assets/services-lead-generation.jpg';

const B2BEmailList: React.FC = () => {
  const contentBlocks = [
    {
      title: "Unlock Precise Targeting and Lead Generation",
      content: "Our B2B email lists provide you with verified, up-to-date contact information for decision-makers across industries. Each list is carefully curated and validated to ensure maximum deliverability and response rates. Whether you're targeting C-level executives, department heads, or specific job functions, our comprehensive databases help you reach the right prospects at the right time.",
      imagePosition: 'left' as const,
      image: b2bEmailListsImage
    },
    {
      title: "Advanced Email Campaign Management",
      content: "Leverage our sophisticated email dashboard and campaign management tools to track performance, analyze engagement metrics, and optimize your B2B outreach. Monitor open rates, click-through rates, and conversion metrics in real-time to continuously improve your email marketing ROI.",
      imagePosition: 'right' as const,
      image: emailDashboardImage
    },
    {
      title: "Accelerate Performance and Deliver Impact",
      content: "Stop wasting time on outdated contacts and unresponsive leads. Our B2B email lists are continuously updated and verified through multiple data sources, ensuring 98%+ accuracy rates. With detailed segmentation options including industry, company size, job title, and geographic location, you can create highly targeted campaigns that deliver measurable ROI.",
      imagePosition: 'left' as const,
      image: emailOutreachImage
    },
    {
      title: "Lead Generation and Qualification Systems",
      content: "Transform prospects into qualified leads with our advanced lead generation systems. Our platform includes lead scoring, automated follow-up sequences, and CRM integration to help you manage and nurture prospects throughout the entire sales funnel for maximum conversion rates.",
      imagePosition: 'right' as const,
      image: leadGenerationImage
    },
    {
      title: "Scalable, Privacy-Compliant Lists",
      content: "All our B2B email lists are fully compliant with GDPR, CAN-SPAM, and other data protection regulations. We provide transparent opt-out mechanisms and maintain detailed records of data sources and consent. Scale your outreach efforts confidently with our enterprise-grade data infrastructure that supports campaigns of any size.",
      imagePosition: 'left' as const,
      image: dataVerificationImage
    }
  ];

  const features = [
    "98%+ Email Accuracy Rate",
    "GDPR & CAN-SPAM Compliant",
    "Real-time Data Verification",
    "Custom Segmentation Options",
    "Multiple Export Formats",
    "24/7 Customer Support"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'B2B Email Lists', href: '/services/b2b-email-list' }
  ];

  return (
    <ServicePageTemplate
      title="B2B Email Lists"
      subtitle="Access verified contact databases across industries and job functions"
      description="At DataInGo Solutions, we specialize in providing businesses with tailored, up-to-date B2B email lists across a wide range of industries. Our comprehensive databases offer key insights, including contact details, company profiles, industry-specific data, and market intelligence. By leveraging our services, organizations gain access to accurate, actionable data that fuels marketing campaigns, sales strategies, market research, and overall business growth. Our data solutions streamline operations and support informed decision-making for success in competitive markets.Transform your outreach strategy with our comprehensive B2B email lists. Get direct access to verified decision-makers, department heads, and key stakeholders across every major industry. Our data is continuously updated and validated to ensure maximum deliverability and campaign success."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
      faqKey="b2b-email-lists"
      serviceName="B2B Email Lists"
      heroImage={b2bHeroImage}
    />
  );
};

export default B2BEmailList;