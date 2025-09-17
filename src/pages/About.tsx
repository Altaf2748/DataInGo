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

// Team member images
import johnKennedyImg from '@/assets/team-john-kennedy.jpg';
import mikeSolomonImg from '@/assets/team-mike-solomon.jpg';
import miaMillerImg from '@/assets/team-mia-miller.jpg';
import patWadeImg from '@/assets/team-pat-wade.jpg';
import gopalKumarImg from '@/assets/team-gopal-kumar.jpg';
import mohammadAyanImg from '@/assets/team-mohammad-ayan.jpg';
import ishaEdwardsImg from '@/assets/team-isha-edwards.jpg';

// Section images
import teamCollaborationImg from '@/assets/about-team-collaboration.jpg';
import dataCenterImg from '@/assets/about-data-center.jpg';
import officeWorkspaceImg from '@/assets/about-office-workspace.jpg';
import clientMeetingImg from '@/assets/about-client-meeting.jpg';
import companyCultureImg from '@/assets/about-company-culture.jpg';

const About: React.FC = () => {
  const leadership = [
    {
      name: "John Kennedy",
      role: "CEO",
      image: johnKennedyImg,
      description: "15+ years in B2B data solutions"
    },
    {
      name: "Mike Solomon", 
      role: "VP of Sales",
      image: mikeSolomonImg,
      description: "Expert in Sales and compliance"
    },
    {
      name: "Mia Miller", 
      role: "VP of Data Operations",
      image: miaMillerImg,
      description: "Expert in data quality and compliance"
    },
    {
      name: "Pat Wade",
      role: "Head of Digital Marketing",
      image: patWadeImg,
      description: "Specializes in performance marketing"
    },
    {
      name: "Gopal Kumar", 
      role: "Sr. Director of Business Development",
      image: gopalKumarImg,
      description: "Expert in Business Growth Strategies"
    },
    {
      name: "Mohammad Ayan", 
      role: "Director of Business Development",
      image: mohammadAyanImg,
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
      image: ishaEdwardsImg,
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
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={teamCollaborationImg} alt="Team collaboration" className="w-full h-full object-cover" />
        </div>
        <div className="container-custom relative z-10">
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
      <section className="py-16 md:py-24 bg-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={dataCenterImg} alt="Data center technology" className="w-full h-full object-cover" />
        </div>
        <div className="container-custom relative z-10">
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

      {/* Office Workspace Image */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="relative h-96 rounded-2xl overflow-hidden mb-16">
            <img src={officeWorkspaceImg} alt="Modern office workspace" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
              <div className="container-custom">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Where Innovation Meets Excellence
                </h3>
                <p className="text-xl text-white/90 max-w-2xl">
                  Our state-of-the-art facilities foster collaboration and drive results for our clients worldwide.
                </p>
              </div>
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
                {leader.image ? (
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-hero-text font-bold text-2xl">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
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

      {/* Client Meeting Image */}
      <section className="py-16 bg-accent/10">
        <div className="container-custom">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img src={clientMeetingImg} alt="Client meeting and collaboration" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-secondary/80 to-transparent flex items-center justify-end">
              <div className="max-w-md text-right p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Client-Centric Approach
                </h3>
                <p className="text-xl text-white/90">
                  Every solution is tailored to meet your unique business goals and objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section-dark py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={companyCultureImg} alt="Company culture" className="w-full h-full object-cover" />
        </div>
        <div className="container-custom relative z-10">
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