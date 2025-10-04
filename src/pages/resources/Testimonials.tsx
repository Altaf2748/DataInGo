import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { Star, Quote, Users, TrendingUp, CheckCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  const detailedTestimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Marketing",
      company: "TechCorp Solutions",
      image: "/placeholder-avatar.jpg",
      rating: 5,
      testimonial: "DataInGo Solutions transformed our lead generation strategy completely. Their B2B email lists are incredibly accurate, and we've seen a 300% increase in qualified leads within just three months. The team's expertise in technology sector targeting was exactly what we needed.",
      results: ["300% increase in qualified leads", "99.2% email deliverability", "45% reduction in cost per lead"],
      industry: "Technology"
    },
    {
      name: "Michael Chen",
      role: "Director of Sales",
      company: "HealthTech Innovations",
      image: "/placeholder-avatar.jpg",
      rating: 5,
      testimonial: "Working with DataInGo Solutions has been a game-changer for our healthcare marketing campaigns. Their HIPAA-compliant healthcare email lists and data enrichment services helped us connect with the right decision-makers in hospitals and clinics nationwide.",
      results: ["250% increase in appointment bookings", "68% improvement in email open rates", "40% boost in qualified healthcare leads"],
      industry: "Healthcare"
    },
    {
      name: "Jennifer Rodriguez",
      role: "Marketing Manager",
      company: "Finance Pro Services",
      image: "/placeholder-avatar.jpg",
      rating: 5,
      testimonial: "The custom email lists and digital marketing services from DataInGo Solutions exceeded our expectations. Their understanding of the finance industry and compliance requirements made our campaigns both effective and compliant with regulations.",
      results: ["180% increase in consultation requests", "92% email deliverability rate", "35% growth in qualified financial leads"],
      industry: "Finance"
    },
    {
      name: "David Thompson",
      role: "CEO",
      company: "Manufacturing Plus",
      image: "/placeholder-avatar.jpg",
      rating: 5,
      testimonial: "DataInGo Solutions's industry-specific email lists for manufacturing helped us reach decision-makers we couldn't connect with before. Their data enrichment services cleaned up our existing database and improved our overall marketing efficiency significantly.",
      results: ["220% increase in B2B inquiries", "89% email deliverability improvement", "50% reduction in marketing costs"],
      industry: "Manufacturing"
    },
    {
      name: "Lisa Park",
      role: "Head of Digital Marketing",
      company: "EduTech Solutions",
      image: "/placeholder-avatar.jpg",
      rating: 5,
      testimonial: "The team at DataInGo Solutions understands the education technology market exceptionally well. Their targeted email campaigns and LinkedIn outreach helped us connect with educational institutions and increase our software adoption rates dramatically.",
      results: ["195% increase in demo requests", "73% improvement in lead quality", "42% growth in conversion rates"],
      industry: "Education Technology"
    },
    {
      name: "Robert Wilson",
      role: "VP of Business Development",
      company: "Retail Solutions Inc",
      image: "/placeholder-avatar.jpg",
      rating: 5,
      testimonial: "DataInGo Solutions's retail industry email lists and digital marketing expertise helped us expand into new markets successfully. Their data quality is outstanding, and their customer service is responsive and professional throughout our partnership.",
      results: ["275% increase in retail partnerships", "85% email engagement rates", "38% improvement in sales pipeline"],
      industry: "Retail"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumbs */}
      <section className="py-4 bg-accent/30">
        <div className="container-custom">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li><a href="/" className="text-sm font-medium text-foreground/70 hover:text-primary">Home</a></li>
              <li><a href="/resources" className="text-sm font-medium text-foreground/70 hover:text-primary">Resources</a></li>
              <li><span className="text-sm font-medium text-foreground/50">Testimonials</span></li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
            Client Success Stories
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-12">
            Discover how businesses across industries have transformed their marketing 
            results with DataInGo Solutions's data solutions and digital marketing services.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2000+</div>
              <div className="text-foreground/70">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.5%</div>
              <div className="text-foreground/70">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-foreground/70">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+ Years</div>
              <div className="text-foreground/70">Industry Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Detailed Testimonials */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              Detailed Success Stories
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Read comprehensive testimonials from our clients and learn about the specific 
              results they achieved with our data and marketing solutions.
            </p>
          </div>

          <div className="space-y-12">
            {detailedTestimonials.map((testimonial, index) => (
              <div key={index} className="card-elevated">
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Testimonial Content */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-6">
                        <Quote className="w-8 h-8 text-primary mr-4" />
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>

                      <blockquote className="text-lg text-foreground/80 leading-relaxed mb-6 italic">
                        "{testimonial.testimonial}"
                      </blockquote>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-hero-text font-semibold">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-foreground/70">{testimonial.role}</div>
                          <div className="text-primary font-medium">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-primary/5 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <TrendingUp className="w-6 h-6 text-primary mr-2" />
                        <h4 className="font-semibold text-foreground">Key Results</h4>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {testimonial.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/80 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-border pt-4">
                        <div className="text-sm text-foreground/60">Industry</div>
                        <div className="font-medium text-primary">{testimonial.industry}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark-foreground mb-6 font-poppins">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-secondary-dark-foreground/80 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results with our proven data solutions 
            and digital marketing expertise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="btn-hero">
              Get Your Free Consultation
            </a>
            <a 
              href="tel:"
              className="border-2 border-hero-text text-hero-text font-medium px-8 py-4 rounded-lg hover:bg-hero-text hover:text-secondary-dark transition-all duration-300"
            >
              Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;