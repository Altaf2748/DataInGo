import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const HealthcareEmailLists: React.FC = () => {
  const contentBlocks = [
    {
      title: "Access Healthcare Professionals and Administrators",
      content: "Connect with doctors, nurses, hospital administrators, healthcare IT professionals, and medical device decision-makers. Our healthcare email lists cover hospitals, clinics, pharmaceutical companies, medical device manufacturers, and healthcare service providers.",
      imagePosition: 'left' as const
    },
    {
      title: "HIPAA-Compliant Data Collection",
      content: "All healthcare contact data is collected and maintained in full compliance with HIPAA regulations and medical privacy standards. We focus on professional business contacts rather than patient information, ensuring ethical and legal data practices.",
      imagePosition: 'right' as const
    },
    {
      title: "Specialized Medical Segments",
      content: "Target specific medical specialties, hospital departments, or healthcare technology areas. Whether you're marketing to cardiology practices, hospital IT departments, or pharmaceutical researchers, our detailed segmentation helps you reach the right healthcare professionals.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "HIPAA-Compliant Data",
    "Medical Specialty Targeting",
    "Hospital & Clinic Contacts",
    "Healthcare IT Professionals",
    "Pharmaceutical Industry",
    "Medical Device Decision-Makers"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'B2B Email Lists', href: '/services/b2b-email-list' },
    { name: 'Healthcare Email Lists', href: '/services/b2b-email-list/healthcare-email-lists' }
  ];

  return (
    <ServicePageTemplate
      title="Healthcare Email Lists"
      subtitle="Connect with healthcare professionals and medical decision-makers"
      description="Reach healthcare professionals, hospital administrators, and medical industry decision-makers with our comprehensive healthcare email lists. All data is collected in full compliance with HIPAA and medical privacy regulations."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default HealthcareEmailLists;