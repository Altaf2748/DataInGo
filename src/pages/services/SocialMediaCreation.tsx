import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { CheckCircle } from 'lucide-react';

const SocialMediaCreation: React.FC = () => {
  const features = [
    "Social Media Posters",
    "Video Content Creation",
    "Motion Graphics Design",
    "Infographic Development", 
    "Content Calendar Planning",
    "Brand Guidelines"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Social Media Creation', href: '/services/digital-marketing/social-media-creation' }
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
              Social Media Content Creation
            </h1>
            <p className="text-xl text-hero-text/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Create professional visual content and videos that drive social media engagement
            </p>
            <p className="text-lg text-hero-text/80 max-w-4xl mx-auto leading-relaxed">
              Enhance your social media presence with professional content creation services. We design engaging posters, create compelling videos, and develop visual content that captures attention and drives engagement across all social platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Boost Engagement Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              Boost engagement with compelling and impactful content
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              DataInGo Solutions is a premier digital agency specializing in creating impactful social media posters and videos that captivate audiences. Our team of creative experts crafts visually stunning graphics and dynamic video content tailored to enhance your brand's presence across social media platforms. Whether you're aiming to boost engagement, drive conversions, or leave a memorable impression, we provide high-quality content that resonates with your audience and amplifies your digital marketing efforts.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In today's digital landscape, we understand the power of visuals in grabbing attention and conveying a brand's message. Our approach combines creativity with strategy to create designs and videos that are not only eye-catching but also strategically aligned with your brand's goals. We focus on creating content that speaks directly to your audience, ensuring your social media efforts stand out and make an impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a budding startup or an established enterprise, we tailor our services to meet your specific needs. From creating attention-grabbing posters to producing engaging videos, we help you connect with your audience and build a stronger online presence. Let us help you elevate your social media strategy and take your digital marketing to new heights.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Impact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
                Boost Your Brand's Impact with Tailored Social Media Content
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At DataInGo Solutions, we recognize the impact of visual storytelling in social media marketing. Our expert team crafts captivating posters and dynamic videos designed to grab attention and effectively convey your brand's message. Whether your goal is to increase engagement, promote a product, or enhance brand awareness, we provide tailored, high-quality content that resonates with your target audience. By combining creativity with strategic insight, we ensure each piece of content is aligned with your brand's objectives, helping you achieve measurable success in your digital marketing campaigns.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
                Boost Engagement and Conversions Through Impactful Visuals
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In the fast-moving digital landscape, your social media content must make an impact. At DataInGo Solutions, we create eye-catching posters and videos that grab attention and inspire your audience to act. From initial idea to final product, our team develops visually compelling content that tells your brand's story, fosters loyalty, and boosts conversions. Whether your goal is to raise brand awareness or drive leads, our expertly crafted content will strengthen your social media presence, keeping your brand memorable and your audience actively engaged.
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

export default SocialMediaCreation;