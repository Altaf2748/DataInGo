import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResourceGrid from '@/components/ResourceGrid';

const CaseStudy: React.FC = () => {
  const caseStudies = [
    {
      id: 'techcorp-lead-generation',
      title: 'TechCorp Solutions: 300% Increase in Qualified Leads',
      excerpt: 'How we helped a B2B technology company transform their lead generation strategy using targeted email lists and data enrichment services.',
      category: 'B2B EMAIL LIST',
      author: 'Marketing Team',
      date: 'July 15, 2025',
      href: '/resources/case-study/techcorp-lead-generation'
    },
    {
      id: 'healthcare-hipaa-compliance',
      title: 'HealthTech Innovations: HIPAA-Compliant Marketing Success',
      excerpt: 'A comprehensive case study on how we helped a healthcare technology company achieve 250% growth while maintaining full HIPAA compliance.',
      category: 'HEALTHCARE',
      author: 'Compliance Team',
      date: 'July 10, 2025',
      href: '/resources/case-study/healthcare-hipaa-compliance'
    },
    {
      id: 'manufacturing-data-enrichment',
      title: 'Manufacturing Plus: Database Transformation & ROI Growth',
      excerpt: 'Learn how data enrichment services helped a manufacturing company clean their database and achieve 220% increase in B2B inquiries.',
      category: 'DATA ENRICHMENT',
      author: 'Data Team',
      date: 'July 5, 2025',
      href: '/resources/case-study/manufacturing-data-enrichment'
    },
    {
      id: 'fintech-linkedin-campaigns',
      title: 'Finance Pro Services: LinkedIn Campaign Success Story',
      excerpt: 'Discover how targeted LinkedIn campaigns and industry-specific email lists drove 180% increase in consultation requests for a fintech company.',
      category: 'DIGITAL MARKETING',
      author: 'Campaign Team',
      date: 'June 28, 2025',
      href: '/resources/case-study/fintech-linkedin-campaigns'
    },
    {
      id: 'edutech-market-expansion',
      title: 'EduTech Solutions: Educational Market Expansion',
      excerpt: 'How targeted email campaigns and data intelligence helped an education technology company expand into new markets with 195% increase in demos.',
      category: 'EDUCATION',
      author: 'Growth Team',
      date: 'June 20, 2025',
      href: '/resources/case-study/edutech-market-expansion'
    },
    {
      id: 'retail-partnership-growth',
      title: 'Retail Solutions Inc: B2B Partnership Development',
      excerpt: 'A detailed analysis of how industry-specific email lists and digital marketing helped a retail solutions company increase partnerships by 275%.',
      category: 'RETAIL',
      author: 'Business Development',
      date: 'June 15, 2025',
      href: '/resources/case-study/retail-partnership-growth'
    },
    {
      id: 'startup-lead-qualification',
      title: 'SaaS Startup: From Zero to 1000 Qualified Leads',
      excerpt: 'How we helped a SaaS startup build their lead database from scratch and achieve consistent lead generation using custom email lists.',
      category: 'SAAS',
      author: 'Startup Team',
      date: 'June 10, 2025',
      href: '/resources/case-study/startup-lead-qualification'
    },
    {
      id: 'global-expansion-strategy',
      title: 'Global Corp: International Market Expansion',
      excerpt: 'Learn how geographic targeting and cultural customization helped a global corporation expand into 5 new international markets successfully.',
      category: 'GLOBAL EXPANSION',
      author: 'International Team',
      date: 'June 5, 2025',
      href: '/resources/case-study/global-expansion-strategy'
    },
    {
      id: 'nonprofit-donor-acquisition',
      title: 'Nonprofit Organization: Donor Acquisition Success',
      excerpt: 'How specialized nonprofit email lists and targeted campaigns helped increase donor acquisition by 160% while reducing acquisition costs.',
      category: 'NONPROFIT',
      author: 'Nonprofit Team',
      date: 'May 30, 2025',
      href: '/resources/case-study/nonprofit-donor-acquisition'
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
              <li><a href="/" className="text-sm font-medium text-foreground/70 hover:text-primary">Home</a></li>
              <li><a href="/resources" className="text-sm font-medium text-foreground/70 hover:text-primary">Resources</a></li>
              <li><span className="text-sm font-medium text-foreground/50">Case Studies</span></li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
            Case Studies
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-12">
            Explore detailed case studies showcasing how our data solutions and digital marketing 
            services have helped businesses across industries achieve remarkable growth and success.
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card rounded-xl p-6 shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-foreground/70 font-medium">Average Lead Increase</div>
              <div className="text-sm text-foreground/60 mt-2">Across all client campaigns</div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">99.2%</div>
              <div className="text-foreground/70 font-medium">Email Deliverability</div>
              <div className="text-sm text-foreground/60 mt-2">Industry-leading accuracy</div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-foreground/70 font-medium">Industries Served</div>
              <div className="text-sm text-foreground/60 mt-2">Diverse sector expertise</div>
            </div>
          </div>
        </div>
      </section>

      <ResourceGrid
        title="Our Success Stories"
        subtitle="Real results from real clients across industries and business sizes"
        items={caseStudies}
        baseHref="/resources/case-study"
        showFilters={true}
      />

      {/* Methodology */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              Our Proven Methodology
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Every successful case study follows our systematic approach to data-driven marketing 
              that delivers consistent, measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-hero-text">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
                Analysis & Strategy
              </h3>
              <p className="text-foreground/70">
                We analyze your current situation, identify opportunities, and develop a 
                customized data and marketing strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-hero-text">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
                Data Acquisition
              </h3>
              <p className="text-foreground/70">
                We source, verify, and customize high-quality data that matches your 
                specific targeting requirements and business goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-hero-text">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
                Campaign Execution
              </h3>
              <p className="text-foreground/70">
                We implement targeted campaigns across multiple channels, continuously 
                optimizing for maximum performance and ROI.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-hero-text">4</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
                Measurement & Growth
              </h3>
              <p className="text-foreground/70">
                We track, measure, and report on key metrics, providing insights 
                for continuous improvement and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark-foreground mb-6 font-poppins">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-secondary-dark-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven methodology can help your business achieve 
            similar remarkable results and growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="btn-hero">
              Start Your Success Story
            </a>
            <a 
              href="/resources/brochure"
              className="border-2 border-hero-text text-hero-text font-medium px-8 py-4 rounded-lg hover:bg-hero-text hover:text-secondary-dark transition-all duration-300"
            >
              Download Case Studies
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy;