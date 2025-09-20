import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { CheckCircle } from 'lucide-react';

const ContentWritingServices: React.FC = () => {
  const features = [
    "Blog Writing & SEO",
    "Whitepaper Creation",
    "Case Study Development", 
    "Landing Page Copy",
    "Email Marketing Content",
    "Social Media Content"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Content Writing Services', href: '/services/digital-marketing/content-writing-services' }
  ];

  const digitalServices = [
    { number: "01", title: "Targeted Email Campaigns", description: "Deliver personalized emails that resonate with the right audience and drive meaningful actions." },
    { number: "02", title: "LinkedIn Lead Generation", description: "Leverage LinkedIn to connect with industry professionals, expand your network, and generate quality leads." },
    { number: "03", title: "Event Promotion & Marketing", description: "Drive engagement and capture leads through memorable and impactful events." },
    { number: "04", title: "Engaging Content Creation", description: "Craft compelling, clear content that engages your audience and increases interaction." },
    { number: "05", title: "Social Media Graphics & Video Production", description: "Design eye-catching posts and videos to elevate your social media presence." },
    { number: "06", title: "LinkedIn Profile Optimization", description: "Enhance your LinkedIn profile to attract more business opportunities and connections." },
    { number: "07", title: "SEO (Search Engine Optimization)", description: "Improve your online visibility with effective SEO strategies that drive organic traffic." },
    { number: "08", title: "Custom Website Design & Development", description: "Build a seamless, user-friendly website that reflects your brand and helps you stand out in the digital space." }
  ];

  const processSteps = [
    { title: "Client Requirements", description: "We take the time to understand your needs and curate the most relevant databases for your business." },
    { title: "Data Compilation", description: "We build customized databases aligned with your specific requirements and industry benchmarks." },
    { title: "Data Verification", description: "We meticulously verify all data to ensure its accuracy and dependability." },
    { title: "Delivery and Support", description: "We deliver your tailored databases within 2-5 business days and offer continuous support." }
  ];

  const whyChooseUs = [
    { title: "Accuracy", description: "Ensuring accuracy at every stage of the process." },
    { title: "Boosted ROI", description: "Drive higher returns with our targeted data solutions." },
    { title: "Customization", description: "Customize everything to align with your brand's specific needs." },
    { title: "On-Time Delivery", description: "Get your data within 2-5 business days, promptly and efficiently." },
    { title: "Legitimate Data", description: "Fully aligned with GDPR, CAN-SPAM, and Anti-Spam regulations." },
    { title: "Effective Communication", description: "Reach out via phone, email, LinkedIn, and more—no spamming involved." },
    { title: "Cost-effective", description: "Premium data services without the hefty price tag." },
    { title: "CRM-Ready", description: "Seamlessly integrate our data with your CRM for smooth operations." }
  ];

  const contentServices = [
    { title: "Website Content Writing Service", description: "Craft persuasive and engaging website copy that captures attention and converts visitors into loyal clients." },
    { title: "SEO Blog & Article Writing", description: "Boost organic traffic with informative, keyword-optimized content that speaks to your industry and audience." },
    { title: "Social Media Content", description: "Enhance engagement with creative and compelling posts that align with your brand's unique voice." },
    { title: "Copywriting & Branding Content", description: "Build a strong brand presence with powerful, audience-centric messaging that resonates and drives action." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="pt-32 pb-8 bg-muted/50">
        <div className="container-custom">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={item.href} className="text-muted-foreground hover:text-foreground">
                      {item.name}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-text mb-6 font-poppins">
              Content Writing Services
            </h1>
            <p className="text-xl text-hero-text/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Create compelling, SEO-optimized content that drives engagement and results
            </p>
            <p className="text-lg text-hero-text/80 max-w-4xl mx-auto leading-relaxed">
              Elevate your brand with professional content writing services that engage audiences and drive conversions. Our expert writers create blogs, whitepapers, case studies, and marketing copy optimized for search engines and designed to generate leads.
            </p>
          </div>
        </div>
      </section>

      {/* Cost-effective Content Writing Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              Cost-effective content writing services in the USA designed to boost engagement and enhance your brand presence.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At DataInGo Solutions, we provide premium content writing services in the USA that captivate your audience and elevate your digital presence. Our expert writers produce SEO-optimized, engaging content that drives higher search rankings and attracts your target audience. From blog posts to website copy, we craft content that not only boosts your SEO but also establishes your brand's authority, inspiring action and building trust with your customers. Let us help you tell your story in a way that resonates and converts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contentServices.map((service, index) => (
              <div key={index} className="card-elevated p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 font-poppins">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our content creation service delivers top-notch, tailored content that resonates with your audience and enhances your search engine visibility. From compelling website copy to SEO-focused blog posts, DataInGo Solutions guarantees content that is both professional and effective in driving results.
            </p>
          </div>
        </div>
      </section>

      {/* All-Inclusive Content Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
                All-Inclusive Content Services Tailored to Your Business Goals
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At DataInGo Solutions, we provide a wide array of content creation services tailored to align with your business goals. Whether it's crafting persuasive website copy that turns visitors into customers, writing SEO-optimized blog posts that boost organic traffic, or creating engaging social media content that connects with your audience, we offer comprehensive solutions. Our expert team also excels in brand-focused copywriting to strengthen your identity. No matter where you are in your content journey, we're here to help you build or enhance your online presence for lasting success.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
                Drive Engagement, Boost Rankings, and Convert Visitors with Premium Content
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At DataInGo Solutions, we take a strategic approach to content creation that ensures your brand cuts through the noise in the digital world. By leveraging in-depth industry research and a customer-first mindset, we create content that's not only optimized for SEO but also crafted to drive engagement and conversions. Our team partners with you to understand your business objectives and delivers tailored content that resonates with your target audience, boosting both visibility and customer loyalty. From impactful website copy to engaging social media posts, our content services are designed to generate real, measurable results and support your business's long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Services Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              We Can Drive Rapid Growth for Your Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customer-Centric Digital Marketing Services Tailored to Your Business Needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {digitalServices.map((service, index) => (
              <div key={index} className="card-elevated p-6 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-hero-text font-bold">{service.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 font-poppins">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              How We Work?
            </h2>
            <p className="text-xl text-muted-foreground">
              Our Process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-hero-text font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 font-poppins">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              Top-Rated Database Solutions Provider in the USA and Worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              Why Choose Us?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card-elevated p-6 text-center">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3 font-poppins">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              Key Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 card-elevated">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentWritingServices;