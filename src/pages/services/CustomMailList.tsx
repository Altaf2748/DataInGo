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
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import customMailHeroImage from '@/assets/services-custom-mail-hero.jpg';
import servicesDataProcessImage from '@/assets/services-data-process.jpg';
import { serviceFAQs } from '@/data/serviceFAQs';

const CustomMailList: React.FC = () => {
  const contentBlocks = [
    {
      title: "Tailored to Your Exact Requirements",
      content: "Get custom email lists built specifically for your unique business needs. Whether you need contacts from specific niches, geographic regions, company sizes, or with particular technology requirements, we create bespoke lists that match your precise targeting criteria.",
      imagePosition: 'left' as const,
      image: servicesDataProcessImage
    },
    {
      title: "Advanced Filtering and Research",
      content: "Our research team uses advanced data mining techniques to identify prospects that match your custom specifications. We can filter by any combination of industry, job title, company revenue, employee count, technology stack, location, and hundreds of other data points.",
      imagePosition: 'right' as const,
      image: servicesDataProcessImage
    },
    {
      title: "Dedicated Account Management",
      content: "Work directly with our data specialists who understand your business and target market. From initial consultation to final delivery, you'll have dedicated support to ensure your custom list meets all your requirements and delivers the results you need.",
      imagePosition: 'left' as const,
      image: servicesDataProcessImage
    }
  ];

  const additionalContentSections = [
    {
      title: "Top Custom Mailing List Service for Marketing in the USA",
      content: "At DataInGo Solutions, we provide premium custom mailing lists tailored specifically to your marketing objectives. Whether you're focusing on a particular industry, location, or job role, our lists are customized to meet your exact needs. Our mailing lists are crafted with accuracy and reliability at the forefront, ensuring you connect with the right audience every time. With up-to-date, segmented data, you can effectively target key decision-makers and influencers within your chosen market. By partnering with DataInGo Solutions, you gain access to high-quality data that enhances your email campaign performance, boosts ROI, and helps foster meaningful relationships with potential clients and partners. Let us help you optimize your marketing strategy with a custom mailing list designed to align perfectly with your business goals. Contact us today to elevate your marketing success!"
    },
    {
      title: "Why DataInGo Solutions Is the Best Choice for Small Business Email Lists",
      content: "At DataInGo Solutions, we simplify connecting you with the right audience. Our business mailing lists are crafted to help you target the most relevant prospects, making your marketing campaigns more effective."
    }
  ];

  const whyChooseReasons = [
    {
      title: "Targeted Connections",
      description: "Reach key individuals based on industry, job role, or location, ensuring your message lands with the decision-makers who matter most."
    },
    {
      title: "Accurate and Reliable Data", 
      description: "Our lists are thoroughly verified and regularly updated so you connect only with active, legitimate contacts—eliminating wasted efforts."
    },
    {
      title: "Improved ROI",
      description: "By targeting the right people, your campaigns achieve better results and deliver greater return on your marketing investment."
    },
    {
      title: "Time and Cost Efficiency",
      description: "Focus your resources on high-potential leads, saving both time and money while maximizing campaign success."
    },
    {
      title: "Flexible Solutions",
      description: "Whether you need a niche list or broad coverage, we customize our mailing lists to fit your unique business requirements."
    }
  ];

  const industryLists = [
    {
      title: "Oil & Gas Industry Email Lists",
      description: "Reach professionals in the energy sector, including oil & gas companies and their suppliers."
    },
    {
      title: "Manufacturing Industry Mailing Lists",
      description: "Connect with key leaders, from production managers to supply chain executives."
    },
    {
      title: "IBM Users Mailing Lists",
      description: "Target businesses and professionals utilizing IBM solutions for your related products and services."
    },
    {
      title: "Finance & Banking Mailing Database",
      description: "Access influential contacts within finance, banking, and insurance sectors."
    },
    {
      title: "Business Email Lists",
      description: "A comprehensive collection of B2B contacts for diverse marketing campaigns."
    },
    {
      title: "Aerospace Industry Email Lists",
      description: "Engage executives and specialists in aerospace and defence industries."
    },
    {
      title: "Tourism & Hospitality Mailing Lists",
      description: "Target hotel managers, tour operators, and other professionals in travel and hospitality."
    }
  ];

  const features = [
    "100% Custom Targeting",
    "Advanced Data Research",
    "Unlimited Filter Options",
    "Dedicated Account Manager",
    "Quality Guarantee",
    "Fast Turnaround Time"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'B2B Email Lists', href: '/services/b2b-email-list' },
    { name: 'Custom Mail List', href: '/services/b2b-email-list/custom-mail-list' }
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
        title="Custom Mail List"
        subtitle="Maximize Your Marketing Impact Using a Personalized Mailing List. Personalized lists built according to your specific requirements"
        primaryCTA={{
          text: "Enquire Now",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "#features"
        }}
        backgroundImage={customMailHeroImage}
      />

      {/* Service Description with Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Choose Our Custom Mail Lists?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with your ideal audience, enhance campaign performance, and achieve impactful results using customized customer mailing lists from DataInGo Solutions. Get precisely targeted email lists created to match your unique business requirements.
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
          
          {/* Why Choose DataInGo Solutions Reasons */}
          <div className="space-y-8">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground flex items-center">
                  <span className="text-primary mr-3">{index + 1}.</span>
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed ml-8">
                  {reason.description}
                </p>
              </div>
            ))}
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Partner with DataInGo Solutions to elevate your marketing with tailored business email lists designed to fuel growth and success.
            </p>
          </div>
          
          {/* Drive your campaigns to success */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6">Drive your campaigns to success!</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our data enrichment solutions empower you to precisely target diverse markets through customized products and tools. We deliver tailored services that cater to varied business requirements, complemented by expert consulting to refine your strategy. Beyond that, we help optimize current contracts, boost performance, and unlock upselling opportunities. Additionally, we provide a range of supplementary software, outsourced services, and continuous support to elevate your business operations.
            </p>
          </div>
          
          {/* Assist you in accomplishing your campaign targets */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6">Assist you in accomplishing your campaign targets?</h2>
            <div className="space-y-4">
              {[
                "Gain accurate audience data from the very beginning.",
                "Leverage intelligent data to identify intent signals and prompt timely actions.",
                "Accelerate deal closures with reduced lead cycles.",
                "Execute campaigns customized for targeted geographic locations.",
                "Design personalized campaigns using more than 72 data intelligence fields.",
                "Identify and connect with key decision-makers to drive success.",
                "Strategically plan your campaign targets ahead of time.",
                "Use insights on prospect keywords and advertising spend to refine your strategy."
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Individually Crafted Mailing Lists */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6">Individually Crafted Mailing Lists</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Connect with the right audience using our precisely targeted mailing lists. Designed to help you engage decision-makers across a variety of industries, our lists include:
            </p>
            <div className="space-y-4">
              {industryLists.map((list, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{list.title}</h3>
                    <p className="text-muted-foreground">{list.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Our data is regularly updated, accurately segmented, and designed to help you run impactful marketing campaigns that drive business growth efficiently.
            </p>
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
        serviceName="Custom Mail List" 
        faqs={serviceFAQs.customMailList || []} 
      />

      {/* Final CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to Create Your Custom Mail List?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start your targeted marketing campaign today with our customized email lists
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

export default CustomMailList;