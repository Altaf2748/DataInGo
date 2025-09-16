import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQsProps {
  serviceName: string;
  faqs: FAQ[];
  className?: string;
}

const ServiceFAQs: React.FC<ServiceFAQsProps> = ({
  serviceName,
  faqs,
  className = ""
}) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <section className={`py-16 md:py-24 bg-accent/20 ${className}`}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Common questions about our {serviceName} services and how they can benefit your business.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card-elevated overflow-hidden"
              >
                <button
                  className="w-full px-6 py-6 text-left focus:outline-none focus-ring rounded-t-lg"
                  onClick={() => toggleItem(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={openItem === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground pr-4 font-poppins">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItem === index ? (
                        <Minus className="w-5 h-5 text-primary transition-transform duration-200" />
                      ) : (
                        <Plus className="w-5 h-5 text-primary transition-transform duration-200" />
                      )}
                    </div>
                  </div>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`transition-all duration-300 ease-in-out ${
                    openItem === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-foreground/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-primary/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
              Still Have Questions About Our {serviceName}?
            </h3>
            <p className="text-foreground/70 mb-6">
              Our expert team is ready to provide detailed answers and help you choose the right solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/contact" 
                className="btn-primary"
              >
                Contact Our Experts
              </a>
              <a 
                href="tel:+13076838467" 
                className="btn-outline"
              >
                Call +1 307 683 8467
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQs;