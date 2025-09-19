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
    <div>
      <ServicePageTemplate
        title="Professionals Email List"
        subtitle="Connect with top-level professionals and executives across industries"
        description="Reach high-level professionals including executives, lawyers, consultants, and industry leaders with our comprehensive professionals email lists. Our database includes verified contacts from professional service firms, Fortune 500 companies, and industry associations."
        contentBlocks={contentBlocks}
        features={features}
        breadcrumbs={breadcrumbs}
        heroImage={professionalsHeroImage}
      />

      {/* Additional Content Sections */}
      
      {/* Professionally Verified Email List Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-poppins">
              Professionally Verified Email List with Guaranteed Accuracy
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Collaborate with DataInGo Solutions to reach leading companies and C-level executives, turning them into your valued customers. Benefit from a premium, trustworthy email list designed to deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* USA's Most Reliable Provider Section */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-poppins text-center">
              USA's Most Reliable Professional Mailing Database Provider
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8 text-center">
              DataInGo Solutions delivers the most reliable professional mailing databases in the USA, providing accurate and verified contact lists to help you connect with key decision-makers across a wide range of industries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <h3 className="font-semibold text-foreground">C-level Executives</h3>
                <p className="text-sm text-foreground/70 mt-2">(CEOs, CFOs, CTOs)</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <h3 className="font-semibold text-foreground">Healthcare Professionals</h3>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <h3 className="font-semibold text-foreground">IT and Technology Experts</h3>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <h3 className="font-semibold text-foreground">Marketing and Sales Leaders</h3>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <h3 className="font-semibold text-foreground">Finance and Accounting Professionals</h3>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <h3 className="font-semibold text-foreground">Legal Experts</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Professional Email Lists Can Boost Your Business */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-poppins text-center">
              How Professional Email Lists Can Boost Your Business
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Precision Targeting",
                "Improved Conversion Rates", 
                "Time and Cost Efficiency",
                "Higher Return on Investment",
                "Enhanced Brand Visibility",
                "More Effective Campaigns"
              ].map((benefit, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Boosting Marketing Efficiency Section */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-poppins">
              Boosting Marketing Efficiency Through Professional Email Lists
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Professional email lists enable targeted marketing campaigns that reach decision-makers directly, resulting in higher engagement rates and improved ROI. By connecting with verified professionals across industries, businesses can streamline their outreach efforts and focus resources on prospects most likely to convert.
            </p>
          </div>
        </div>
      </section>

      {/* Top Segmented Professional Lists */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 font-poppins text-center">
              Top Segmented Professional Lists
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "CEO Email List",
                "CFO Contact Database",
                "CTO Mailing List",
                "CMO Email Database",
                "HR Executives List",
                "IT Managers Database",
                "Lawyers Email List",
                "Event Organizers List",
                "Sales Directors Database",
                "Marketing Managers List",
                "Operations Managers",
                "Business Development Executives",
                "Procurement Managers",
                "Financial Advisors",
                "Management Consultants",
                "Project Managers",
                "Product Managers",
                "Strategy Consultants",
                "Executive Assistants",
                "Business Analysts",
                "Account Managers",
                "Regional Managers",
                "Vice Presidents",
                "Directors of Operations",
                "General Managers",
                "Branch Managers",
                "Department Heads",
                "Team Leaders",
                "Senior Executives",
                "C-Suite Professionals"
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

export default ProfessionalsEmailList;