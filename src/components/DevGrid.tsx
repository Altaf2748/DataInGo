import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Palette,
  Code,
  Zap,
  ArrowRight
} from 'lucide-react';

interface DevService {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface DevGridProps {
  title?: string;
  subtitle?: string;
  services?: DevService[];
  className?: string;
}

const defaultServices: DevService[] = [
  {
    title: "Custom Website Development",
    description: "Tailored websites built with modern technologies to meet your specific business needs.",
    icon: Globe
  },
  {
    title: "Responsive Design",
    description: "Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.",
    icon: Smartphone
  },
  {
    title: "E-commerce Solutions",
    description: "Full-featured online stores with payment processing, inventory management, and more.",
    icon: ShoppingCart
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    icon: Palette
  },
  {
    title: "Web Application Development",
    description: "Complex web applications with advanced functionality and seamless user experience.",
    icon: Code
  },
  {
    title: "Performance Optimization",
    description: "Lightning-fast loading speeds and optimal performance for better user engagement.",
    icon: Zap
  }
];

const DevGrid: React.FC<DevGridProps> = ({
  title = "Our Development Services",
  subtitle = "Professional website design and development services that drive results and enhance your online presence.",
  services = defaultServices,
  className = ""
}) => {
  return (
    <section className={`py-16 md:py-24 bg-accent/30 ${className}`}>
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
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 group"
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
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary hover:text-primary-end transition-colors text-sm font-medium group"
                >
                  <span>ENQUIRE NOW</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-hero-text" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2 font-poppins">
              Fast Delivery
            </h4>
            <p className="text-foreground/70 text-sm">
              Quick turnaround times without compromising on quality
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-hero-text" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2 font-poppins">
              Modern Technology
            </h4>
            <p className="text-foreground/70 text-sm">
              Latest frameworks and technologies for optimal performance
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-hero-text" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2 font-poppins">
              SEO Optimized
            </h4>
            <p className="text-foreground/70 text-sm">
              Built with SEO best practices for better search visibility
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-hero-text mb-4 font-poppins">
            Ready to Build Your Dream Website?
          </h3>
          <p className="text-hero-text/90 mb-8 max-w-2xl mx-auto">
            Let's create a powerful online presence that converts visitors into customers. 
            Our development team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="bg-hero-text text-primary font-semibold px-8 py-4 rounded-lg hover:bg-hero-text/90 transition-all duration-300">
              Start Your Project
            </Link>
            <Link 
              to="/services/website-design-development" 
              className="border-2 border-hero-text text-hero-text font-medium px-6 py-3 rounded-lg hover:bg-hero-text hover:text-primary transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevGrid;