import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Linkedin,
  Calendar,
  PenTool,
  Video,
  UserCheck,
  Search,
  Globe,
  ArrowRight
} from 'lucide-react';

interface MarketingService {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

interface MarketingGridProps {
  title?: string;
  subtitle?: string;
  services?: MarketingService[];
  className?: string;
}

const defaultServices: MarketingService[] = [
  {
    title: "Email Campaigns",
    description: "Strategic email marketing campaigns that convert leads into customers.",
    icon: Mail,
    href: "/services/digital-marketing/email-campaigns"
  },
  {
    title: "LinkedIn Campaigns",
    description: "Professional B2B outreach and lead generation on LinkedIn platform.",
    icon: Linkedin,
    href: "/services/digital-marketing/linkedin-campaigns"
  },
  {
    title: "Event Marketing",
    description: "Comprehensive event promotion and attendee engagement strategies.",
    icon: Calendar,
    href: "/services/digital-marketing/event-marketing"
  },
  {
    title: "Content Writing Services",
    description: "Engaging content that drives traffic and converts visitors into leads.",
    icon: PenTool,
    href: "/services/digital-marketing/content-writing-services"
  },
  {
    title: "Social Media Poster & Video Creation",
    description: "Creative visual content for social media platforms and campaigns.",
    icon: Video,
    href: "/services/digital-marketing/social-media-poster-video-creation"
  },
  {
    title: "LinkedIn Account Management",
    description: "Professional LinkedIn profile optimization and account management.",
    icon: UserCheck,
    href: "/services/digital-marketing/linkedin-account-management"
  },
  {
    title: "SEO (Search Engine Optimisation)",
    description: "Improve your website's visibility and ranking on search engines.",
    icon: Search,
    href: "/services/seo"
  },
  {
    title: "Website Design & Development",
    description: "Modern, responsive websites that drive conversions and growth.",
    icon: Globe,
    href: "/services/website-design-development"
  }
];

const MarketingGrid: React.FC<MarketingGridProps> = ({
  title = "Digital Marketing Services Focused on Customer Needs",
  subtitle = "Comprehensive digital marketing solutions to help your business reach and engage with your target audience effectively.",
  services = defaultServices,
  className = ""
}) => {
  return (
    <section className={`section-dark py-16 md:py-24 ${className}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-dark-foreground mb-6 font-poppins">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-secondary-dark-foreground/80 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                className="bg-card/10 backdrop-blur-sm rounded-xl p-6 hover:bg-card/20 transition-all duration-300 hover:-translate-y-2 border border-secondary-dark-foreground/10"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-hero-text" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-secondary-dark-foreground mb-3 font-poppins">
                  {service.title}
                </h3>
                <p className="text-secondary-dark-foreground/70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary-start hover:text-primary-end transition-colors text-sm font-medium group"
                >
                  <span>ENQUIRE NOW</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-card/5 rounded-2xl p-8 md:p-12 border border-secondary-dark-foreground/10">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-dark-foreground mb-4 font-poppins">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-secondary-dark-foreground/80 mb-8 max-w-2xl mx-auto">
              Let our expert team help you create and execute a comprehensive digital marketing strategy 
              that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-hero">
                Get Your Free Consultation
              </Link>
              <Link to="/services" className="btn-outline text-secondary-dark-foreground border-secondary-dark-foreground hover:bg-secondary-dark-foreground hover:text-secondary-dark">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingGrid;