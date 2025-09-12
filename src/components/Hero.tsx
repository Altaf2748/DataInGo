import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  caption?: string;
  title: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  caption = "Find And Close Deals with Database Solutions",
  title,
  subtitle,
  primaryCTA = {
    text: "TALK TO OUR EXPERT",
    href: "/contact"
  },
  secondaryCTA,
  backgroundImage,
  className = ""
}) => {
  return (
    <section className={`section-hero relative overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        {backgroundImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-hero-bg/80 to-hero-bg/40" />
      </div>
      
      {/* Content */}
      <div className="relative container-custom">
        <div className="max-w-4xl mx-auto text-center py-20 md:py-32">
          {/* Caption */}
          {caption && (
            <div className="animate-fade-in mb-6">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium backdrop-blur-sm">
                {caption}
              </span>
            </div>
          )}
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-hero-text mb-6 animate-slide-up font-poppins leading-tight">
            {title}
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl text-hero-text/90 mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed">
              {subtitle}
            </p>
          )}
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in">
            <Link 
              to={primaryCTA.href}
              className="btn-hero group inline-flex items-center space-x-2"
            >
              <span>{primaryCTA.text}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            {secondaryCTA && (
              <Link 
                to={secondaryCTA.href}
                className="btn-outline group inline-flex items-center space-x-2 text-hero-text border-hero-text hover:bg-hero-text hover:text-hero-bg"
              >
                <Play className="w-4 h-4" />
                <span>{secondaryCTA.text}</span>
              </Link>
            )}
          </div>
          
          {/* Stats or Additional Info */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center animate-fade-in">
            <div className="text-hero-text/80">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">2000+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="text-hero-text/80">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">80M+</div>
              <div className="text-sm">Leads Generated</div>
            </div>
            <div className="text-hero-text/80">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">98%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-primary-end/10 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-hero-text/5 rounded-full blur-lg animate-pulse delay-500" />
    </section>
  );
};

export default Hero;