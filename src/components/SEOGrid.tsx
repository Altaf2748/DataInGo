import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  BarChart3,
  Target,
  Link as LinkIcon,
  FileText,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

interface SEOService {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface SEOGridProps {
  title?: string;
  subtitle?: string;
  services?: SEOService[];
  className?: string;
}

const defaultServices: SEOService[] = [
  {
    title: "Keyword Research & Strategy",
    description: "Comprehensive keyword analysis to target the right audience and maximize visibility.",
    icon: Search
  },
  {
    title: "Technical SEO Audit",
    description: "Deep technical analysis to identify and fix website performance issues.",
    icon: BarChart3
  },
  {
    title: "On-Page Optimization",
    description: "Optimize your website content, meta tags, and structure for better rankings.",
    icon: Target
  },
  {
    title: "Link Building & Authority",
    description: "Build high-quality backlinks to establish domain authority and trust.",
    icon: LinkIcon
  },
  {
    title: "Content Optimization",
    description: "Create and optimize content that ranks well and engages your audience.",
    icon: FileText
  },
  {
    title: "Performance Monitoring",
    description: "Track rankings, traffic, and conversions to measure SEO success.",
    icon: TrendingUp
  }
];

const SEOGrid: React.FC<SEOGridProps> = ({
  title = "Our SEO Services",
  subtitle = "Boost your online visibility and drive organic traffic with our comprehensive SEO solutions.",
  services = defaultServices,
  className = ""
}) => {
  return (
    <section className={`py-16 md:py-24 bg-background ${className}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                className="card-elevated p-6 text-center group"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-hero-text" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 font-poppins">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-poppins">
            Ready to Dominate Search Results?
          </h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Our SEO experts will help you climb the search rankings and attract more qualified leads. 
            Get a free SEO audit and strategy consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-hero">
              Get Free SEO Audit
            </Link>
            <Link 
              to="/services/seo" 
              className="btn-outline inline-flex items-center space-x-2"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOGrid;