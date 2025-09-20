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
import emailAppendHeroImage from '@/assets/services-email-append-hero.jpg';
import servicesDataProcessImage from '@/assets/services-data-process.jpg';
import { serviceFAQs } from '@/data/serviceFAQs';

const EmailAppend: React.FC = () => {
  const contentBlocks = [
    {
      title: "Fill Missing Email Addresses Instantly",
      content: "Transform incomplete contact databases by appending verified email addresses. Our email append service uses multiple data sources and validation techniques to find and verify missing email addresses for your business contacts, increasing your database completeness up to 95%.",
      imagePosition: 'left' as const,
      image: servicesDataProcessImage
    },
    {
      title: "Advanced Email Discovery & Validation",
      content: "Our sophisticated algorithms search across professional networks, business directories, and verified databases to discover accurate email addresses. Each found email undergoes multi-step validation including SMTP verification, domain checks, and deliverability testing.",
      imagePosition: 'right' as const,
      image: servicesDataProcessImage
    },
    {
      title: "GDPR Compliant & CAN-SPAM Ready",
      content: "All email append services comply with GDPR, CAN-SPAM, and international data protection regulations. We provide opt-in status verification and include necessary compliance data for your marketing campaigns. Delivery within 2-5 business days.",
      imagePosition: 'left' as const,
      image: servicesDataProcessImage
    }
  ];

  const features = [
    "SMTP Email Verification",
    "Multi-Source Data Discovery", 
    "Deliverability Testing",
    "Compliance Status Tracking",
    "Duplicate Detection",
    "CSV/Excel Export"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Data Enrichment', href: '/services/data-enrichment' },
    { name: 'Email Append', href: '/services/data-enrichment/email-append' }
  ];

  const emailAppendFAQs = [
    {
      question: "What is email appending?",
      answer: "Email appending is the process of enriching an existing database by adding missing email addresses through matching with external data sources, helping businesses update and grow their contact lists effectively."
    },
    {
      question: "How does email appending work?",
      answer: "We enhance your current contact list by cross-referencing names, postal addresses, or other available details with external databases to retrieve the missing email addresses, which are then seamlessly added to your list."
    },
    {
      question: "Why should I use email appending services?",
      answer: "Email appending ensures your email list is current and comprehensive, enhancing engagement with both customers and prospects, and boosting the effectiveness of your email marketing campaigns."
    },
    {
      question: "Is the data gathered through email appending opt-in?",
      answer: "Yes, we guarantee that all email addresses appended to your list are opt-in, ensuring full legal compliance and that recipients have explicitly agreed to receive communications."
    },
    {
      question: "Can I use email appending for both business and consumer lists?",
      answer: "Yes, we offer both business email appending (targeting decision-makers, marketers, and IT professionals) and consumer email appending services to help you grow and refresh your contact lists."
    },
    {
      question: "How accurate is the email appending data?",
      answer: "We obtain data from reputable and dependable sources to guarantee accuracy. Additionally, our services include thorough verification to ensure that the appended email addresses are both valid and deliverable."
    },
    {
      question: "Can email appending help with global outreach?",
      answer: "Yes, we provide email appending services for both local and global markets, enabling you to reach prospects and clients worldwide."
    },
    {
      question: "What's the benefit of using reverse email appending?",
      answer: "Reverse email appending allows you to enhance your existing email list by adding missing information like names, company details, or addresses, helping you refine your marketing strategy and improve targeting."
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
        title="Email Append"
        subtitle="Enhance Your Contact List with Our Email Appending Services"
        primaryCTA={{
          text: "Enquire Now",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "#features"
        }}
        backgroundImage={emailAppendHeroImage}
      />

      {/* Service Description */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Renew connections with previous customers and attract new ones through our dependable leads and exclusive email lists.
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
                Why Choose Our Email Append Services?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Fill gaps in your contact database with verified email addresses. Our email append service helps you reach more prospects by finding missing email contacts through advanced data discovery and multi-step verification processes.
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
          {/* Refresh and Reactivate Database */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6">Refresh and Reactivate Your Database with Our Email Appending Service</h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Business growth through B2B email marketing is only achievable with accurate email addresses. By leveraging DataInGo Solutions' email appending services, we can swiftly update your email database and provide you with the most current contact details for decision-makers and key marketing professionals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The future of B2B marketing looks bright, with trends such as globalization, increased R&D investments, innovative multi-channel communication, product diversification, and personalized content leading the way in lead generation. However, many B2B marketers miss out on these opportunities due to outdated or incomplete email data.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you choose to purchase a new email list from DataInGo Solutions or append your existing contacts, we ensure your data stays fresh and enables you to capitalize on the latest market trends.
              </p>
            </div>
          </div>

          {/* Refresh Your List to Capitalize on Market Opportunities */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6">Refresh Your List to Capitalize on Market Opportunities</h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                DataInGo Solutions offers a segmented master list that provides the most up-to-date information on both active and potential email accounts. With our top-tier email appending service, we help you fine-tune your marketing strategies, ensuring you reach the right audience and drive increased sales.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Partner with us to craft targeted campaigns and accelerate your global expansion.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Here's how we can help you achieve your campaign objectives:
              </p>
              <div className="space-y-4">
                {[
                  "Industry-leading 70% match rate",
                  "Achieve 95% email deliverability with verified Opt-in email addresses",
                  "Speed up conversions with quick time-to-market",
                  "Drive sales using the most accurate email marketing data",
                  "Pay only for successful appends"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How does Email Appending work */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6">How does Email Appending work?</h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Why wait? Amplify your marketing campaigns with our advanced email append solutions and gain access to qualified email leads that drive higher sales. Accelerate your campaign growth with data that guarantees your emails land in the right inboxes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We'll help you craft targeted strategies that reach the right audience and generate impactful sales with ease. Give your marketing the edge it needs with DataInGo Solutions' responsive and dependable marketing services.
              </p>
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
        serviceName="Email Append" 
        faqs={emailAppendFAQs} 
      />

      {/* Final CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to Enhance Your Email List?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start appending verified email addresses to your database today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get Your Email Append</Link>
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

export default EmailAppend;