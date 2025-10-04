import React from 'react';
import {
  MessageSquare,
  Database,
  CheckCircle,
  Headphones,
  ArrowRight
} from 'lucide-react';

interface ProcessStep {
  title: string;
  description: string;
  icon: React.ElementType;
  details?: string[];
}

interface ProcessFlowProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  className?: string;
}

const defaultSteps: ProcessStep[] = [
  {
    title: "Client Needs",
    description: "We tailor each database to your specific needs, ensuring relevance and accuracy.",
    icon: MessageSquare,
    details: [
      "Initial consultation call",
      "Requirement analysis", 
      "Target audience identification",
      "Goals and objectives discussion"
    ]
  },
  {
    title: "Data Aggregation", 
    description: "Our databases are custom-built to adhere to the unique standards and compliance needs of your industry.",
    icon: Database,
    details: [
      "Multi-source data collection",
      "Industry-specific research",
      "Contact information gathering",
      "Database compilation"
    ]
  },
  {
    title: "Data Validation",
    description: "All data undergoes a meticulous verification process to guarantee accuracy and dependability.",
    icon: CheckCircle,
    details: [
      "Email validation process",
      "Phone number verification",
      "Address confirmation",
      "Data accuracy checks"
    ]
  },
  {
    title: "Shipping and Assistance",
    description: "We ensure delivery within 2–5 business days and provide ongoing support throughout the process.",
    icon: Headphones,
    details: [
      "Secure data delivery",
      "Format customization",
      "Implementation support",
      "Ongoing assistance"
    ]
  }
];

const ProcessFlow: React.FC<ProcessFlowProps> = ({
  title = "Explore the Process of Working Together",
  subtitle = "Our streamlined approach ensures you get high-quality, verified data that meets your specific business requirements.",
  steps = defaultSteps,
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

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-8 relative">
              {/* Connection Line */}
              <div className="absolute top-16 left-16 right-16 h-0.5 bg-gradient-primary"></div>
              
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                
                return (
                  <div key={index} className="relative">
                    {/* Step Card */}
                    <div className="card-elevated p-6 text-center relative z-10">
                      {/* Step Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-hero-text font-bold text-sm">
                        {index + 1}
                      </div>
                      
                      {/* Icon */}
                      <div className="mb-4 mt-2">
                        <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto">
                          <IconComponent className="w-8 h-8 text-hero-text" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-foreground mb-2 font-poppins">
                        {step.title}
                      </h3>
                      <p className="text-foreground/70 text-sm mb-4">
                        {step.description}
                      </p>

                      {/* Details */}
                      {step.details && (
                        <ul className="text-left text-xs text-foreground/60 space-y-1">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Arrow (except for last item) */}
                    {index < steps.length - 1 && (
                      <div className="absolute -right-4 top-16 z-20 w-8 h-8 bg-background rounded-full flex items-center justify-center border-2 border-primary">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <div key={index} className="relative">
                  <div className="card-elevated p-6">
                    <div className="flex items-start space-x-4">
                      {/* Step Number & Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-2">
                          <IconComponent className="w-6 h-6 text-hero-text" />
                        </div>
                        <div className="w-12 flex justify-center">
                          <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-hero-text font-bold text-xs">
                            {index + 1}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2 font-poppins">
                          {step.title}
                        </h3>
                        <p className="text-foreground/70 text-sm mb-4">
                          {step.description}
                        </p>

                        {/* Details */}
                        {step.details && (
                          <ul className="text-xs text-foreground/60 space-y-1">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start space-x-2">
                                <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-start ml-6 my-4">
                      <div className="w-0.5 h-8 bg-gradient-primary"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-accent/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-poppins">
              Ready to Get Started?
            </h3>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's begin your data journey today. Our team is ready to understand your needs 
              and provide you with the perfect data solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/contact" 
                className="btn-hero"
              >
                Start Your Project Today
              </a>
              <a 
                href="tel:" /*+1 307 683 8467*/
                className="btn-outline inline-flex items-center space-x-2"
              >
                <span>Call Us Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;