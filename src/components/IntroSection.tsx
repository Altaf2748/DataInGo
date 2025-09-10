import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface IntroSectionProps {
  title?: string;
  content?: string;
  features?: string[];
  ctaText?: string;
  ctaHref?: string;
  imageUrl?: string;
  imageAlt?: string;
  reversed?: boolean;
  className?: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({
  title = "Grow and Create Leads for your business with Global Datasys Group",
  content = "We are your trusted partner for comprehensive B2B data solutions and digital marketing services. Our expert team helps businesses connect with their ideal customers through verified, high-quality data and targeted marketing campaigns that drive real results.",
  features = [
    "99% Data Accuracy Guarantee",
    "GDPR & CAN-SPAM Compliant",
    "24/7 Customer Support",
    "Custom Data Solutions",
    "Fast Turnaround Time",
    "CRM Integration Support"
  ],
  ctaText = "Get Your Custom Quote",
  ctaHref = "/contact",
  imageUrl = "",
  imageAlt = "Global Datasys Group Team",
  reversed = false,
  className = ""
}) => {
  return (
    <section className={`py-16 md:py-24 bg-background ${className}`}>
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          reversed ? 'lg:flex-row-reverse' : ''
        }`}>
          {/* Content */}
          <div className={`${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins leading-tight">
              {title}
            </h2>
            
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              {content}
            </p>

            {/* Features */}
            {features && features.length > 0 && (
              <div className="mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link 
                to={ctaHref}
                className="btn-hero inline-flex items-center space-x-2 group"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center space-x-4 text-foreground/70">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">No Setup Fees</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="w-full h-auto rounded-2xl shadow-card"
                  loading="lazy"
                />
              ) : (
                // Placeholder when no image is provided
                <div className="w-full aspect-[4/3] bg-gradient-primary rounded-2xl shadow-card flex items-center justify-center">
                  <div className="text-center text-hero-text">
                    <div className="w-24 h-24 bg-hero-text/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-12 h-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Global Datasys Team</h3>
                    <p className="text-hero-text/80">Expert professionals ready to help</p>
                  </div>
                </div>
              )}

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-end/20 rounded-full"></div>
            </div>

            {/* Stats Overlay */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-card rounded-lg shadow-card">
                <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                <div className="text-foreground/70 text-sm">Satisfied Clients</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg shadow-card">
                <div className="text-2xl font-bold text-primary mb-1">50M+</div>
                <div className="text-foreground/70 text-sm">Quality Leads</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg shadow-card">
                <div className="text-2xl font-bold text-primary mb-1">99%</div>
                <div className="text-foreground/70 text-sm">Data Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;