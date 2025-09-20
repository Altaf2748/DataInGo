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
import digitalMarketingHeroImage from '@/assets/services-digital-marketing-hero.jpg';
import digitalMarketingImage from '@/assets/services-digital-marketing.jpg';
import dataAnalyticsImage from '@/assets/services-data-analytics.jpg';
import emailMarketingImage from '@/assets/home-email-marketing.jpg';
import socialMediaImage from '@/assets/services-social-media.jpg';

const DigitalMarketing: React.FC = () => {
  const contentBlocks = [
    {
      title: "How Digital Marketing Solutions Fuel Business Growth?",
      content: "Digital marketing enables businesses of all sizes to engage with customers around the clock at a cost-effective price. Whether you're just launching, expanding, or already established, DataInGo Solutions can help you reach your audience anytime and from anywhere. With digital marketing, you can overcome time zone and geographic barriers, allowing you to promote your products and services whenever your customers need them most. By partnering with DataInGo Solutions, you can focus on growing your business while we take care of your digital presence. Our team ensures your brand remains visible to both potential and loyal customers, fostering stronger relationships, enhancing visibility, and driving increased sales. With a tailored digital strategy, your business will always be accessible, delivering the right message to your audience at the right time.",
      imagePosition: 'left' as const,
      image: digitalMarketingImage
    },
    {
      title: "Boost Your Business with Impactful, Results-Oriented Digital Marketing",
      content: "Digital marketing goes beyond just boosting visibility; it's about achieving tangible, measurable outcomes. At DataInGo Solutions, we design customized strategies to elevate your online presence, including: Targeted social media campaigns, SEO optimization, and PPC advertising to reach your audience effectively. A strategy that ensures your brand resonates with the right people, at the right time, through the right channels. Utilizing data-backed insights and industry-tested techniques, we help you attract qualified leads, foster customer relationships, and drive conversions. Partner with us to create a powerful digital footprint that fuels long-term business growth.",
      imagePosition: 'right' as const,
      image: socialMediaImage
    }
  ];

  const digitalServices = [
    {
      number: "01",
      title: "Targeted Email Campaigns",
      description: "Deliver personalized emails that resonate with the right audience and drive meaningful actions."
    },
    {
      number: "02",
      title: "LinkedIn Lead Generation",
      description: "Leverage LinkedIn to connect with industry professionals, expand your network, and generate quality leads."
    },
    {
      number: "03",
      title: "Event Promotion & Marketing",
      description: "Drive engagement and capture leads through memorable and impactful events."
    },
    {
      number: "04",
      title: "Engaging Content Creation",
      description: "Craft compelling, clear content that engages your audience and increases interaction."
    },
    {
      number: "05",
      title: "Social Media Graphics & Video Production",
      description: "Design eye-catching posts and videos to elevate your social media presence."
    },
    {
      number: "06",
      title: "LinkedIn Profile Optimization",
      description: "Enhance your LinkedIn profile to attract more business opportunities and connections."
    },
    {
      number: "07",
      title: "SEO (Search Engine Optimization)",
      description: "Improve your online visibility with effective SEO strategies that drive organic traffic."
    },
    {
      number: "08",
      title: "Custom Website Design & Development",
      description: "Build a seamless, user-friendly website that reflects your brand and helps you stand out in the digital space."
    }
  ];

  const whyChooseReasons = [
    {
      title: "Customized Strategies",
      description: "We tailor our services to meet your specific business objectives, delivering the right approach for your unique goals."
    },
    {
      title: "Skilled Professionals",
      description: "Our expert team leverages the latest digital marketing techniques to drive impactful results."
    },
    {
      title: "Around-the-Clock Visibility",
      description: "Ensure your business stays visible 24/7, engaging customers across all time zones."
    },
    {
      title: "Affordable Excellence",
      description: "High-quality digital marketing solutions designed to maximize your online presence without breaking the bank."
    },
    {
      title: "Measurable Outcomes",
      description: "Our data-driven methods guarantee you the highest return on investment through consistent and proven performance."
    },
    {
      title: "Client-Centered Approach",
      description: "We prioritize building strong, lasting partnerships focused on your growth and success at every stage."
    },
    {
      title: "End-to-End Services",
      description: "Offering a comprehensive suite of digital marketing solutions from SEO to email campaigns, all aimed at expanding your business."
    },
    {
      title: "Worldwide Impact",
      description: "We help extend your brand's presence locally and globally, connecting you with customers wherever they are."
    }
  ];

  const features = [
    "Multi-Channel Campaigns",
    "Performance Tracking & Analytics",
    "A/B Testing & Optimization",
    "Creative Content Development",
    "Lead Generation Focus",
    "ROI Measurement"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' }
  ];

  const faqItems = [
    {
      question: "What services does DataInGo Solutions offer?",
      answer: "We provide a comprehensive suite of digital marketing services, such as SEO, email campaigns, lead generation, and data-powered strategies, all designed to drive business growth."
    },
    {
      question: "How can digital marketing help my business?",
      answer: "Digital marketing enhances your online presence, fosters customer engagement, drives lead generation, and boosts sales, all while delivering trackable and measurable outcomes."
    },
    {
      question: "Is it affordable to work with DataInGo Solutions?",
      answer: "Absolutely, we provide affordable solutions that deliver exceptional results, ensuring you get the best value without going over budget."
    },
    {
      question: "How does DataInGo Solutions customize its services?",
      answer: "We customize our strategies to align with your business goals, guaranteeing optimal results and the highest return on investment."
    },
    {
      question: "What makes DataInGo Solutions different from other agencies?",
      answer: "Our approach is centered around building lasting partnerships, delivering data-driven outcomes, and offering tailored strategies to ensure your business thrives in the digital world."
    },
    {
      question: "Can DataInGo Solutions help businesses of all sizes?",
      answer: "Absolutely, we collaborate with businesses of all sizes, from startups to well-established corporations, crafting customized marketing strategies that align with each company's specific goals and needs."
    },
    {
      question: "How do I get started with DataInGo Solutions?",
      answer: "Just get in touch with us for a consultation. We'll talk through your objectives and design a personalized digital marketing strategy tailored to help you succeed."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "Results may vary based on the strategy, but we prioritize delivering measurable outcomes and continuously refine campaigns to ensure long-term success."
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
        title="Digital Marketing Services"
        subtitle="Top-Rated Digital Marketing Services Company in the USA and Worldwide. Comprehensive digital marketing services to maximize your reach and engagement"
        primaryCTA={{
          text: "Enquire Now",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "#features"
        }}
        backgroundImage={digitalMarketingHeroImage}
      />

      {/* Service Introduction */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              DataInGo Solutions is a trusted, results-driven digital marketing agency that puts your business goals first. Unlike other agencies that rely on generic approaches, we customize our services to meet your specific needs, ensuring the strategies we implement align with your vision and industry.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our team leverages proven SEO techniques and innovative marketing tactics to bring new customers to your business and maximize your online presence. Whether you're looking to build a user-friendly website or craft a targeted marketing strategy, we've got the expertise to deliver measurable results that help you succeed.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              While others may promise quick fixes, we focus on long-term, sustainable growth, providing you with a marketing plan that is uniquely tailored to your business. We don't see ourselves as just another agency – we're your partner in growth, working hand-in-hand with you to achieve success.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Digital Marketing Features
              </h2>
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

      {/* Digital Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                We Can Drive Rapid Growth for Your Business
              </h2>
              <p className="text-xl text-muted-foreground">
                Customer-Centric Digital Marketing Services Tailored to Your Business Needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {digitalServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-background rounded-lg border border-border">
                  <span className="text-xl font-bold text-primary flex-shrink-0">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Top-Rated Digital Marketing Agency in the USA and Worldwide
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseReasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3 p-6 bg-muted/30 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
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
        serviceName="Digital Marketing" 
        faqs={faqItems} 
      />

      {/* Final CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to Accelerate Your Digital Growth?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Partner with us to create comprehensive digital marketing campaigns that deliver measurable results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Start Your Digital Journey</Link>
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

export default DigitalMarketing;