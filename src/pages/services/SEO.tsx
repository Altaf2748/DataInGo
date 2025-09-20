import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import seoImage from '@/assets/services-seo.jpg';
import dataAnalyticsImage from '@/assets/services-data-analytics.jpg';
import webDevelopmentImage from '@/assets/services-web-development.jpg';
import seoHeroImage from '@/assets/services-seo-hero.jpg';
import seoOptimizationImage from '@/assets/services-seo-optimization.jpg';

const SEO: React.FC = () => {
  const contentBlocks = [
    {
      title: "Improve Your Search Engine Visibility",
      content: "Drive organic traffic and increase your online presence with our comprehensive SEO services. Our team of SEO experts uses proven strategies including keyword research, technical audits, content optimization, and link building to help your website rank higher in search results.",
      imagePosition: 'left' as const,
      image: seoImage
    },
    {
      title: "SEO Optimization and Performance Tracking",
      content: "Monitor and improve your search engine performance with our advanced SEO optimization tools and analytics. We track keyword rankings, analyze competitor strategies, and provide detailed reports to help you understand your SEO progress and ROI.",
      imagePosition: 'right' as const,
      image: seoOptimizationImage
    },
    {
      title: "Technical SEO and Performance Optimization",
      content: "Ensure your website meets all technical SEO requirements with our detailed audits and optimization services. We improve site speed, mobile responsiveness, crawlability, and technical structure to give you a competitive edge in search rankings.",
      imagePosition: 'left' as const,
      image: dataAnalyticsImage
    },
    {
      title: "Content Strategy and Link Building",
      content: "Build authority and trust with high-quality content and strategic link building campaigns. Our content team creates valuable, SEO-optimized content while our outreach specialists secure high-quality backlinks from authoritative industry websites.",
      imagePosition: 'right' as const,
      image: webDevelopmentImage
    }
  ];

  const features = [
    "Keyword Research & Strategy",
    "Technical SEO Audits",
    "On-Page Optimization",
    "Content Marketing",
    "Link Building Campaigns",
    "Performance Tracking"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'SEO Services', href: '/services/seo' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-text mb-6 font-poppins">
              Our SEO Services
            </h1>
            <p className="text-xl text-hero-text/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Improve your search engine visibility and drive organic traffic
            </p>
          </div>
        </div>
      </section>

      {/* Boost Your Visibility Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              Boost Your Visibility with Proven SEO Techniques
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At DataInGo Solutions, we specialize in crafting SEO strategies that are designed to elevate your online visibility and drive organic traffic to your website. Our expert team uses a combination of on-page and off-page optimization techniques, keyword research, and content development to ensure that your website ranks higher on search engines. Whether you're targeting local or global markets, our SEO services are tailored to help you reach your target audience at the right moment, driving more relevant traffic and potential leads to your business.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
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

export default SEO;