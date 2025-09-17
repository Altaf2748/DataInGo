import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import TilesGrid from '@/components/TilesGrid';
import MarketingGrid from '@/components/MarketingGrid';
import SEOGrid from '@/components/SEOGrid';
import DevGrid from '@/components/DevGrid';
import DataEnrichGrid from '@/components/DataEnrichGrid';
import ProcessFlow from '@/components/ProcessFlow';
import ReasonsGrid from '@/components/ReasonsGrid';
import FAQAccordion from '@/components/FAQAccordion';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

// Business images
import businessGrowthImg from '@/assets/home-business-growth.jpg';
import digitalMarketingHubImg from '@/assets/home-digital-marketing-hub.jpg';
import dataAnalyticsImg from '@/assets/home-data-analytics.jpg';
import emailMarketingImg from '@/assets/home-email-marketing.jpg';
import technologyInnovationImg from '@/assets/home-technology-innovation.jpg';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero 
        title="Find Marketing Solutions For Your Business With DataInGo Solutions"
        subtitle="Transform your business growth with our comprehensive B2B data solutions, targeted email lists, and strategic digital marketing services designed to connect you with your ideal customers."
        backgroundImage={businessGrowthImg}
      />

      {/* Intro Section */}
      <IntroSection 
        imageUrl={dataAnalyticsImg}
        imageAlt="Data analytics and business intelligence"
      />

      {/* Business Growth Section */}
      <section className="py-16 bg-accent/10">
        <div className="container-custom">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img src={digitalMarketingHubImg} alt="Digital marketing operations center" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
              <div className="container-custom">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Comprehensive Digital Marketing Solutions
                </h3>
                <p className="text-xl text-white/90 max-w-2xl">
                  From email campaigns to social media management, we've got all your digital marketing needs covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiles Grid */}
      <TilesGrid />

      {/* Digital Marketing Grid */}
      <MarketingGrid />

      {/* SEO Services */}
      <SEOGrid />

      {/* Development Services */}
      <DevGrid />

      {/* Data Enrichment Services */}
      <DataEnrichGrid />

      {/* Email Marketing Showcase */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img src={emailMarketingImg} alt="B2B email marketing campaigns" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-secondary/80 to-transparent flex items-center justify-end">
              <div className="max-w-md text-right p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Targeted Email Campaigns
                </h3>
                <p className="text-xl text-white/90">
                  Reach your ideal customers with precision-targeted B2B email campaigns that convert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <ProcessFlow />

      {/* Technology Innovation Section */}
      <section className="py-16 bg-accent/5">
        <div className="container-custom">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img src={technologyInnovationImg} alt="Technology and innovation infrastructure" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
              <div className="container-custom pb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Cutting-Edge Technology Infrastructure
                </h3>
                <p className="text-xl text-white/90 max-w-2xl">
                  Our advanced technology stack ensures data accuracy, security, and scalability for all your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to Choose Us */}
      <ReasonsGrid />

      {/* FAQ Section */}
      <FAQAccordion />

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
