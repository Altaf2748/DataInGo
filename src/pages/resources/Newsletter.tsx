import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResourceGrid from '@/components/ResourceGrid';

const Newsletter: React.FC = () => {
  const newsletters = [
    {
      id: 'december-2024',
      title: 'Data Marketing Insights - December 2024',
      excerpt: 'Year-end review of data marketing trends, upcoming GDPR updates, and predictions for 2025 marketing strategies.',
      category: 'MONTHLY NEWSLETTER',
      author: 'Editorial Team',
      date: 'December 1, 2024',
      href: '/resources/newsletter/december-2024'
    },
    {
      id: 'november-2024',
      title: 'November Newsletter: Holiday Marketing Strategies',
      excerpt: 'Special edition covering holiday marketing campaigns, seasonal email strategies, and Q4 lead generation tactics.',
      category: 'MONTHLY NEWSLETTER',
      author: 'Editorial Team',
      date: 'November 1, 2024',
      href: '/resources/newsletter/november-2024'
    },
    {
      id: 'october-2024',
      title: 'October Insights: B2B Email Marketing Evolution',
      excerpt: 'Deep dive into the evolution of B2B email marketing, new automation tools, and industry best practices.',
      category: 'MONTHLY NEWSLETTER',
      author: 'Editorial Team',
      date: 'October 1, 2024',
      href: '/resources/newsletter/october-2024'
    },
    {
      id: 'september-2024',
      title: 'September Edition: Data Enrichment Spotlight',
      excerpt: 'Comprehensive coverage of data enrichment trends, new technologies, and success stories from our clients.',
      category: 'MONTHLY NEWSLETTER',
      author: 'Editorial Team',
      date: 'September 1, 2024',
      href: '/resources/newsletter/september-2024'
    },
    {
      id: 'august-2024',
      title: 'August Newsletter: LinkedIn Marketing Mastery',
      excerpt: 'Special focus on LinkedIn marketing strategies, B2B social selling, and professional networking best practices.',
      category: 'MONTHLY NEWSLETTER',
      author: 'Editorial Team',
      date: 'August 1, 2024',
      href: '/resources/newsletter/august-2024'
    },
    {
      id: 'july-2024',
      title: 'July Insights: Healthcare Marketing Compliance',
      excerpt: 'Essential guide to healthcare marketing compliance, HIPAA considerations, and industry-specific strategies.',
      category: 'MONTHLY NEWSLETTER',
      author: 'Editorial Team',
      date: 'July 1, 2024',
      href: '/resources/newsletter/july-2024'
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
              <li><span className="text-sm font-medium text-foreground/50">Newsletter</span></li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-primary">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-text mb-6 font-poppins">
            Newsletter Archive
          </h1>
          <p className="text-xl text-hero-text/90 mb-8 max-w-3xl mx-auto">
            Stay informed with our monthly newsletter featuring the latest insights on data marketing, 
            lead generation strategies, and industry trends.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="bg-hero-text/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-hero-text mb-4">
                Subscribe to Our Newsletter
              </h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-hero-text text-foreground placeholder-foreground/60 focus:outline-none focus:ring-2 focus:ring-hero-text/50"
                />
                <button
                  type="submit"
                  className="w-full bg-hero-text text-primary font-semibold px-6 py-3 rounded-lg hover:bg-hero-text/90 transition-colors"
                >
                  Subscribe Now
                </button>
              </form>
              <p className="text-hero-text/70 text-sm mt-3">
                Join 5,000+ marketing professionals receiving our insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ResourceGrid
        title="Newsletter Archive"
        subtitle="Browse our complete collection of monthly newsletters and industry insights"
        items={newsletters}
        baseHref="/resources/newsletter"
      />

      {/* Newsletter Benefits */}
      <section className="py-16 bg-accent/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-poppins">
              What You'll Get in Our Newsletter
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Industry Insights
              </h3>
              <p className="text-foreground/70">
                Latest trends, news, and analysis from the data marketing and lead generation industry.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Best Practices
              </h3>
              <p className="text-foreground/70">
                Proven strategies and actionable tips you can implement to improve your marketing results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Success Stories
              </h3>
              <p className="text-foreground/70">
                Real case studies and success stories from our clients and industry partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;