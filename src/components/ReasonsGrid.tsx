import React from 'react';
import {
  Shield,
  TrendingUp,
  Settings,
  Zap,
  CheckCircle,
  MessageCircle,
  Award,
  Database,
  Users
} from 'lucide-react';

interface Reason {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ReasonsGridProps {
  title?: string;
  subtitle?: string;
  reasons?: Reason[];
  className?: string;
}

const defaultReasons: Reason[] = [
  {
    title: "Reliability",
    description: "Consistent, dependable data solutions you can trust for your business success.",
    icon: Shield
  },
  {
    title: "Improved Your ROI",
    description: "Maximize your return on investment with targeted data and strategic campaigns.",
    icon: TrendingUp
  },
  {
    title: "Modification", 
    description: "Flexible data customization to perfectly match your specific requirements.",
    icon: Settings
  },
  {
    title: "Swift Delivery",
    description: "Fast turnaround times without compromising on data quality or accuracy.",
    icon: Zap
  },
  {
    title: "Authorized Data",
    description: "100% verified and compliant data sourced through legitimate channels & Fully compliant with GDPR, CAN-SPAM, and anti-spam regulations.",
    icon: CheckCircle
  },
  {
    title: "Conversation",
    description: "24/7 customer support and ongoing consultation for your success.",
    icon: MessageCircle
  },
  {
    title: "Value-driven",
    description: "Cost-effective solutions that deliver maximum value for your investment.",
    icon: Award
  },
  {
    title: "CRM-adaptable",
    description: "Seamlessly integrate our data with your existing CRM and marketing tools.",
    icon: Database
  },
  {
    title: "Expert Team",
    description: "Experienced professionals dedicated to delivering exceptional results.",
    icon: Users
  }
];

const ReasonsGrid: React.FC<ReasonsGridProps> = ({
  title = "Reasons To Choose Us?",
  subtitle = "Discover why thousands of businesses trust DataInGo Solutions for their data and marketing needs.",
  reasons = defaultReasons,
  className = ""
}) => {
  return (
    <section className={`py-16 md:py-24 bg-accent/20 ${className}`}>
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

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            
            return (
              <div
                key={index}
                className="card-elevated p-6 group text-center"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-hero-text" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 font-poppins">
                  {reason.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="text-hero-text">
              <div className="text-3xl md:text-4xl font-bold mb-2">2000+</div>
              <div className="text-hero-text/80 text-sm">Happy Clients</div>
            </div>
            <div className="text-hero-text">
              <div className="text-3xl md:text-4xl font-bold mb-2">80M+</div>
              <div className="text-hero-text/80 text-sm">Quality Leads</div>
            </div>
            <div className="text-hero-text">
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-hero-text/80 text-sm">Data Accuracy</div>
            </div>
            <div className="text-hero-text">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-hero-text/80 text-sm">Support Available</div>
            </div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-xl md:text-2xl text-foreground/80 italic max-w-4xl mx-auto mb-6">
            "DataInGo Solutions has been instrumental in our lead generation success. 
            Their data quality and customer service are unmatched in the industry."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-hero-text" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Sarah Johnson</div>
              <div className="text-foreground/70 text-sm">Marketing Director, TechCorp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsGrid;