import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResourceGrid from '@/components/ResourceGrid';

const Article: React.FC = () => {
  const articles = [
    {
      id: 'gdpr-compliance-guide',
      title: 'Complete GDPR Compliance Guide for B2B Marketing',
      excerpt: 'Essential guidelines for maintaining GDPR compliance in your B2B email marketing campaigns and data collection processes.',
      category: 'COMPLIANCE',
      author: 'Legal Team',
      date: 'July 20, 2025',
      href: '/resources/article/gdpr-compliance-guide'
    },
    {
      id: 'data-driven-marketing-trends',
      title: 'Data-Driven Marketing Trends Shaping 2025',
      excerpt: 'Explore the latest trends in data-driven marketing, from AI-powered personalization to predictive analytics and customer journey mapping.',
      category: 'TRENDS',
      author: 'Research Team',
      date: 'July 18, 2025',
      href: '/resources/article/data-driven-marketing-trends'
    },
    {
      id: 'email-automation-best-practices',
      title: 'Email Marketing Automation: Advanced Best Practices',
      excerpt: 'Master email marketing automation with advanced strategies for nurturing leads, segmenting audiences, and maximizing conversion rates.',
      category: 'EMAIL MARKETING',
      author: 'Automation Team',
      date: 'July 12, 2025',
      href: '/resources/article/email-automation-best-practices'
    },
    {
      id: 'b2b-buyer-journey-mapping',
      title: 'B2B Buyer Journey Mapping: Complete Framework',
      excerpt: 'Learn how to map the modern B2B buyer journey and create touchpoints that guide prospects from awareness to purchase decision.',
      category: 'B2B STRATEGY',
      author: 'Strategy Team',
      date: 'July 8, 2025',
      href: '/resources/article/b2b-buyer-journey-mapping'
    },
    {
      id: 'linkedin-lead-generation',
      title: 'LinkedIn Lead Generation: Advanced Techniques for 2025',
      excerpt: 'Discover advanced LinkedIn lead generation strategies, from Sales Navigator optimization to content-driven outreach campaigns.',
      category: 'LINKEDIN',
      author: 'Social Media Team',
      date: 'July 3, 2025',
      href: '/resources/article/linkedin-lead-generation'
    },
    {
      id: 'data-quality-metrics',
      title: 'Data Quality Metrics: How to Measure and Improve',
      excerpt: 'Essential metrics for measuring data quality in your marketing databases and proven strategies for continuous improvement.',
      category: 'DATA QUALITY',
      author: 'Data Science Team',
      date: 'June 25, 2025',
      href: '/resources/article/data-quality-metrics'
    },
    {
      id: 'industry-specific-marketing',
      title: 'Industry-Specific Marketing: Tailoring Your Approach',
      excerpt: 'How to customize your marketing approach for different industries, from healthcare and finance to technology and manufacturing.',
      category: 'INDUSTRY INSIGHTS',
      author: 'Industry Team',
      date: 'June 20, 2025',
      href: '/resources/article/industry-specific-marketing'
    },
    {
      id: 'marketing-attribution-models',
      title: 'Marketing Attribution Models: A Complete Comparison',
      excerpt: 'Compare different marketing attribution models and learn how to choose the right approach for measuring your campaign effectiveness.',
      category: 'ANALYTICS',
      author: 'Analytics Team',
      date: 'June 15, 2025',
      href: '/resources/article/marketing-attribution-models'
    },
    {
      id: 'personalization-at-scale',
      title: 'Personalization at Scale: Tools and Strategies',
      excerpt: 'Learn how to implement personalization strategies that work at scale, from dynamic content to behavioral targeting.',
      category: 'PERSONALIZATION',
      author: 'Technology Team',
      date: 'June 10, 2025',
      href: '/resources/article/personalization-at-scale'
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
              <li><span className="text-sm font-medium text-foreground/50">Articles</span></li>
            </ol>
          </nav>
        </div>
      </section>

      <ResourceGrid
        title="Expert Articles"
        subtitle="In-depth articles on data marketing, lead generation, and business growth strategies from our team of experts"
        items={articles}
        baseHref="/resources/article"
        showFilters={true}
      />

      {/* Article Categories */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              Article Categories
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Browse our articles by category to find exactly the insights and information you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Compliance & Legal</h3>
              <p className="text-foreground/70 mb-4">GDPR, CAN-SPAM, HIPAA, and other compliance requirements for data marketing.</p>
              <a href="/resources/article?category=compliance" className="text-primary hover:text-primary/80 font-medium">
                Browse Articles →
              </a>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Trends & Insights</h3>
              <p className="text-foreground/70 mb-4">Latest trends, predictions, and insights shaping the data marketing industry.</p>
              <a href="/resources/article?category=trends" className="text-primary hover:text-primary/80 font-medium">
                Browse Articles →
              </a>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Email Marketing</h3>
              <p className="text-foreground/70 mb-4">Best practices, automation strategies, and optimization techniques for email campaigns.</p>
              <a href="/resources/article?category=email-marketing" className="text-primary hover:text-primary/80 font-medium">
                Browse Articles →
              </a>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">B2B Strategy</h3>
              <p className="text-foreground/70 mb-4">Strategic frameworks, buyer journey mapping, and B2B marketing methodologies.</p>
              <a href="/resources/article?category=b2b-strategy" className="text-primary hover:text-primary/80 font-medium">
                Browse Articles →
              </a>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Data Quality</h3>
              <p className="text-foreground/70 mb-4">Data management, quality metrics, enrichment strategies, and database optimization.</p>
              <a href="/resources/article?category=data-quality" className="text-primary hover:text-primary/80 font-medium">
                Browse Articles →
              </a>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Analytics & Measurement</h3>
              <p className="text-foreground/70 mb-4">Attribution models, KPI tracking, ROI measurement, and performance optimization.</p>
              <a href="/resources/article?category=analytics" className="text-primary hover:text-primary/80 font-medium">
                Browse Articles →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Article;