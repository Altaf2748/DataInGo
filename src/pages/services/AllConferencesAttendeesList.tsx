// All Conferences Attendees List service page
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AllConferencesForm from '@/components/AllConferencesForm';
import conferenceAttendeesImage from '@/assets/services-conference-attendees.jpg';
import globalNetworkingImage from '@/assets/services-global-networking.jpg';
import CategoryGrid from '@/components/CategoryGrid';
import EventTilesGrid from '@/components/EventTilesGrid';
import FAQAccordion from '@/components/FAQAccordion';
import ProcessFlow from '@/components/ProcessFlow';
import ReasonsGrid from '@/components/ReasonsGrid';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Globe, 
  Database,
  Shield,
  TrendingUp,
  Clock
} from 'lucide-react';

const AllConferencesAttendeesList: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'All Conferences Attendees List', href: '/services/all-conferences-attendees-list' }
  ];

  const whyChooseFeatures = [
    {
      icon: Database,
      title: "Comprehensive Database",
      description: "Access to 2M+ conference attendees from 10,000+ global events across all industries."
    },
    {
      icon: Shield,
      title: "GDPR Compliant Data",
      description: "All data collected and processed in compliance with international privacy regulations."
    },
    {
      icon: Users,
      title: "Verified Contacts",
      description: "98%+ accuracy rate with real-time verification and regular data updates."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Events from 80+ countries including major trade shows and industry conferences."
    },
    {
      icon: TrendingUp,
      title: "Fresh & Updated",
      description: "Data updated within 30 days of each event with new attendee information."
    },
    {
      icon: Clock,
      title: "Quick Delivery",
      description: "Receive your targeted attendee lists within 24-48 hours of approval."
    }
  ];

  const howToPick = [
    "Define your target industry and event categories",
    "Specify geographical preferences and event types",
    "Choose job titles and seniority levels",
    "Set company size and industry filters",
    "Review and approve the final attendee criteria"
  ];

  const faqs = [
    {
      question: "How recent is the conference attendee data?",
      answer: "Our database is updated within 30 days of each major conference or trade show. We maintain fresh data from over 10,000 annual events worldwide, ensuring you get the most current attendee information available."
    },
    {
      question: "What information is included for each attendee?",
      answer: "Each record typically includes full name, job title, company name, business email, phone number, LinkedIn profile, company size, industry, and event attendance history. Additional data points may be available depending on the specific event."
    },
    {
      question: "Can I get attendee lists from specific conferences?",
      answer: "Yes! We can provide attendee data from specific conferences, trade shows, or industry events. Simply specify the event name, date, and location in your requirements, and we'll provide available attendee information."
    },
    {
      question: "How do you ensure data compliance and privacy?",
      answer: "All our data collection and processing practices are fully compliant with GDPR, CAN-SPAM, and other international privacy regulations. We work only with legitimate data sources and ensure proper consent mechanisms are in place."
    },
    {
      question: "What file formats do you provide the data in?",
      answer: "We provide attendee lists in multiple formats including CSV, Excel (XLSX), and can accommodate specific CRM import formats upon request. All files are delivered securely through encrypted channels."
    },
    {
      question: "Do you offer custom filtering and segmentation?",
      answer: "Absolutely! We can filter and segment attendee data based on various criteria including job function, seniority level, company size, industry, geographic location, and specific event types to match your exact targeting requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumbs */}
      <section className="py-4 bg-accent/30">
        <div className="container-custom">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="inline-flex items-center">
                  {index > 0 && (
                    <svg className="w-3 h-3 text-foreground/40 mx-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  <Link
                    to={crumb.href}
                    className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                  >
                    {crumb.name}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <Hero 
        title="Global Trade Shows, Events and All Conferences Attendees List"
        subtitle="Connect with decision-makers and industry professionals from the world's leading conferences, trade shows, and business events with our comprehensive attendee databases."
        primaryCTA={{
          text: "Request a Quote or Sample Today",
          href: "#conferences-form"
        }}
        secondaryCTA={{
          text: "View Sample Data",
          href: "/contact"
        }}
        backgroundImage={conferenceAttendeesImage}
      />

      {/* Form Section */}
      <section id="conferences-form" className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <AllConferencesForm />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              Why Join Global Conference Networks?
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Access the most comprehensive database of conference attendees from global trade shows, 
              industry summits, and professional events. Our verified attendee lists help you connect 
              directly with decision-makers, thought leaders, and potential customers who are actively 
              engaged in your industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {whyChooseFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-hero-text" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 font-poppins">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <Link 
              to="#conferences-form" 
              className="btn-primary inline-flex items-center space-x-2"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('conferences-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>GET STARTED NOW</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <CategoryGrid />

      {/* Event Tiles Grid */}
      <EventTilesGrid />

      {/* How to Pick Section */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
                How to Pick the Right Conference Attendees
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                Selecting the right attendee data is crucial for successful outreach campaigns. 
                Our experts help you identify and target the most relevant prospects from 
                conference databases.
              </p>
              
              <div className="space-y-4 mb-8">
                {howToPick.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-hero-text font-semibold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              
              <Link to="#conferences-form" className="btn-outline inline-flex items-center space-x-2">
                <span>Request Custom List</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-hero-text relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img src={globalNetworkingImage} alt="Global networking" className="w-full h-full object-cover" />
              </div>
              <div className="relative text-center">
                <Users className="w-24 h-24 mx-auto mb-6 opacity-80" />
                <h3 className="text-2xl font-semibold mb-4">
                  Ready to Connect?
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>2M+ Verified Conference Attendees</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>80+ Countries Covered</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>24-48 Hour Delivery</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>98%+ Data Accuracy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <ProcessFlow />

      {/* Reasons Grid */}
      <ReasonsGrid />

      {/* FAQ Section */}
      <FAQAccordion 
        title="Frequently Asked Questions (FAQs)"
        subtitle="Get answers to common questions about our conference attendee lists"
        faqs={faqs}
      />

      {/* Final CTA */}
      <section className="section-dark py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark-foreground mb-6 font-poppins">
            Ready to Access Global Conference Networks?
          </h2>
          <p className="text-xl text-secondary-dark-foreground/80 mb-8 max-w-2xl mx-auto">
            Start connecting with decision-makers from the world's leading conferences and trade shows today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="#conferences-form"
              className="btn-hero"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('conferences-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Conference Attendees List
            </Link>
            <a 
              href="tel:"/*+1 307 683 8467*/
              className="border-2 border-hero-text text-hero-text font-medium px-8 py-4 rounded-lg hover:bg-hero-text hover:text-secondary-dark transition-all duration-300"
            >
              Call {/*+1 307 683 8467*/}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllConferencesAttendeesList;