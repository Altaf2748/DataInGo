import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TilesGrid from '@/components/TilesGrid';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  Mail,
  Database,
  Megaphone,
  Search,
  Globe,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp
} from 'lucide-react';
import servicesDataAnalytics from '@/assets/services-data-analytics.jpg';
import servicesDigitalMarketing from '@/assets/services-digital-marketing.jpg';
import servicesWebDevelopment from '@/assets/services-web-development.jpg';
import servicesSEO from '@/assets/services-seo.jpg';
import homeBusinessGrowth from '@/assets/home-business-growth.jpg';
import homeDataAnalytics from '@/assets/home-data-analytics.jpg';
import homeDigitalMarketingHub from '@/assets/home-digital-marketing-hub.jpg';
import homeTechnologyInnovation from '@/assets/home-technology-innovation.jpg';
import homeEmailMarketing from '@/assets/home-email-marketing.jpg';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "B2B Email Lists",
      description: "Comprehensive databases of verified business contacts across industries and job functions.",
      icon: Mail,
      href: "/services/b2b-email-list",
      image: servicesDataAnalytics,
      features: ["98%+ Accuracy Rate", "GDPR Compliant", "Real-time Verification", "Custom Segmentation"],
      subServices: [
        "Technology Email Lists",
        "Healthcare Email Lists", 
        "Professionals Email List",
        "Industry-Specific Email Lists",
        "B2B Sales Email Lists",
        "Custom Mail List"
      ]
    },
    {
      title: "Data Enrichment",
      description: "Transform your existing data into valuable business assets with our enrichment services.",
      icon: Database,
      href: "/services/data-enrichment",
      image: servicesDataAnalytics,
      features: ["Data Validation", "Missing Field Population", "Quality Scoring", "Duplicate Removal"],
      subServices: [
        "Email Append",
        "Data Append",
        "Data Verification",
        "Data Profiling",
        "Data Intelligence",
        "Data Cleansing"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing services to maximize your reach and engagement.",
      icon: Megaphone,
      href: "/services/digital-marketing",
      image: servicesDigitalMarketing,
      features: ["Multi-channel Campaigns", "Performance Tracking", "A/B Testing", "ROI Optimization"],
      subServices: [
        "Email Campaigns",
        "LinkedIn Campaigns",
        "Event Marketing",
        "Content Writing Services",
        "Social Media Management",
        "LinkedIn Account Management"
      ]
    },
    {
      title: "SEO Services",
      description: "Improve your search engine visibility and drive organic traffic to your website.",
      icon: Search,
      href: "/services/seo",
      image: servicesSEO,
      features: ["Keyword Research", "Technical Audits", "Content Optimization", "Link Building"],
      subServices: [
        "On-Page SEO",
        "Technical SEO",
        "Local SEO",
        "Content Marketing",
        "Link Building",
        "SEO Audits"
      ]
    },
    {
      title: "Website Design & Development",
      description: "Modern, responsive websites that convert visitors into customers.",
      icon: Globe,
      href: "/services/website-design-development",
      image: servicesWebDevelopment,
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "User-Focused"],
      subServices: [
        "Custom Website Design",
        "E-commerce Development",
        "Landing Page Design",
        "Website Maintenance",
        "Performance Optimization",
        "Mobile App Development"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={homeTechnologyInnovation}
            alt="Technology and innovation background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10">
          <Hero 
            title="Powering Your Outreach with Verified Audience Email Lists"
            subtitle="Discover comprehensive data solutions and digital marketing services designed to connect your business with the right prospects at the right time."
            primaryCTA={{
              text: "CONTACT US NOW",
              href: "/contact"
            }}
            secondaryCTA={{
              text: "View Our Work",
              href: "/resources/case-study"
            }}
          />
        </div>
      </div>
      {/* Our Services */}
      <section className="relative py-16 md:py-24 bg-accent/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={homeDataAnalytics}
            alt="Data analytics background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
              Our Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-left">
              In today's increasingly data-driven world, DataInGo Solutions empowers businesses to overcome challenges, seize growth opportunities, and achieve lasting success. Our mission is to be a global leader in data-driven marketing solutions, providing unmatched accuracy, innovative strategies, and exceptional customer support. By leveraging cutting-edge technology and deep industry expertise, we help organizations navigate change, optimize performance, and make informed decisions that drive sustainable growth. In the dynamic landscape of digital marketing, our commitment to excellence sets the standard for delivering meaningful, measurable results.
            </p>
            <br></br>
            <strong><p className="text-lg text-foreground/90 max-w-9xl mx-auto text-center font-bold">Unlocking Business Potential through Data-Driven Strategies</p></strong>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-left">At <strong>DataInGo Solutions</strong>, we harness the power of data to help businesses reach their full potential. Our approach focuses on delivering customized, data-driven marketing strategies that not only tackle challenges but also deliver tangible, measurable results. By combining advanced technology with industry expertise, we empower our clients to gain valuable insights, boost customer engagement, and refine their digital marketing efforts. With a commitment to innovation and precision, we tailor every strategy to align with the specific goals of each business, ensuring impactful results when they matter most.</p>
            <br></br>
            <strong><p className="text-lg text-foreground/90 max-w-9xl mx-auto text-center font-bold">Achieving Sustainable Success in the Digital Age</p></strong>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-left">In today's ever-evolving digital landscape, adaptability is key. DataInGo Solutions supports businesses through constant change, equipping them with the tools they need to stay ahead of the curve. Our commitment to excellence ensures that businesses are not only able to respond to market shifts but also anticipate them. We empower our clients to make informed decisions that foster growth, profitability, and lasting success. With our data solutions, businesses can confidently navigate the complexities of digital marketing and achieve their long-term objectives in a rapidly transforming world.</p>
          </div>
        </div>
      </section>





      
      {/* Quick Service Tiles */}
      <TilesGrid 
        title="Choose Your Data Solution"
        subtitle="Select from our comprehensive range of verified data and marketing services."
      />

      {/* Detailed Service Categories */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
              Our Complete Service Portfolio
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              From data acquisition to digital marketing execution, we provide end-to-end solutions 
              that drive measurable business growth.
            </p>
          </div>

          <div className="space-y-12">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              const isReversed = index % 2 === 1;
              
              return (
                <div 
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={isReversed ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-hero-text" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground font-poppins">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Sub-services */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-foreground mb-3">Available Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.subServices.map((service, serviceIndex) => (
                          <span 
                            key={serviceIndex}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        to={category.href}
                        className="btn-primary inline-flex items-center space-x-2"
                      >
                        <span>Explore {category.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link 
                        to="/contact"
                        className="btn-outline inline-flex items-center space-x-2"
                      >
                        <span>Get Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                      <img 
                        src={category.image}
                        alt={`${category.title} services visualization`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-semibold">
                              {category.title}
                            </h4>
                          </div>
                          <div className="grid grid-cols-1 gap-2 text-sm">
                            <div className="flex items-center space-x-2">
                              <Users className="w-4 h-4" />
                              <span>2000+ Happy Clients</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <TrendingUp className="w-4 h-4" />
                              <span>300% Average ROI Increase</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4" />
                              <span>98%+ Data Accuracy</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              Why Businesses Choose Our Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              We combine industry expertise, cutting-edge technology, and personalized service 
              to deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative text-center group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={homeBusinessGrowth}
                  alt="Proven results and business growth"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-hero-text" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
                Proven Results
              </h3>
              <p className="text-foreground/70">
                Over 2,000 successful projects with measurable ROI improvements 
                and satisfied clients across industries.
              </p>
            </div>

            <div className="relative text-center group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={homeDigitalMarketingHub}
                  alt="Expert team and digital marketing expertise"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-hero-text" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
                Expert Team
              </h3>
              <p className="text-foreground/70">
                Experienced professionals with deep knowledge in data science, 
                marketing, and customer success.
              </p>
            </div>

            <div className="relative text-center group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={homeTechnologyInnovation}
                  alt="Scalable solutions and technology innovation"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-hero-text" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
                Scalable Solutions
              </h3>
              <p className="text-foreground/70">
                Whether you're a startup or enterprise, our services scale 
                to meet your growing business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-dark py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={homeEmailMarketing}
            alt="Email marketing and business transformation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark-foreground mb-6 font-poppins">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-secondary-dark-foreground/80 mb-8 max-w-2xl mx-auto">
            Let our experts analyze your needs and recommend the perfect data and marketing 
            solution for your business goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-hero">
              Get Free Consultation
            </Link>
            <a 
              href="tel:+13076838467"
              className="border-2 border-hero-text text-hero-text font-medium px-8 py-4 rounded-lg hover:bg-hero-text hover:text-secondary-dark transition-all duration-300"
            >
              Call //+1 307 683 8467
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;