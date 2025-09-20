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
import dataAppendHeroImage from '@/assets/services-data-append-hero.jpg';
import servicesDataProcessImage from '@/assets/services-data-process.jpg';
import { serviceFAQs } from '@/data/serviceFAQs';

const DataAppend: React.FC = () => {
  const contentBlocks = [
    {
      title: "Enrich Contact Records with Business Intelligence",
      content: "Append missing business data including company information, job titles, phone numbers, social profiles, and firmographic details. Transform basic contact lists into comprehensive business intelligence databases for better segmentation and targeting.",
      imagePosition: 'left' as const,
      image: servicesDataProcessImage
    },
    {
      title: "Advanced Firmographic & Technographic Data",
      content: "Add valuable business insights including company size, revenue bands, industry classifications (SIC/NAICS), technology stack usage, and buying signals. Perfect for CRM enrichment, lead scoring, and personalized outreach campaigns.",
      imagePosition: 'right' as const,
      image: servicesDataProcessImage
    },
    {
      title: "Scalable Data Enhancement Solutions",
      content: "Process databases of any size with our scalable data append services. From small contact lists to enterprise databases with millions of records, we deliver consistent data quality and completeness within agreed timeframes.",
      imagePosition: 'left' as const,
      image: servicesDataProcessImage
    }
  ];

  const features = [
    "Firmographic Data Append",
    "Technographic Intelligence",
    "Social Profile Discovery",
    "Phone Number Append",
    "Industry Classification",
    "Revenue & Size Data"
  ];

  const appendServices = [
    "Email Appending",
    "Postal Address Appending",
    "Phone Number Appending",
    "Business URL Appending",
    "Social Media Appending",
    "Demographic Data Appending"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Data Enrichment', href: '/services/data-enrichment' },
    { name: 'Data Append', href: '/services/data-enrichment/data-append' }
  ];

  const dataAppendFAQs = [
    {
      question: "What is Data Appending?",
      answer: "Data appending involves supplementing your existing database by adding missing or extra information, such as email addresses, phone numbers, and other contact details, to keep your data comprehensive and current."
    },
    {
      question: "How does Data Appending work?",
      answer: "Data appending involves matching your current contact information with third-party databases to complete missing details, like adding email addresses or phone numbers to your existing records."
    },
    {
      question: "Why is Data Appending important for my business?",
      answer: "It enhances the accuracy of your data, allowing for more precise targeting, lower bounce rates, and improved customer communication, ultimately resulting in more successful marketing campaigns."
    },
    {
      question: "Can Data Appending help improve email marketing campaigns?",
      answer: "Yes, data appending guarantees that your email list is refreshed with accurate and valid email addresses, boosting deliverability, minimizing bounce rates, and enhancing the effectiveness of your email campaigns."
    },
    {
      question: "What kind of data can be appended?",
      answer: "You can enrich your database with various data points, including email addresses, phone numbers, job titles, company information, social media profiles, and location details."
    },
    {
      question: "Is Data Appending legal?",
      answer: "Yes, as long as it adheres to data privacy regulations such as GDPR or CCPA, utilizing opt-in data sources and guaranteeing that all appended data is valid and legally sourced."
    },
    {
      question: "How does Data Appending improve customer targeting?",
      answer: "It enhances your current database with valuable, relevant details, enabling you to segment your audience more effectively and deliver personalized, targeted messages that connect with your prospects."
    },
    {
      question: "How often should I update my data with Data Appending?",
      answer: "It's advisable to update your data regularly based on your business requirements, but typically, refreshing it at least once a year ensures optimal accuracy and performance."
    },
    {
      question: "How can Data Appending benefit my sales team?",
      answer: "Providing your sales team with up-to-date and comprehensive contact details enables them to target the right prospects more effectively, reduce the sales cycle, and increase conversion rates."
    },
    {
      question: "What types of businesses can benefit from Data Appending?",
      answer: "Businesses across various industries, such as e-commerce, B2B, SaaS, and service providers, can all benefit from enhanced marketing, sales, and customer engagement efforts."
    }
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
        title="Data Append Services"
        subtitle="Complete your contact profiles with comprehensive business intelligence"
        primaryCTA={{
          text: "Enquire Now",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "#features"
        }}
        backgroundImage={dataAppendHeroImage}
      />

      {/* Introduction */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Finding it difficult to grow your business because of outdated or inaccurate customer data?
            </h2>
            <h3 className="text-2xl font-semibold text-primary mb-8">
              Data Appending Services in USA
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Enhance your marketing efforts with our Data Appending Services in the USA. We specialize in updating and verifying your customer contact details to ensure you're connecting with the right audience. Our service fills in the gaps by adding missing information, such as email addresses, phone numbers, and more, making your lead targeting more precise and effective.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With clean, up-to-date data, your marketing campaigns will be sharper, reducing bounce rates and boosting conversion rates. Our data appending services empower you to create highly personalized outreach, improve customer engagement, and increase sales.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Partner with DataInGo Solutions for more accurate data, better-targeted campaigns, and a stronger ROI on your marketing efforts. Let us help you maintain actionable customer information and drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Choose Our Data Append Services?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Enhance your existing contact databases with missing business information, firmographic data, and intelligence insights. Our data append services help you build comprehensive customer profiles for more effective marketing and sales campaigns.
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
      <section className="py-24 bg-background">
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

      {/* Additional Content Sections */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4 space-y-16">
          {/* What is Data Appending */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6">What is Data Appending?</h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Data appending is the process of enriching or updating your existing customer data by filling in missing details, such as email addresses, phone numbers, company names, job titles, or any other pertinent information. The purpose of data appending is to enhance the accuracy and completeness of your contact list, ensuring that you have the most relevant information to effectively target your audience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By appending data, businesses can craft more personalized marketing campaigns, reduce email bounce rates, and improve customer engagement. It helps ensure that your communications reach the right people, increasing the likelihood of generating high-quality leads and driving sales.
              </p>
            </div>
          </div>

          {/* Our Data Appending Services */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Data Appending Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appendServices.map((service, index) => (
                <Card key={index} className="border-border bg-background">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">{service}</span>
                    </div>
                  </CardContent>
                </Card>
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
        serviceName="Data Append" 
        faqs={dataAppendFAQs} 
      />

      {/* Final CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to Enhance Your Data?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start appending missing information to your database today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get Your Data Append</Link>
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

export default DataAppend;