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
    <div>
      <ServicePageTemplate
        title="Healthcare Email Lists"
        subtitle="Customized Healthcare Contact Database for Client Outreach. Connect with healthcare professionals and medical decision-makers"
        description="Transform healthcare executives from leads to loyal customers with our 100% accurate healthcare email lists. Reach the right people with reliable data that drives results. Reach healthcare professionals, hospital administrators, and medical industry decision-makers with our comprehensive healthcare email lists. All data is collected in full compliance with HIPAA and medical privacy regulations."
        contentBlocks={contentBlocks}
        features={features}
        breadcrumbs={breadcrumbs}
        heroImage={healthcareHeroImage}
      />

      {/* Additional Content Sections */}
      
      {/* Facilitate Engagement Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-poppins text-center">
              Facilitate Engagement with Senior Healthcare Professionals
            </h2>
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                Looking to engage key influencers in the healthcare sector? Our Verified Healthcare Mailing List offers accurate, up-to-date contact information to help you reach healthcare executives efficiently and effectively.
              </p>
              <p>
                This comprehensive database includes thoroughly verified contacts from hospitals, clinics, healthcare organizations, insurance providers, and more—ensuring you focus your marketing on the right audience.
              </p>
              <p>
                Whether you're promoting medical equipment, healthcare software, or professional services, our mailing list allows you to target high-value decision-makers who are ready to engage.
              </p>
              <p>
                Boost your outreach, improve campaign performance, and drive more conversions with confidence. Save time and resources by accessing a mailing list that delivers real results. Let DataInGo Solutions help you unlock new opportunities in the healthcare industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customized Healthcare Email Marketing Section */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-poppins text-center">
              Get a Customized Healthcare Email Marketing List Tailored to Your Goals
            </h2>
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                Looking for a custom Healthcare Email Marketing list? You've come to the right place. At DataInGo Solutions, we offer both ready-to-use Healthcare Email Databases and fully customized lists tailored to your unique marketing objectives. Whether you're targeting a niche audience or planning a broad campaign, we provide the accurate data you need to unlock B2B opportunities through multi-channel marketing and lead generation.
              </p>
              <p>
                Planning a targeted outreach campaign? Our Healthcare Industry Mailing Lists can be customized to align with your business goals and budget—helping you strengthen your presence in key markets such as the USA, Canada, Europe, Australia, and more.
              </p>
              <p>
                We offer detailed segmentation options including Full Name, Specialization, Direct Phone Number, Email Address, Mailing Address, Patient Volume, Hospital Affiliation, and other critical data points. Let us help you connect with the right healthcare professionals to drive engagement, increase conversions, and fuel your business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Mailing Lists by Professional Title */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-poppins text-center">
              Healthcare Mailing Lists Sorted by Professional Title
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Allied Health Professionals",
                "Doctors",
                "Nurses",
                "Pharmacists",
                "Other Healthcare Professionals"
              ].map((title, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best-Selling Healthcare Contact Solutions */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 font-poppins text-center">
              Best-Selling Healthcare Contact and Database Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Healthcare Executives Email List",
                "Hospital Administrators List",
                "Medical Directors Database",
                "Physicians Email List",
                "Nurses Contact List",
                "Healthcare IT Professionals",
                "Medical Device Decision Makers",
                "Pharmaceutical Executives",
                "Health Insurance Professionals",
                "Medical Software Users",
                "Radiology Professionals",
                "Laboratory Directors",
                "Healthcare Consultants",
                "Medical Equipment Buyers",
                "Healthcare Recruiters",
                "Medical Practice Managers",
                "Healthcare Financial Officers",
                "Medical Billing Professionals",
                "Healthcare Quality Managers",
                "Telemedicine Professionals",
                "Healthcare Data Analysts",
                "Medical Research Professionals",
                "Healthcare Compliance Officers",
                "Medical Sales Representatives",
                "Healthcare Marketing Professionals",
                "Medical Technology Specialists",
                "Healthcare Project Managers",
                "Medical Education Professionals",
                "Healthcare Operations Managers",
                "Medical Supply Chain Managers"
              ].map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <span className="text-foreground/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareEmailLists;