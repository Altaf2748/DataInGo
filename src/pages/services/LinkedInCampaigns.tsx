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
import linkedinCampaignsHeroImage from '@/assets/services-linkedin-campaigns-hero.jpg';
import globalNetworkingImage from '@/assets/services-global-networking.jpg';

const LinkedInCampaigns: React.FC = () => {
  const contentBlocks = [
    {
      title: "Generate More Quality Leads with Powerful LinkedIn Campaigns",
      content: "LinkedIn, the world's largest professional network, is an ideal platform for businesses to connect with high-value prospects. Whether you're aiming to generate leads, boost brand visibility, or drive traffic to your website, LinkedIn campaigns offer unmatched targeting capabilities to help you engage decision-makers and industry professionals. With LinkedIn Ads, you can precisely target users based on job title, industry, company size, location, and even specific skills. This tailored approach ensures that your ads reach the right audience, resulting in higher engagement and better conversion rates. Choose from a variety of ad formats such as Sponsored Content, Message Ads (InMail), Lead Gen Forms, Video Ads, and Dynamic Ads. Each format is designed to help you achieve specific objectives, allowing for a customized approach that aligns with your business goals. One of the standout benefits of LinkedIn campaigns is their ability to generate high-quality B2B leads. Unlike other social platforms, LinkedIn users engage in a professional context, meaning they are more likely to act on relevant offers, making it an ideal platform for lead generation and business growth.",
      imagePosition: 'left' as const,
      image: globalNetworkingImage
    },
    {
      title: "Increase Focused Engagement with LinkedIn Campaigns",
      content: "LinkedIn offers an unparalleled opportunity to connect with professionals seeking solutions for their business challenges. With advanced targeting options based on job titles, companies, industries, and skills, you can ensure your campaigns reach the right audience. Whether you're focused on lead generation, boosting brand awareness, or driving traffic to your site, LinkedIn allows you to tailor your strategy for maximum impact and improved ROI.",
      imagePosition: 'right' as const,
      image: globalNetworkingImage
    },
    {
      title: "Boost Focused Engagement with LinkedIn Advertising Campaigns",
      content: "LinkedIn's professional setting fosters valuable interactions that generate high-quality B2B leads. With its combination of business-oriented content and engaged decision-makers, your ads are more likely to attract serious prospects. By leveraging LinkedIn's various ad formats, like Lead Gen Forms or Sponsored Content, you can craft customized campaigns that nurture connections and boost conversion rates. Whether your goal is to grow your network, forge partnerships, or drive sales, LinkedIn's targeted approach helps you reach your business objectives effectively.",
      imagePosition: 'left' as const,
      image: globalNetworkingImage
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
    "Profile Optimization",
    "Prospect Research & Targeting",
    "Personalized Outreach",
    "Follow-up Sequences",
    "Sponsored InMail Campaigns",
    "Performance Analytics"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'LinkedIn Campaigns', href: '/services/digital-marketing/linkedin-campaigns' }
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
        title="LinkedIn Campaign Services"
        subtitle="Amplify Your Business Growth with LinkedIn Campaigns | Precision-Targeted B2B Advertising. Generate quality B2B leads with strategic LinkedIn outreach and campaigns"
        primaryCTA={{
          text: "Enquire Now",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "#features"
        }}
        backgroundImage={linkedinCampaignsHeroImage}
      />

      {/* Service Introduction */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Launch impactful LinkedIn campaigns to connect with key decision-makers and industry professionals. Utilize advanced targeting, data-driven insights, and clear metrics to drive brand growth. Begin your LinkedIn advertising journey now!
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
                Our LinkedIn Campaign Features
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
        serviceName="LinkedIn Campaigns" 
        faqs={[]} 
      />

      {/* Final CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to Launch Your LinkedIn Campaigns?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start connecting with decision-makers and generating quality B2B leads on LinkedIn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Start Your LinkedIn Campaign</Link>
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

export default LinkedInCampaigns;