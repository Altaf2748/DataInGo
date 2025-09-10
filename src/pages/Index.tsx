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

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero 
        title="Find Marketing Solutions For Your Business With Global Datasys Group"
        subtitle="Transform your business growth with our comprehensive B2B data solutions, targeted email lists, and strategic digital marketing services designed to connect you with your ideal customers."
      />

      {/* Intro Section */}
      <IntroSection />

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

      {/* Process Flow */}
      <ProcessFlow />

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
