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
import dataVerificationHeroImage from '@/assets/services-data-verification-hero.jpg';
import servicesDataVerificationImage from '@/assets/services-data-verification.jpg';
import { serviceFAQs } from '@/data/serviceFAQs';

const DataVerification: React.FC = () => {
  const contentBlocks = [
    {
      title: "Guaranteeing Data Integrity with Our Verification Services",
      content: "Accurate and current data is crucial for maximizing the impact of your marketing strategies and business processes. At DataInGo Solutions, our thorough data verification services guarantee that your contact lists remain precise and free from errors. By cross-checking your data with trusted sources, we remove outdated or duplicate entries, resulting in a streamlined and more effective list. This ensures improved email deliverability, so your campaigns reach the right audience and avoid issues like bounced emails or wasted efforts.",
      imagePosition: 'left' as const,
      image: servicesDataVerificationImage
    },
    {
      title: "Maximizing Campaign Performance and ROI",
      content: "Our data verification services are designed to optimize the success of your marketing campaigns. By ensuring your contact data is clean and accurate, you'll experience fewer bounces, higher engagement rates, and improved overall performance. Eliminating errors and outdated information helps you target the right audience with precision, making your marketing efforts more impactful. With a refined database, you can boost ROI and achieve consistent, measurable results in your campaigns. Let us help you maintain data quality for maximum campaign effectiveness.",
      imagePosition: 'right' as const,
      image: servicesDataVerificationImage
    },
    {
      title: "Email Verification",
      content: "The effectiveness of your email campaigns hinges on the accuracy of your contact list. Email verification ensures that the addresses in your list are valid and active, helping you avoid issues like deliverability problems and a tarnished sender reputation. By verifying your emails, you ensure they are accurate and trustworthy, so your messages reach the right audience without any obstacles.",
      imagePosition: 'left' as const,
      image: servicesDataVerificationImage
    },
    {
      title: "Tele Verification",
      content: "Each incorrect contact can harm your business. Our phone verification service cleans and updates your database by detecting and correcting any inconsistencies in your contact information. We employ a comprehensive process to remove outdated or inactive entries, ensuring your database remains accurate and optimized for effective outreach. This leads to improved communication with potential leads and minimizes wasted efforts.",
      imagePosition: 'right' as const,
      image: servicesDataVerificationImage
    },
    {
      title: "Social Verification",
      content: "We validate the company names and job titles of contacts in your database by cross-checking them across multiple social media and online platforms. This ensures you're connecting with the right individuals in the appropriate roles. Our social verification services enhance your telemarketing and follow-up efforts, boosting your engagement with the most relevant prospects.",
      imagePosition: 'left' as const,
      image: servicesDataVerificationImage
    }
  ];

  const features = [
    "SMTP Verification",
    "Domain & MX Record Checks",
    "Bounce Detection",
    "Catch-All Identification",
    "Phone Number Validation",
    "Address Standardization"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Data Enrichment', href: '/services/data-enrichment' },
    { name: 'Data Verification', href: '/services/data-enrichment/data-verification' }
  ];

  const dataVerificationFAQs = [
    {
      question: "What is Email Verification, and why is it important?",
      answer: "Email verification involves confirming the validity and activity of email addresses to prevent deliverability problems and minimize bounce rates. This ensures your marketing emails reach the intended audience, boosting your sender reputation and increasing the effectiveness of your campaigns."
    },
    {
      question: "How does Tele Verification help my business?",
      answer: "Tele verification helps maintain an accurate and current contact database by detecting and removing invalid or inactive phone numbers. This enhances communication with potential customers, minimizes wasted outreach, and boosts the overall effectiveness of your campaigns."
    },
    {
      question: "What is Social Verification and how does it benefit my campaigns?",
      answer: "Social verification involves cross-referencing the company name and job title of each contact in your database with social media and online platforms. This ensures you're connecting with the right decision-makers, enhancing the effectiveness of your telemarketing and follow-up efforts."
    },
    {
      question: "How often should I use email and tele verification services?",
      answer: "Regular email and tele verification is crucial, particularly before initiating marketing campaigns or refreshing your contact list. Keeping your data up-to-date ensures greater accuracy, leading to more effective outreach and improved conversion rates."
    },
    {
      question: "Can I use these verification services for both B2B and B2C marketing?",
      answer: "Absolutely! Our verification services cater to both B2B and B2C markets. Whether you're reaching out to businesses or individual consumers, our email, tele, and social verification tools ensure you're engaging with the correct contacts."
    },
    {
      question: "What happens if my database contains a large number of invalid contacts?",
      answer: "Having a database full of invalid contacts can result in high bounce rates, ineffective marketing efforts, and harm to your reputation. Our verification services help clean up your database, eliminate invalid contacts, and boost the efficiency of your outreach campaigns."
    },
    {
      question: "How do I get started with your verification services?",
      answer: "Getting started is simple! Just share your current database with us, and we'll create a tailored plan to verify your contacts. Our team will guide you through the entire process, ensuring your data is thoroughly verified and ready for optimal use."
    },
    {
      question: "Are your verification services accurate and reliable?",
      answer: "Yes, our verification services are top-notch in accuracy and reliability. We employ advanced tools and techniques to validate emails, phone numbers, and social data, ensuring that your marketing efforts connect with the right audience and deliver optimal results."
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
        title="Data Verification"
        subtitle="Enhance Deliverability and Expand Reach with Data Verification"
        primaryCTA={{
          text: "Enquire Now",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "#features"
        }}
        backgroundImage={dataVerificationHeroImage}
      />

      {/* Our Data Verification Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Data Verification Services
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Having accurate, up-to-date data is crucial for effective marketing and smooth business operations. Our data verification services guarantee that your contact lists remain accurate and error-free by cross-checking them against multiple sources to eliminate outdated or duplicate entries. This improves your email deliverability and enhances the success of your campaigns.
                </p>
                <p className="font-medium">Here's what you can expect from our service:</p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    "Fresh, accurate contact information",
                    "Increased email deliverability",
                    "Improved customer targeting",
                    "Enhanced marketing campaign outcomes"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6">
                  Let us handle your data verification, so you can focus on driving business growth and connecting with your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Choose Our Data Verification Services?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ensure your marketing campaigns reach real, active contacts with our comprehensive data verification services. We validate email addresses, phone numbers, and contact details to improve deliverability and campaign performance.
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

      {/* Related Services */}
      <TilesGrid />

      {/* Process Flow */}
      <ProcessFlow />

      {/* Reasons Grid */}
      <ReasonsGrid />

      {/* Service FAQs */}
      <ServiceFAQs 
        serviceName="Data Verification" 
        faqs={dataVerificationFAQs} 
      />

      {/* Final CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to Verify Your Data?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start validating your contact database for maximum deliverability today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get Your Data Verified</Link>
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

export default DataVerification;