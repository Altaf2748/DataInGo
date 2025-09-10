import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Heart, 
  Users, 
  Factory, 
  TrendingUp, 
  Mail,
  ArrowRight
} from 'lucide-react';

interface Tile {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  gradient?: string;
}

interface TilesGridProps {
  title?: string;
  subtitle?: string;
  tiles?: Tile[];
  className?: string;
}

const defaultTiles: Tile[] = [
  {
    title: "Technology Lists",
    description: "Access verified contacts from leading technology companies and startups.",
    icon: Building2,
    href: "/services/b2b-email-list/technology-email-lists"
  },
  {
    title: "Healthcare Lists", 
    description: "Connect with healthcare professionals, hospitals, and medical organizations.",
    icon: Heart,
    href: "/services/b2b-email-list/healthcare-email-lists"
  },
  {
    title: "Professionals Data",
    description: "Reach decision-makers across various industries and job functions.",
    icon: Users,
    href: "/services/b2b-email-list/professionals-email-list"
  },
  {
    title: "Industry-Specific Data",
    description: "Targeted lists for manufacturing, finance, retail, and more industries.",
    icon: Factory,
    href: "/services/b2b-email-list/industry-specific-email-lists"
  },
  {
    title: "B2B Sales Leads",
    description: "High-quality leads ready for your sales team to convert.",
    icon: TrendingUp,
    href: "/services/b2b-email-list/b2b-sales-email-lists"
  },
  {
    title: "Custom Mailing Lists",
    description: "Personalized lists built according to your specific requirements.",
    icon: Mail,
    href: "/services/b2b-email-list/custom-mail-list"
  }
];

const TilesGrid: React.FC<TilesGridProps> = ({
  title = "Know Your Leads and Find them with custom email list",
  subtitle,
  tiles = defaultTiles,
  className = ""
}) => {
  return (
    <section className={`py-16 md:py-24 bg-background ${className}`}>
      <div className="container-custom">
        {/* Header */}
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-poppins">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tiles.map((tile, index) => {
            const IconComponent = tile.icon;
            
            return (
              <Link
                key={index}
                to={tile.href}
                className="tile-gradient group relative overflow-hidden"
              >
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="flex justify-end mb-4">
                    <div className="w-12 h-12 bg-hero-text/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-hero-text" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-hero-text mb-3 font-poppins">
                      {tile.title}
                    </h3>
                    <p className="text-hero-text/80 mb-6 leading-relaxed">
                      {tile.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-hero-text/90 group-hover:text-hero-text transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-end/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TilesGrid;