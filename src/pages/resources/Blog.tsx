import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResourceGrid from '@/components/ResourceGrid';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 'b2b-email-marketing-best-practices',
      title: 'B2B Email Marketing Best Practices for 2024',
      excerpt: 'Discover the latest strategies and techniques to improve your B2B email marketing campaigns and increase engagement rates.',
      category: 'B2B EMAIL LIST',
      author: 'Kanik Raj',
      date: 'July 11, 2025',
      href: '/resources/blog/b2b-email-marketing-best-practices'
    },
    {
      id: 'data-enrichment-guide',
      title: 'Complete Guide to Data Enrichment for Marketing Success',
      excerpt: 'Learn how data enrichment can transform your marketing efforts and improve campaign performance with actionable insights.',
      category: 'DATA ENRICHMENT',
      author: 'Sarah Chen',
      date: 'July 8, 2025',
      href: '/resources/blog/data-enrichment-guide'
    },
    {
      id: 'linkedin-outreach-strategies',
      title: 'LinkedIn Outreach Strategies That Actually Work',
      excerpt: 'Master the art of LinkedIn outreach with proven strategies that generate quality leads and build meaningful business relationships.',
      category: 'DIGITAL MARKETING',
      author: 'Michael Torres',
      date: 'July 5, 2025',
      href: '/resources/blog/linkedin-outreach-strategies'
    },
    {
      id: 'healthcare-email-compliance',
      title: 'Healthcare Email Marketing: HIPAA Compliance Guide',
      excerpt: 'Navigate healthcare email marketing regulations and ensure your campaigns are fully HIPAA compliant while maximizing effectiveness.',
      category: 'B2B EMAIL LIST',
      author: 'Dr. Amanda Foster',
      date: 'July 2, 2025',
      href: '/resources/blog/healthcare-email-compliance'
    },
    {
      id: 'seo-trends-2024',
      title: 'SEO Trends and Algorithm Updates You Need to Know',
      excerpt: 'Stay ahead of the competition with the latest SEO trends, algorithm updates, and optimization strategies for 2024 and beyond.',
      category: 'SEO',
      author: 'David Kim',
      date: 'June 28, 2025',
      href: '/resources/blog/seo-trends-2024'
    },
    {
      id: 'email-deliverability-tips',
      title: 'Email Deliverability: How to Reach the Inbox Every Time',
      excerpt: 'Improve your email deliverability rates with proven techniques and best practices that ensure your emails reach their intended recipients.',
      category: 'DIGITAL MARKETING',
      author: 'Lisa Rodriguez',
      date: 'June 25, 2025',
      href: '/resources/blog/email-deliverability-tips'
    },
    {
      id: 'technology-buyer-personas',
      title: 'Creating Effective Technology Buyer Personas',
      excerpt: 'Learn how to develop detailed buyer personas for technology products and services to improve your marketing targeting and messaging.',
      category: 'B2B EMAIL LIST',
      author: 'Alex Thompson',
      date: 'June 22, 2025',
      href: '/resources/blog/technology-buyer-personas'
    },
    {
      id: 'data-quality-importance',
      title: 'Why Data Quality Matters More Than Quantity',
      excerpt: 'Discover why investing in high-quality data is more important than having large databases and how it impacts your marketing ROI.',
      category: 'DATA ENRICHMENT',
      author: 'Jennifer Walsh',
      date: 'June 19, 2025',
      href: '/resources/blog/data-quality-importance'
    },
    {
      id: 'content-marketing-b2b',
      title: 'Content Marketing Strategies for B2B Success',
      excerpt: 'Develop effective B2B content marketing strategies that educate prospects, build trust, and drive qualified leads to your business.',
      category: 'DIGITAL MARKETING',
      author: 'Robert Chen',
      date: 'June 16, 2025',
      href: '/resources/blog/content-marketing-b2b'
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
              <li><span className="text-sm font-medium text-foreground/50">Blog</span></li>
            </ol>
          </nav>
        </div>
      </section>

      <ResourceGrid
        title="Blog"
        subtitle="Latest insights on data marketing, lead generation, and business growth strategies"
        items={blogPosts}
        baseHref="/resources/blog"
        showFilters={true}
      />

      <Footer />
    </div>
  );
};

export default Blog;