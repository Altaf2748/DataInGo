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
import professionalsHeroImage from '@/assets/services-professionals-hero.jpg';
import professionalsMeetingImage from '@/assets/services-professionals-meeting.jpg';
import professionalsOfficeImage from '@/assets/services-professionals-office.jpg';
import { serviceFAQs } from '@/data/serviceFAQs';

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

  const additionalContentSections = [
    {
      title: "Professionally Verified Email List with Guaranteed Accuracy",
      content: "Collaborate with DataInGo Solutions to reach leading companies and C-level executives, turning them into your valued customers. Benefit from a premium, trustworthy email list designed to deliver measurable results."
    },
    {
      title: "USA's Most Reliable Professional Mailing Database Provider",
      content: "DataInGo Solutions delivers the most reliable professional mailing databases in the USA, providing accurate and verified contact lists to help you connect with key decision-makers across a wide range of industries."
    },
    {
      title: "How Professional Email Lists Can Boost Your Business",
      content: "Professional email lists provide precision targeting, improved conversion rates, time and cost efficiency, higher return on investment, enhanced brand visibility, and more effective campaigns. By connecting with the right decision-makers, you can accelerate your business growth and maximize your marketing ROI."
    },
    {
      title: "Boosting Marketing Efficiency Through Professional Email Lists",
      content: "Our professional email lists help streamline your marketing efforts by connecting you directly with key decision-makers across various industries. This targeted approach reduces wasted resources and increases the likelihood of successful conversions, making your campaigns more efficient and cost-effective."
    }
  ];

  const professionalSegments = [
    "C-level Executives (CEOs, CFOs, CTOs)",
    "Healthcare Professionals", 
    "IT and Technology Experts",
    "Marketing and Sales Leaders",
    "Finance and Accounting Professionals",
    "Legal Experts"
  ];

  const businessBenefits = [
    "Precision Targeting",
    "Improved Conversion Rates", 
    "Time and Cost Efficiency",
    "Higher Return on Investment",
    "Enhanced Brand Visibility",
    "More Effective Campaigns"
  ];

  const professionalLists = [
    "CEO Email List",
    "CFO Email List", 
    "CTO Email List",
    "CMO Email List",
    "HR Executives Email List",
    "IT Managers Email List",
    "Lawyers Email List",
    "Event Organizers Email List",
    "Accountants Email List",
    "Consultants Email List"
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
        title="Professionals Email List"
        subtitle="Connect with top-level professionals and executives across industries"
        primaryCTA={{
          text: "Enquire Now",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "#features"
        }}
        backgroundImage={professionalsHeroImage}
      />

      {/* Service Description with Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Choose Our Professionals Email Lists?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with verified professionals and decision-makers through our comprehensive database
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
          
          {/* Professional Segments */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Segments include:</h3>
            <ul className="space-y-3">
              {professionalSegments.map((segment, index) => (
                <li key={index} className="flex items-center text-lg text-muted-foreground">
                  <span className="font-semibold text-primary mr-3">•</span>
                  {segment}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Business Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">How Professional Email Lists Can Boost Your Business:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {businessBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-lg text-muted-foreground">
                  <span className="font-semibold text-primary mr-3">{index + 1}.</span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          
          {/* Top Segmented Professional Lists */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6">Top Segmented Professional Lists</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {professionalLists.map((list, index) => (
                <div key={index} className="flex items-center text-lg text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  {list}
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
        serviceName="Professionals Email List" 
        faqs={serviceFAQs.professionalsEmailList || []} 
      />

      {/* Final CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to Connect with Professional Decision-Makers?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start your targeted professional marketing campaign today with our verified email lists
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

export default ProfessionalsEmailList;