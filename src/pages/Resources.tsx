import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ResourceGrid from '@/components/ResourceGrid';
import Footer from '@/components/Footer';

const Resources: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero 
        title="Resources & Insights"
        subtitle="Discover valuable resources, insights, and tools to help grow your business"
        primaryCTA={{
          text: "CONTACT US NOW",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Blog",
          href: "/resources/blog"
        }}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog */}
            <div className="bg-card rounded-xl p-6 shadow-hover border border-border hover:shadow-elevated transition-all duration-300">
              <div className="h-12 w-12 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                <span className="text-hero-text font-bold">B</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Blog</h3>
              <p className="text-foreground/70 mb-6">Stay updated with the latest insights, trends, and best practices in data marketing and business growth.</p>
              <a href="/resources/blog" className="btn-outline inline-block">Explore Blog</a>
            </div>

            {/* Brochure */}
            <div className="bg-card rounded-xl p-6 shadow-hover border border-border hover:shadow-elevated transition-all duration-300">
              <div className="h-12 w-12 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                <span className="text-hero-text font-bold">D</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Brochure</h3>
              <p className="text-foreground/70 mb-6">Download our comprehensive brochure to learn more about our services and solutions.</p>
              <a href="/resources/brochure" className="btn-outline inline-block">Download Brochure</a>
            </div>

            {/* Newsletter */}
            <div className="bg-card rounded-xl p-6 shadow-hover border border-border hover:shadow-elevated transition-all duration-300">
              <div className="h-12 w-12 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                <span className="text-hero-text font-bold">N</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Newsletter</h3>
              <p className="text-foreground/70 mb-6">Subscribe to our newsletter for weekly insights and updates on data marketing strategies.</p>
              <a href="/resources/newsletter" className="btn-outline inline-block">Subscribe Now</a>
            </div>

            {/* Careers */}
            <div className="bg-card rounded-xl p-6 shadow-hover border border-border hover:shadow-elevated transition-all duration-300">
              <div className="h-12 w-12 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                <span className="text-hero-text font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Careers</h3>
              <p className="text-foreground/70 mb-6">Join our growing team and help businesses succeed with data-driven marketing solutions.</p>
              <a href="/resources/careers" className="btn-outline inline-block">View Opportunities</a>
            </div>

            {/* Testimonials */}
            <div className="bg-card rounded-xl p-6 shadow-hover border border-border hover:shadow-elevated transition-all duration-300">
              <div className="h-12 w-12 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                <span className="text-hero-text font-bold">T</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Testimonials</h3>
              <p className="text-foreground/70 mb-6">Read success stories from clients who have achieved remarkable results with our services.</p>
              <a href="/resources/testimonials" className="btn-outline inline-block">Read Stories</a>
            </div>

            {/* Case Studies */}
            <div className="bg-card rounded-xl p-6 shadow-hover border border-border hover:shadow-elevated transition-all duration-300">
              <div className="h-12 w-12 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                <span className="text-hero-text font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Case Studies</h3>
              <p className="text-foreground/70 mb-6">Explore detailed case studies showcasing how we've helped businesses achieve their goals.</p>
              <a href="/resources/case-study" className="btn-outline inline-block">View Studies</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;