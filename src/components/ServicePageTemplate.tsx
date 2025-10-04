import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TilesGrid from '@/components/TilesGrid';
import ProcessFlow from '@/components/ProcessFlow';
import ReasonsGrid from '@/components/ReasonsGrid';
import ServiceFAQs from '@/components/ServiceFAQs';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { serviceFAQs } from '@/data/serviceFAQs';

interface ContentBlock {
  title: string;
  content: string;
  imagePosition: 'left' | 'right';
  image?: string;
}

interface ServicePageTemplateProps {
  title: string;
  subtitle?: string;
  description: string;
  contentBlocks: ContentBlock[];
  features?: string[];
  breadcrumbs: Array<{ name: string; href: string }>;
  showTiles?: boolean;
  showProcess?: boolean;
  showReasons?: boolean;
  faqKey?: string;
  serviceName?: string;
  heroImage?: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  subtitle,
  description,
  contentBlocks,
  features = [],
  breadcrumbs,
  showTiles = true,
  showProcess = true,
  showReasons = true,
  faqKey,
  serviceName,
  heroImage
}) => {
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
        title={title}
        subtitle={subtitle || description}
        primaryCTA={{
          text: "CONTACT US NOW",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Get Quote",
          href: "/contact"
        }}
        backgroundImage={heroImage}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              {description}
            </p>
            
            {features.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-left">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Content Blocks */}
      {contentBlocks.map((block, index) => (
        <section key={index} className={`py-16 md:py-24 ${index % 2 === 1 ? 'bg-accent/20' : 'bg-background'}`}>
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              block.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <div className={block.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-poppins">
                  {block.title}
                </h3>
                <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                  {block.content}
                </p>
                <Link to="/contact" className="btn-outline inline-flex items-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Image */}
              <div className={block.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}>
                {block.image ? (
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={block.image} 
                      alt={block.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-gradient-primary rounded-2xl aspect-[4/3] flex items-center justify-center">
                    <div className="text-hero-text text-center">
                      <div className="w-24 h-24 bg-hero-text/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <CheckCircle className="w-12 h-12" />
                      </div>
                      <h4 className="text-xl font-semibold">{block.title}</h4>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Related Services Tiles */}
      {showTiles && (
        <TilesGrid 
          title="Related Services"
          subtitle="Explore our other data and marketing solutions"
        />
      )}

      {/* Process Flow */}
      {showProcess && <ProcessFlow />}

      {/* Reasons to Choose Us */}
      {showReasons && <ReasonsGrid />}

      {/* FAQ Section */}
      {faqKey && serviceName && (
        <ServiceFAQs 
          serviceName={serviceName}
          faqs={serviceFAQs[faqKey] || []}
        />
      )}

      {/* Final CTA */}
      <section className="section-dark py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark-foreground mb-6 font-poppins">
            Ready to Get Started with {title}?
          </h2>
          <p className="text-xl text-secondary-dark-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our experts today for a free consultation and personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-hero">
              Get Free Consultation
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

export default ServicePageTemplate;