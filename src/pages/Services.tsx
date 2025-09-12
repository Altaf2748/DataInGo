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

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "B2B Email Lists",
      description: "Comprehensive databases of verified business contacts across industries and job functions.",
      icon: Mail,
      href: "/services/b2b-email-list",
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
                    <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-hero-text">
                      <div className="text-center">
                        <IconComponent className="w-24 h-24 mx-auto mb-6 opacity-80" />
                        <h4 className="text-xl font-semibold mb-4">
                          Why Choose Our {category.title}?
                        </h4>
                        <div className="grid grid-cols-1 gap-4 text-sm">
                          <div className="flex items-center justify-center space-x-2">
                            <Users className="w-4 h-4" />
                            <span>2000+ Happy Clients</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <TrendingUp className="w-4 h-4" />
                            <span>300% Average ROI Increase</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="w-4 h-4" />
                            <span>98%+ Data Accuracy</span>
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
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-hero-text" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
                Proven Results
              </h3>
              <p className="text-foreground/70">
                Over 1,000 successful projects with measurable ROI improvements 
                and satisfied clients across industries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-hero-text" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
                Expert Team
              </h3>
              <p className="text-foreground/70">
                Experienced professionals with deep knowledge in data science, 
                marketing, and customer success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-hero-text" />
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
      <section className="section-dark py-16 md:py-24">
        <div className="container-custom text-center">
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
              Call +1 307 683 8467
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