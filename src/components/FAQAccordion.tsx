import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQ[];
  className?: string;
}

const defaultFAQs: FAQ[] = [
  {
    question: "What types of data do you provide?",
    answer: "We provide comprehensive B2B databases including email lists, contact information, company data, and industry-specific datasets. Our data covers technology companies, healthcare organizations, professionals across various industries, and custom mailing lists tailored to your specific requirements."
  },
  {
    question: "How accurate is your data?",
    answer: "Our data maintains a 95%+ accuracy rate through our rigorous verification process. We use multiple validation methods including email verification, phone number confirmation, and regular data updates to ensure the highest quality standards for our clients."
  },
  {
    question: "Do you offer data customization?",
    answer: "Yes, we specialize in custom data solutions. We can create targeted lists based on specific criteria such as industry, company size, job titles, geographic location, technology stack, and many other parameters to perfectly match your business needs."
  },
  {
    question: "What is your data delivery timeframe?",
    answer: "Standard data delivery typically takes 3-5 business days. For urgent requests, we offer expedited delivery within 24-48 hours. Custom data projects may require additional time depending on complexity, but we always provide clear timelines upfront."
  },
  {
    question: "Is your data GDPR and CAN-SPAM compliant?",
    answer: "Absolutely. All our data collection and processing practices are fully compliant with GDPR, CAN-SPAM Act, and other international data protection regulations. We ensure all contacts have proper opt-in consent and provide easy unsubscribe mechanisms."
  },
  {
    question: "What digital marketing services do you offer?",
    answer: "We offer comprehensive digital marketing services including email campaigns, LinkedIn outreach, social media management, content creation, SEO optimization, and website development. Our services are designed to work seamlessly with our data solutions for maximum impact."
  },
  {
    question: "Do you provide ongoing support after data delivery?",
    answer: "Yes, we provide comprehensive ongoing support including data updates, campaign assistance, technical support, and strategic consultation. Our customer success team is available 24/7 to ensure you get the maximum value from our services."
  },
  {
    question: "Can I integrate your data with my existing CRM?",
    answer: "Absolutely. Our data is provided in multiple formats (CSV, Excel, API) and can be easily integrated with popular CRM systems like Salesforce, HubSpot, Pipedrive, and many others. We also provide integration support and guidance."
  }
];

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  title = "Frequently Asked Questions (FAQs)",
  subtitle = "Find answers to the most common questions about our data solutions and services.",
  faqs = defaultFAQs,
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
          <div className="bg-accent/30 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
              Still Have Questions?
            </h3>
            <p className="text-foreground/70 mb-6">
              Our expert team is here to help you find the perfect data solution for your business needs.
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
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;