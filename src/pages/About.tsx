import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import ProcessFlow from '@/components/ProcessFlow';
import ReasonsGrid from '@/components/ReasonsGrid';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Users, 
  ArrowRight,
  Award,
  Globe,
  TrendingUp,
  Shield
} from 'lucide-react';

const About: React.FC = () => {
  const leadership = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "",
      description: "15+ years in B2B data solutions"
    },
    {
      name: "Sarah Johnson", 
      role: "VP of Data Operations",
      image: "",
      description: "Expert in data quality and compliance"
    },
    {
      name: "Michael Chen",
      role: "Head of Digital Marketing",
      image: "",
      description: "Specializes in performance marketing"
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success Director", 
      image: "",
      description: "Focused on client satisfaction and growth"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero 
        title="Empowering Businesses Through Data-Driven Growth Solutions"
        subtitle="Your trusted partner for comprehensive B2B data solutions, digital marketing services, and lead generation strategies that drive measurable results."
        primaryCTA={{
          text: "PARTNER WITH US",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Work",
          href: "/resources/case-study"
        }}
      />

      {/* Company Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
              Global Datasys Group – Your Success Catalyst
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Founded with a vision to transform how businesses connect with their ideal customers, 
              Global Datasys Group has evolved into a leading provider of B2B data solutions and 
              digital marketing services. We combine cutting-edge technology with human expertise 
              to deliver data-driven growth strategies that work.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our commitment to quality, compliance, and customer success has made us the preferred 
              partner for over 1,000 businesses worldwide, from startups to Fortune 500 companies.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Our Vision */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <Eye className="w-8 h-8 text-hero-text" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-poppins">
                Our Vision
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                To be the global leader in B2B data solutions, empowering every business 
                with the insights and connections they need to thrive in an increasingly 
                competitive marketplace.
              </p>
              <ul className="text-foreground/70 space-y-2 text-left">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Democratize access to high-quality business data</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Enable smarter business decisions through data intelligence</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Foster meaningful business connections worldwide</span>
                </li>
              </ul>
            </div>

            {/* Our Mission */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <Target className="w-8 h-8 text-hero-text" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-poppins">
                Our Mission
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                To deliver exceptional B2B data solutions and digital marketing services 
                that help businesses identify, connect with, and convert their ideal 
                prospects into long-term customers.
              </p>
              <ul className="text-foreground/70 space-y-2 text-left">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Provide 99%+ accurate, verified business data</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Ensure full compliance with global data regulations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Deliver measurable ROI for every client investment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
              Our Leadership Team
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Meet the experienced professionals who lead Global Datasys Group with vision, 
              expertise, and an unwavering commitment to client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="card-elevated p-6 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-hero-text font-bold text-2xl">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 font-poppins">
                  {leader.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {leader.role}
                </p>
                <p className="text-foreground/70 text-sm">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessFlow 
        title="Our Process"
        subtitle="How we work with you to deliver exceptional results through our proven methodology."
      />

      {/* Why Choose Us */}
      <ReasonsGrid 
        title="Why Choose Us?"
        subtitle="Discover what sets Global Datasys Group apart in the competitive world of B2B data and digital marketing."
      />

      {/* Company Stats */}
      <section className="section-dark py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark-foreground mb-4 font-poppins">
              Our Impact in Numbers
            </h2>
            <p className="text-secondary-dark-foreground/80 max-w-2xl mx-auto">
              Real results that demonstrate our commitment to client success and industry leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-hero-text/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-hero-text" />
              </div>
              <div className="text-4xl font-bold text-hero-text mb-2">1000+</div>
              <div className="text-secondary-dark-foreground/80">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hero-text/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-hero-text" />
              </div>
              <div className="text-4xl font-bold text-hero-text mb-2">50M+</div>
              <div className="text-secondary-dark-foreground/80">Quality Leads Delivered</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hero-text/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-hero-text" />
              </div>
              <div className="text-4xl font-bold text-hero-text mb-2">300%</div>
              <div className="text-secondary-dark-foreground/80">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hero-text/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-hero-text" />
              </div>
              <div className="text-4xl font-bold text-hero-text mb-2">5+</div>
              <div className="text-secondary-dark-foreground/80">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel 
        title="What Our Clients Say About Us"
        subtitle="Read success stories from businesses that have transformed their growth with our data solutions."
      />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;