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
import emailCampaignsHeroImage from '@/assets/services-email-campaigns-hero.jpg';
import emailMarketingImage from '@/assets/home-email-marketing.jpg';

const EmailCampaigns: React.FC = () => {
  const contentBlocks = [
    {
      title: "Drive Higher Engagement with Customized Email Campaigns",
      content: "A personalized email campaign goes beyond simply sending a message—it creates a meaningful connection. By segmenting your audience and tailoring content to their interests, we make sure your emails reach the right people with the right message. Leveraging advanced data analytics, we refine your approach to deliver highly relevant content that boosts engagement and strengthens customer loyalty. Whether your goal is to enhance brand visibility or drive conversions, we craft emails that capture attention and motivate action.",
      imagePosition: 'left' as const,
      image: emailMarketingImage
    },
    {
      title: "Strategic Email Campaign Planning & Execution",
      content: "Create high-converting email campaigns with our comprehensive strategy and execution services. From audience segmentation and message crafting to automation setup and performance optimization, we handle every aspect of your email marketing success.",
      imagePosition: 'right' as const,
      image: emailMarketingImage
    },
    {
      title: "A/B Testing & Performance Optimization",
      content: "Continuously improve campaign performance with systematic A/B testing of subject lines, content, send times, and call-to-actions. Our optimization process ensures your campaigns deliver maximum ROI and achieve your business objectives.",
      imagePosition: 'left' as const,
      image: emailMarketingImage
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

  const processSteps = [
    {
      title: "Client Requirements",
      description: "We take the time to understand your needs and curate the most relevant databases for your business."
    },
    {
      title: "Data Compilation",
      description: "We build customized databases aligned with your specific requirements and industry benchmarks."
    },
    {
      title: "Data Verification",
      description: "We meticulously verify all data to ensure its accuracy and dependability."
    },
    {
      title: "Delivery and Support",
      description: "We deliver your tailored databases within 2-5 business days and offer continuous support."
    }
  ];

  const whyChooseReasons = [
    {
      title: "Accuracy",
      description: "Ensuring accuracy at every stage of the process."
    },
    {
      title: "Boosted ROI",
      description: "Drive higher returns with our targeted data solutions."
    },
    {
      title: "Customization",
      description: "Customize everything to align with your brand's specific needs."
    },
    {
      title: "On-Time Delivery",
      description: "Get your data within 2-5 business days, promptly and efficiently."
    },
    {
      title: "Legitimate Data",
      description: "Fully aligned with GDPR, CAN-SPAM, and Anti-Spam regulations."
    },
    {
      title: "Effective Communication",
      description: "Reach out via phone, email, LinkedIn, and more—no spamming involved."
    },
    {
      title: "Cost-effective",
      description: "Premium data services without the hefty price tag."
    },
    {
      title: "CRM-Ready",
      description: "Seamlessly integrate our data with your CRM for smooth operations."
    }
  ];

  const features = [
    "Campaign Strategy Development",
    "Template Design & Creation",
    "Audience Segmentation",
    "A/B Testing Programs",
    "Automation Setup",
    "Performance Analytics"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Email Campaigns', href: '/services/digital-marketing/email-campaigns' }
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
        title="Email Campaign Services"
        subtitle="Supercharge your business with email campaigns that drive conversions and deliver results. Drive results with strategic email marketing campaigns and automation"
        primaryCTA={{
          text: "Enquire Now",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "#features"
        }}
        backgroundImage={emailCampaignsHeroImage}
      />

      {/* Service Introduction */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Connect with your ideal audience at the perfect moment through personalized, data-driven email campaigns. A strategic email marketing plan ensures your message resonates with the right people, transforming prospects into loyal customers. By using engaging content, captivating subject lines, and smart automation, you can drive higher open rates, boost conversions, and optimize ROI. Whether you're nurturing leads, launching a new product, or reconnecting with past clients, a targeted email campaign helps maintain brand visibility and deepen customer loyalty. Make every email impactful and watch your business thrive!
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
                Our Email Campaign Features
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

      {/* How We Work Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                How We Work?
              </h2>
              <p className="text-xl text-muted-foreground">Our Process</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Top-Rated Database Solutions Provider in the USA and Worldwide
              </h2>
              <p className="text-xl text-muted-foreground">Why Choose Us?</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseReasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3 p-6 bg-background rounded-lg border border-border">
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
        serviceName="Email Campaigns" 
        faqs={[]} 
      />

      {/* Final CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to Launch Your Email Campaigns?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start creating high-converting email campaigns that drive engagement and sales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Start Your Campaign</Link>
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

export default EmailCampaigns;