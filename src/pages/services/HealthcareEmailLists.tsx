import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TilesGrid from '@/components/TilesGrid';
import ProcessFlow from '@/components/ProcessFlow';
import ReasonsGrid from '@/components/ReasonsGrid';
import ServiceFAQs from '@/components/ServiceFAQs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import healthcareHeroImage from '@/assets/services-healthcare-hero.jpg';
import healthcareTechnologyImage from '@/assets/services-healthcare-technology.jpg';
import healthcareConsultationImage from '@/assets/services-healthcare-consultation.jpg';
import { serviceFAQs } from '@/data/serviceFAQs';

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

  const additionalContentSections = [
    {
      title: "Facilitate Engagement with Senior Healthcare Professionals",
      content: "Looking to engage key influencers in the healthcare sector? Our Verified Healthcare Mailing List offers accurate, up-to-date contact information to help you reach healthcare executives efficiently and effectively. This comprehensive database includes thoroughly verified contacts from hospitals, clinics, healthcare organizations, insurance providers, and more—ensuring you focus your marketing on the right audience. Whether you're promoting medical equipment, healthcare software, or professional services, our mailing list allows you to target high-value decision-makers who are ready to engage. Boost your outreach, improve campaign performance, and drive more conversions with confidence. Save time and resources by accessing a mailing list that delivers real results. Let DataInGo Solutions help you unlock new opportunities in the healthcare industry."
    },
    {
      title: "Get a Customized Healthcare Email Marketing List Tailored to Your Goals",
      content: "Looking for a custom Healthcare Email Marketing list? You've come to the right place. At DataInGo Solutions, we offer both ready-to-use Healthcare Email Databases and fully customized lists tailored to your unique marketing objectives. Whether you're targeting a niche audience or planning a broad campaign, we provide the accurate data you need to unlock B2B opportunities through multi-channel marketing and lead generation. Planning a targeted outreach campaign? Our Healthcare Industry Mailing Lists can be customized to align with your business goals and budget—helping you strengthen your presence in key markets such as the USA, Canada, Europe, Australia, and more. We offer detailed segmentation options including Full Name, Specialization, Direct Phone Number, Email Address, Mailing Address, Patient Volume, Hospital Affiliation, and other critical data points. Let us help you connect with the right healthcare professionals to drive engagement, increase conversions, and fuel your business growth."
    },
    {
      title: "Targeted Healthcare Email Lists by Professional Category",
      content: "If you're looking to connect with your target audience in the healthcare industry, choose our comprehensive Healthcare List today. Our extensive database features verified contact details from hospitals, fitness centers, pharmacies, clinics, and more."
    }
  ];

  const professionalTitles = [
    "Allied Health Professionals",
    "Doctors", 
    "Nurses",
    "Pharmacists",
    "Other Healthcare Professionals"
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
    <>
      <Header />
      
      {/* Breadcrumbs */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span>/</span>}
                <Link 
                  to={crumb.href} 
                  className={index === breadcrumbs.length - 1 
                    ? "text-foreground font-medium" 
                    : "hover:text-foreground transition-colors"
                  }
                >
                  {crumb.name}
                </Link>
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <Hero
        title="Healthcare Email Lists"
        subtitle="Customized Healthcare Contact Database for Client Outreach. Connect with healthcare professionals and medical decision-makers"
        primaryCTA={{
          text: "Enquire Now",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "#features"
        }}
        backgroundImage={healthcareHeroImage}
      />

      {/* Service Description with Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Choose Our Healthcare Email Lists?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with verified healthcare professionals and medical decision-makers through our comprehensive database
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="features">
              {features.map((feature, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Blocks */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {contentBlocks.map((block, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                block.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl font-bold text-foreground">{block.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{block.content}</p>
                  <Button asChild size="lg" className="w-fit">
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                {block.image && (
                  <div className="flex-1">
                    <img 
                      src={block.image} 
                      alt={block.title} 
                      className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content Sections - Positioned Before Related Services */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl mx-auto px-4 space-y-16">
          {additionalContentSections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground mb-6">{section.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
          
          {/* Healthcare Mailing Lists by Professional Title */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6">Healthcare Mailing Lists Sorted by Professional Title</h2>
            <ul className="space-y-3">
              {professionalTitles.map((title, index) => (
                <li key={index} className="flex items-center text-lg text-muted-foreground">
                  <span className="font-semibold text-primary mr-3">{index + 1}.</span>
                  {title}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Best-Selling Healthcare Contact Solutions */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6">Best-Selling Healthcare Contact and Database Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Anesthetists Email List",
                "Athletic Therapist Email List", 
                "Audiologists Email List",
                "Cancer Specialist List",
                "Cardiologists Mailing List",
                "Chief Medical Officer Email List",
                "Chiropractors Email List",
                "Clinical Lab Scientists Email List",
                "Cosmetologists Email List",
                "Dental Laboratories Email List",
                "Dermatologists Email List",
                "Diabetes Specialists Email List",
                "Diagnostic Radiologists Email List",
                "Emergency Medicine Specialists Email List",
                "ENT Specialist Email List",
                "Family Medicine Directors Email List",
                "Family/Marital Therapists Email List",
                "Gastroenterologists Email List",
                "Gastroenterology Directors List",
                "General Surgeons Email List",
                "Geriatric Services Directors Email List",
                "Global Physician Email List",
                "Gynecologists Email List",
                "Healthcare Executives Email List",
                "Heart Disease Specialist Email List",
                "Hematologist Email List",
                "Hospital Administrators Email List",
                "Hospital Decision Makers List",
                "Hospital Executives Email List",
                "Hospital HR Directors Email List",
                "Hospital Office Managers List",
                "Hypnotists Email List",
                "Medical Geneticist Email List",
                "Naturopathic Physicians Email List",
                "Neurologists Email List",
                "Neurosurgeons Email List",
                "Nurse Managers Email List",
                "Nurses Email List",
                "Nursing Home Operators Email List",
                "Nursing Homes Email List",
                "Nutritionist Medicine Physician Email List",
                "Obstetrics Email List",
                "Oncologists Email List",
                "Oncology Nurses Email List",
                "Optometrists Email List",
                "Oral and Maxillofacial Surgeons Email List",
                "Oral Surgeons Email List",
                "Orthodontists Email List",
                "Orthopedic Surgeons List",
                "Orthopedists Email List",
                "Pathologists Email List",
                "Pediatricians Email List",
                "Pharmacy Directors Email List",
                "Physical Therapist Email List",
                "Physician Email List",
                "Physician Recruiters Email List",
                "Plastic Surgeons Email List",
                "Psychiatrists Email List",
                "Psychologists Email List",
                "Radiologists Email List",
                "Radiology Directors Email List",
                "Registered Nurses Email List",
                "Respiratory Therapists Email List",
                "Surgeon Email List",
                "Urologist Email List",
                "Veterinarians Email Leads",
                "Physicians Email List",
                "Dentists Email List",
                "Doctors Email List",
                "Dental Surgery Email List",
                "Anesthesiology Email List",
                "Diagnostic Radiology Email List",
                "Chiropractor Email List",
                "Emergency Email List",
                "Oncologist Email List",
                "Otolaryngology Email List",
                "Family Medicine Email List",
                "Dermatologist Email List",
                "Pharmaceuticals Email List",
                "Ophthalmologists Email List",
                "Pathologist Email List",
                "Medical Director Email List",
                "Naturopathic Medicine Email List",
                "Internal Medicine Email List",
                "General Surgery Email List",
                "Certified Registered Nurse Email List",
                "Cardiologist Email List",
                "Physical Medicine Email List",
                "General Practice Email List",
                "Gastroenterology Email List"
              ].map((item, index) => (
                <div key={index} className="flex items-center text-sm text-muted-foreground p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <TilesGrid />

      {/* Process Flow */}
      <ProcessFlow />

      {/* Reasons Grid */}
      <ReasonsGrid />

      {/* Service FAQs */}
      <ServiceFAQs 
        serviceName="Healthcare Email Lists" 
        faqs={serviceFAQs.healthcareEmailLists || []} 
      />

      {/* Final CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to Connect with Healthcare Professionals?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start your targeted healthcare marketing campaign today with our verified email lists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get Your Custom List</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="tel:+1-800-123-4567">Call: +1-800-123-4567</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HealthcareEmailLists;