import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import healthcareHeroImage from '@/assets/services-healthcare-hero.jpg';
import healthcareTechnologyImage from '@/assets/services-healthcare-technology.jpg';
import healthcareConsultationImage from '@/assets/services-healthcare-consultation.jpg';

const HealthcareEmailLists: React.FC = () => {
  const contentBlocks = [
    {
      title: "Connect with Healthcare Decision-Makers Using Verified Contact Data",
      content: "Looking to engage key influencers in the healthcare sector? Our Verified Healthcare Mailing List offers accurate, up-to-date contact information to help you reach healthcare executives efficiently and effectively. This comprehensive database includes thoroughly verified contacts from hospitals, clinics, healthcare organizations, insurance providers, and more—ensuring you focus your marketing on the right audience. Whether you're promoting medical equipment, healthcare software, or professional services, our mailing list allows you to target high-value decision-makers who are ready to engage.",
      imagePosition: 'left' as const,
      image: healthcareTechnologyImage
    },
    {
      title: "Get a Customized Healthcare Email Marketing List Tailored to Your Goals",
      content: "Looking for a custom Healthcare Email Marketing list? You've come to the right place. At DataInGo Solutions, we offer both ready-to-use Healthcare Email Databases and fully customized lists tailored to your unique marketing objectives. Whether you're targeting a niche audience or planning a broad campaign, we provide the accurate data you need to unlock B2B opportunities through multi-channel marketing and lead generation. Planning a targeted outreach campaign? Our Healthcare Industry Mailing Lists can be customized to align with your business goals and budget—helping you strengthen your presence in key markets such as the USA, Canada, Europe, Australia, and more. We offer detailed segmentation options including Full Name, Specialization, Direct Phone Number, Email Address, Mailing Address, Patient Volume, Hospital Affiliation, and other critical data points. Let us help you connect with the right healthcare professionals to drive engagement, increase conversions, and fuel your business growth.",
      imagePosition: 'right' as const,
      image: healthcareConsultationImage
    },
    {
      title: "Targeted Healthcare Email Lists by Professional Category",
      content: "If you're looking to connect with your target audience in the healthcare industry, choose our comprehensive Healthcare List today. Our extensive database features verified contact details from hospitals, fitness centers, pharmacies, clinics, and more. Given the vast and diverse nature of the healthcare sector, building an accurate database requires specialized expertise—which we bring to the table. Our premium Healthcare Industry List is designed to help you uncover a wide range of business opportunities. With segmented data fields, our lists are fully customizable to suit your specific marketing needs and objectives. DataInGo offers a cost-effective, well-researched, and targeted solution for marketers seeking maximum ROI. By leveraging DataInGo Healthcare Industry List, you'll gain a competitive edge and stay ahead in this dynamic market.",
      imagePosition: 'left' as const,
      image: healthcareTechnologyImage
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
      subtitle="Customized Healthcare Contact Database for Client Outreach. Connect with healthcare professionals and medical decision-makers"
      description="Transform healthcare executives from leads to loyal customers with our 100% accurate healthcare email lists. Reach the right people with reliable data that drives results. Reach healthcare professionals, hospital administrators, and medical industry decision-makers with our comprehensive healthcare email lists. All data is collected in full compliance with HIPAA and medical privacy regulations."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
      heroImage={healthcareHeroImage}
    />
  );
};

export default HealthcareEmailLists;