import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { CheckCircle } from 'lucide-react';

const LinkedInAccountManagement: React.FC = () => {
  const features = [
    "Profile Optimization",
    "Content Creation & Posting",
    "Network Management",
    "Engagement Strategy", 
    "Lead Nurturing",
    "Performance Analytics"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'LinkedIn Account Management', href: '/services/digital-marketing/linkedin-account-management' }
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
              LinkedIn Account Management
            </h1>
            <p className="text-xl text-hero-text/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Professional LinkedIn management for thought leadership and lead generation
            </p>
            <p className="text-lg text-hero-text/80 max-w-4xl mx-auto leading-relaxed">
              Build your professional brand and generate leads with comprehensive LinkedIn account management. We handle profile optimization, content creation, network building, and engagement to establish your authority and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Unleash Your Business's Full Potential Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              Unleash Your Business's Full Potential
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We are a passionate team of LinkedIn specialists dedicated to helping professionals and businesses succeed on the platform. From crafting compelling profiles and producing engaging content to strategically growing your network, we maximize your reach and influence. Using a data-driven approach, we deliver measurable results that drive lead generation and enhance brand visibility. Let us manage your LinkedIn presence so you can focus on what matters most.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our all-inclusive LinkedIn management services cover everything from profile optimization and content creation to targeted outreach and detailed performance tracking. We customize our strategies to align with your goals, whether that's generating leads or building your brand. Staying ahead of the latest LinkedIn trends, we ensure your presence remains powerful and effective. Partner with us to unlock LinkedIn's full potential and achieve your professional ambitions.
            </p>
          </div>
        </div>
      </section>

      {/* Unlock Possibilities Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
                Unlock Possibilities with Professional Management
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At DataInGo Solutions, we excel in optimizing LinkedIn profiles to help businesses and professionals differentiate themselves in today's competitive digital environment. Our team of LinkedIn specialists creates impactful profiles and crafts engaging content that connects with your target audience. By strategically expanding your network and customizing outreach efforts, we maximize your brand's visibility and credibility. Leveraging a data-driven approach, we prioritize lead generation, foster meaningful professional connections, and elevate your brand's presence on the world's largest professional platform.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
                Customized LinkedIn Strategies Designed for Tangible Results
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our LinkedIn management services offer more than just profile optimization—we develop customized strategies tailored to your specific goals, whether that's generating high-quality leads or boosting brand visibility. From crafting engaging content and executing targeted outreach to providing detailed performance reports, we manage every facet of your LinkedIn presence with expertise. By keeping pace with the latest platform trends and best practices, we ensure your LinkedIn strategy adapts to the evolving landscape, delivering measurable results and accelerating your path to professional success. Let us handle your LinkedIn strategy so you can concentrate on growing your business.
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

export default LinkedInAccountManagement;