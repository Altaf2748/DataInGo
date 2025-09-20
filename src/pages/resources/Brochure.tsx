import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrochureForm from '@/components/BrochureForm';
import { CheckCircle, Download, Globe, Users, TrendingUp } from 'lucide-react';

const Brochure: React.FC = () => {
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
              <li><span className="text-sm font-medium text-foreground/50">Brochure</span></li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
              Brochure
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Download our comprehensive brochure to learn more about DataInGo Solutions's 
              services, solutions, and how we can help transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-poppins">
                  What's Inside Our Brochure
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                  Our detailed brochure provides comprehensive information about our data solutions, 
                  marketing services, and proven methodologies that have helped over 1,000 businesses 
                  achieve their growth objectives.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Complete Service Overview
                    </h3>
                    <p className="text-foreground/70">
                      Detailed descriptions of our B2B email lists, data enrichment, 
                      digital marketing, SEO, and web development services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Success Stories & Case Studies
                    </h3>
                    <p className="text-foreground/70">
                      Real examples of how we've helped businesses like yours achieve 
                      measurable growth and improve their marketing ROI.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      ROI & Performance Metrics
                    </h3>
                    <p className="text-foreground/70">
                      Detailed statistics and performance metrics showing the average 
                      results our clients achieve with our services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Industry Best Practices
                    </h3>
                    <p className="text-foreground/70">
                      Expert insights and proven methodologies that you can apply 
                      to improve your own marketing and data strategies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-accent/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Why Download Our Brochure?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Comprehensive service information in one place</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Real case studies and success stories</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Pricing guidelines and service packages</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Industry insights and best practices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Contact information and next steps</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:sticky lg:top-8">
              <BrochureForm />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-accent/20">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-poppins">
            Need More Information?
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Have specific questions about our services or want to discuss your unique requirements? 
            Our team is ready to help you find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="btn-primary">
              Schedule a Consultation
            </a>
            <a 
              href="tel:+13076838467"
              className="btn-outline"
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

export default Brochure;