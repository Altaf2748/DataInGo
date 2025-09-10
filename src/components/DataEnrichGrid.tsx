import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Database,
  CheckCircle,
  BarChart3,
  Brain,
  RefreshCw,
  ArrowRight
} from 'lucide-react';

interface DataService {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

interface DataEnrichGridProps {
  title?: string;
  subtitle?: string;
  services?: DataService[];
  className?: string;
}

const defaultServices: DataService[] = [
  {
    title: "Email Append",
    description: "Add missing email addresses to your existing customer database for better outreach.",
    icon: Mail,
    href: "/services/data-enrichment/email-append"
  },
  {
    title: "Data Append",
    description: "Enhance your database with additional contact information and company details.",
    icon: Database,
    href: "/services/data-enrichment/data-append"
  },
  {
    title: "Data Verification",
    description: "Verify and validate existing data to ensure accuracy and deliverability.",
    icon: CheckCircle,
    href: "/services/data-enrichment/data-verification"
  },
  {
    title: "Data Profiling",
    description: "Analyze and understand your data quality with comprehensive profiling reports.",
    icon: BarChart3,
    href: "/services/data-enrichment/data-profiling"
  },
  {
    title: "Data Intelligence",
    description: "Extract actionable insights from your data to drive smarter business decisions.",
    icon: Brain,
    href: "/services/data-enrichment/data-intelligence"
  },
  {
    title: "Data Cleansing",
    description: "Remove duplicates, errors, and outdated information from your database.",
    icon: RefreshCw,
    href: "/services/data-enrichment/data-cleansing"
  }
];

const DataEnrichGrid: React.FC<DataEnrichGridProps> = ({
  title = "Data Enrichment Services",
  subtitle = "Transform your raw data into valuable business assets with our comprehensive data enrichment solutions.",
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
              <Link
                key={index}
                to={service.href}
                className="card-elevated p-6 group block"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-hero-text" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 font-poppins">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center text-primary group-hover:text-primary-end transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Process Overview */}
        <div className="bg-accent/20 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-poppins">
              Our Data Enrichment Process
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We follow a systematic approach to ensure your data is accurate, complete, and actionable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-hero-text font-bold">1</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Analysis</h4>
              <p className="text-foreground/70 text-sm">Assess your current data quality and identify gaps</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-hero-text font-bold">2</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Enrichment</h4>
              <p className="text-foreground/70 text-sm">Add missing information from verified sources</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-hero-text font-bold">3</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Validation</h4>
              <p className="text-foreground/70 text-sm">Verify accuracy and remove duplicates</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-hero-text font-bold">4</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Delivery</h4>
              <p className="text-foreground/70 text-sm">Provide clean, enriched data in your preferred format</p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact" className="btn-hero">
              Start Data Enrichment Project
            </Link>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-hero-text" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2 font-poppins">
              95%+ Accuracy Rate
            </h4>
            <p className="text-foreground/70 text-sm">
              Industry-leading data accuracy for reliable business decisions
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-8 h-8 text-hero-text" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2 font-poppins">
              Real-time Updates
            </h4>
            <p className="text-foreground/70 text-sm">
              Keep your data fresh with continuous monitoring and updates
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-hero-text" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2 font-poppins">
              GDPR Compliant
            </h4>
            <p className="text-foreground/70 text-sm">
              Fully compliant data processing that meets all privacy regulations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataEnrichGrid;