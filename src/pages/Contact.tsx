import React from 'react';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ArrowRight,
  MessageSquare,
  Calendar
} from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-text mb-6 font-poppins">
              Connect With Us Now
            </h1>
            <p className="text-xl text-hero-text/90 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with data-driven solutions? 
              Get in touch with our experts and discover how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Call Us */}
            <div className="card-elevated p-6 text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-hero-text" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 font-poppins">
                Call Us Directly
              </h3>
              <p className="text-foreground/70 mb-4">
                Speak with our experts immediately
              </p>
              <a 
                href="tel:+13076838467"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>+1 307 683 8467</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Email Us */}
            <div className="card-elevated p-6 text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-hero-text" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 font-poppins">
                Email Us
              </h3>
              <p className="text-foreground/70 mb-4">
                Send us your detailed requirements
              </p>
              <a 
                href="mailto:sales@globaldatasysgroup.com"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Send Email</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Schedule Meeting */}
            <div className="card-elevated p-6 text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-hero-text" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 font-poppins">
                Schedule a Meeting
              </h3>
              <p className="text-foreground/70 mb-4">
                Book a free consultation call
              </p>
              <button className="btn-primary inline-flex items-center space-x-2">
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <ContactForm />

      {/* Map Section */}
      <section className="py-16 bg-accent/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Visit Our Office
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Located in Sheridan, Wyoming, we serve clients globally while maintaining 
              our commitment to personalized service and local business values.
            </p>
          </div>

          {/* Office Information */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Address & Contact */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">
                  DataInGo Solutions
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Address</div>
                      <div className="text-foreground/70">
                        1309 Coffeen Avenue, STE 1200<br />
                        Sheridan, Wyoming 82801
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <a 
                        href="tel:+13076838467" 
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        +1 307 683 8467
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="space-y-1">
                        <div>
                          <a 
                            href="mailto:projects@dataingo.com" 
                            className="text-foreground/70 hover:text-primary transition-colors"
                          >
                            projects@dataingo.com
                          </a>
                        </div>
                        <div>
                          <a 
                            href="mailto:sales@globaldatasysgroup.com" 
                            className="text-foreground/70 hover:text-primary transition-colors"
                          >
                            sales@globaldatasysgroup.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Working Hours</div>
                      <div className="text-foreground/70">
                        Monday - Friday : 08 AM - 05 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours & Additional Info */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Business Information
                </h4>
                
                <div className="space-y-4 text-sm">
                  <div className="p-4 bg-accent/30 rounded-lg">
                    <div className="font-medium text-foreground mb-2">Support Hours</div>
                    <div className="text-foreground/70">
                      Monday - Friday: 8:00 AM - 5:00 PM MST<br />
                      Emergency Support: 24/7 (Premium clients)
                    </div>
                  </div>

                  <div className="p-4 bg-accent/30 rounded-lg">
                    <div className="font-medium text-foreground mb-2">Response Time</div>
                    <div className="text-foreground/70">
                      Email: Within 2 hours<br />
                      Phone: Immediate<br />
                      Emergency: Within 30 minutes
                    </div>
                  </div>

                  <div className="p-4 bg-accent/30 rounded-lg">
                    <div className="font-medium text-foreground mb-2">Languages Supported</div>
                    <div className="text-foreground/70">
                      English (Primary)<br />
                      Spanish, French (Limited)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="w-full h-96 bg-accent/50 rounded-2xl flex items-center justify-center">
            <div className="text-center text-foreground/70">
              <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Interactive map would be embedded here</p>
              <p className="text-sm mt-2">
                16192 Coastal Highway, Lewes, DE 19958 USA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Help */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Need Quick Answers?
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Check out our frequently asked questions or browse our resources 
              for immediate assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elevated p-6 text-center">
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">
                FAQ Section
              </h3>
              <p className="text-foreground/70 mb-4 text-sm">
                Find answers to common questions about our services and processes.
              </p>
              <a href="/#faq" className="text-primary hover:text-primary-end font-medium text-sm">
                View FAQ →
              </a>
            </div>

            <div className="card-elevated p-6 text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Live Chat Support
              </h3>
              <p className="text-foreground/70 mb-4 text-sm">
                Chat with our support team for immediate assistance.
              </p>
              <button className="text-primary hover:text-primary-end font-medium text-sm">
                Start Chat →
              </button>
            </div>

            <div className="card-elevated p-6 text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Resource Center
              </h3>
              <p className="text-foreground/70 mb-4 text-sm">
                Access guides, case studies, and helpful resources.
              </p>
              <a href="/resources" className="text-primary hover:text-primary-end font-medium text-sm">
                Browse Resources →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;