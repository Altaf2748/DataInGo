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
      name: "John Kennedy",
      role: "CEO",
      image: "",
      description: "15+ years in B2B data solutions"
    },
    {
      name: "Mike Solomon", 
      role: "VP of Sales",
      image: "",
      description: "Expert in Sales and compliance"
    },
    {
      name: "Mia Miller", 
      role: "VP of Data Operations",
      image: "",
      description: "Expert in data quality and compliance"
    },
    {
      name: "Pat Wade",
      role: "Head of Digital Marketing",
      image: "",
      description: "Specializes in performance marketing"
    },
        {
      name: "Gopal Kumar", 
      role: "Sr. Director of Business Development",
      image: "",
      description: "Expert in Business Growth Strategies"
    },
    {
      name: "Mohammad Ayan", 
      role: "Director of Business Development",
      image: "",
      description: "Expert in solving Client demands"
    },
    {
      name: "Daniel Brown", 
      role: "Sr. Sales Manager",
      image: "",
      description: "Expert in B2B Sales and Marketing"
    },
    {
      name: "Mark Harris", 
      role: "Sales Manager",
      image: "",
      description: "Expert in Client Relationship Management"
    },
    {
      name: "Mohammad Zayan", 
      role: "Manager - HR and Customer Service",
      image: "",
      description: "Expert in Talent Acquisition and Customer Relations"
    },
    {
      name: "Isha Edwards",
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
              DataInGo Solutions – A Strategic Partner in Your Success
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8 text-left">
              At DataInGo Solutions, we specialize in delivering end-to-end data solutions and strategic digital marketing services that drive business growth. Our expertise spans across various industries including healthcare, IT, and retail where we partner with clients to craft tailored lead generation and business development strategies.</p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8 text-left">
              Our key strength lies in providing accurate, up-to-date contact data for decision-makers across global markets. In addition to our customized contact lists, we offer targeted digital marketing campaigns designed to amplify your outreach, boost engagement, and deliver measurable results.</p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8 text-left">
              With a strong focus on data precision and client satisfaction, we empower businesses to strengthen their market presence, generate high-quality leads, and meet their sales and marketing goals with confidence.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              <strong>Our commitment to quality, compliance, and customer success has made us the preferred
              partner for over 2,000 businesses worldwide, from startups to Fortune 500 companies.</strong>
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
              <p className="text-foreground/70 leading-relaxed mb-6 text-left">
                At DataInGo Solutions, we strive to lead the way in data-driven digital marketing and precision-based solutions. Our approach is rooted in innovation, continuous enhancement, and a strong commitment to ethical data practices. We empower our clients with strategic tools, actionable insights, and cutting-edge solutions to succeed in today’s fast-changing digital landscape.
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
                At DataInGo Solutions, our core mission is to serve as a strategic partner in achieving your marketing goals by connecting you with the right audience. We provide clients with access to high-quality, reliable data and dedicated customer support. Our commitment is to be your trusted resource for data-driven insights and impactful marketing strategies that drive measurable and sustainable results.
              </p>
              <ul className="text-foreground/70 space-y-2 text-left">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>Provide 98%+ accurate, verified business data</span>
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
              Meet the experienced professionals who lead DataInGo Solutions with vision, 
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
        subtitle="Discover what sets DataInGo Solutions apart in the competitive world of B2B data and digital marketing."
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
              <div className="text-4xl font-bold text-hero-text mb-2">2000+</div>
              <div className="text-secondary-dark-foreground/80">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hero-text/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-hero-text" />
              </div>
              <div className="text-4xl font-bold text-hero-text mb-2">80M+</div>
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