import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { CheckCircle } from 'lucide-react';

const EventMarketing: React.FC = () => {
  const features = [
    "Event Strategy Development",
    "Multi-Channel Promotion", 
    "Registration Optimization",
    "Lead Capture Systems",
    "Attendee Engagement",
    "Post-Event Follow-up"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Event Marketing', href: '/services/digital-marketing/event-marketing' }
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
              Event Marketing Services
            </h1>
            <p className="text-xl text-hero-text/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Drive event success with comprehensive marketing and lead generation strategies
            </p>
            <p className="text-lg text-hero-text/80 max-w-4xl mx-auto leading-relaxed">
              Boost your event attendance and ROI with our comprehensive event marketing services. We handle promotion, lead capture, and follow-up to ensure your events generate maximum business value and qualified leads.
            </p>
          </div>
        </div>
      </section>

      {/* Reach the Ideal Audience Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              Reach the Ideal Audience with Precision Using DataInGo Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At DataInGo Solutions, we offer data-driven marketing strategies designed to enhance your event success. Whether you're preparing for a tradeshow or looking to extend your reach post-event, we help you connect with the right audience and build valuable business relationships.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              By providing high-quality, targeted business contact data, we enable exhibitors to strengthen both pre-show and post-show marketing, secure key meetings, and foster industry connections. Even if you can't attend, we ensure your company engages with decision-makers and uncovers new prospects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our tailored solutions increase brand visibility, expand networks, and accelerate business growth, all while maximizing your marketing investment.
            </p>
          </div>
        </div>
      </section>

      {/* Amplify Your Event Success Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
                Amplify Your Event Success with Precision Marketing Strategies
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At DataInGo Solutions, we know that meaningful connections are key to event success. Our data-driven marketing solutions help your business connect with the right audience—whether you're gearing up for an upcoming tradeshow or following up with attendees after the event. By delivering precise, industry-specific contact data, we help you target decision-makers, schedule valuable meetings, and foster long-term relationships, even if you can't attend in person. With our expertise, your event marketing efforts will exceed expectations and drive sustained business growth.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
                Increase Your Reach and Unlock Networking Potential
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our all-encompassing event marketing solutions are designed to boost brand visibility and foster genuine engagement with your ideal audience. Through targeted outreach and strategic planning, we ensure that your message reaches key industry leaders, helping you grow your network and forge valuable business relationships. By optimizing your marketing efforts before, during, and after the event, we ensure that every opportunity is leveraged for maximum growth, delivering impressive ROI. With DataInGo Solutions, your event marketing initiatives will be more streamlined, impactful, and result-driven, propelling your business toward success.
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

export default EventMarketing;