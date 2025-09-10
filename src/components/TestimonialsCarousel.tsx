import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

interface TestimonialsCarouselProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Solutions", 
    role: "Marketing Director",
    content: "Global Datasys Group transformed our lead generation strategy. Their data quality is exceptional, and we've seen a 300% increase in qualified leads within the first quarter.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "HealthFirst Medical",
    role: "Business Development Manager", 
    content: "The healthcare email lists provided by Global Datasys were incredibly accurate and targeted. We were able to connect with key decision-makers and expand our network significantly.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    company: "Manufacturing Plus",
    role: "Sales Manager",
    content: "Their custom data solutions helped us identify and reach prospects we never knew existed. The ROI has been outstanding, and their support team is always responsive and helpful.",
    rating: 5
  },
  {
    name: "David Thompson",
    company: "Digital Innovations",
    role: "CEO",
    content: "Working with Global Datasys has been a game-changer for our B2B outreach. The data accuracy and the digital marketing support have exceeded our expectations completely.",
    rating: 5
  },
  {
    name: "Lisa Park",
    company: "Financial Services Group",
    role: "VP of Marketing",
    content: "The technology email lists and LinkedIn campaigns provided by Global Datasys helped us connect with C-level executives. Our conversion rates improved by 250% in just two months.",
    rating: 5
  }
];

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  title = "What Our Clients Say",
  subtitle = "Discover how Global Datasys Group has helped businesses like yours achieve remarkable results.",
  testimonials = defaultTestimonials,
  className = "",
  autoPlay = true,
  autoPlayInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    } else if (event.key === ' ') {
      event.preventDefault();
      setIsPlaying(!isPlaying);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-foreground/30'
        }`}
      />
    ));
  };

  return (
    <section 
      className={`py-16 md:py-24 bg-accent/10 ${className}`}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(autoPlay)}
    >
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

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div 
            className="overflow-hidden rounded-2xl"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Testimonials carousel"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                  role="tabpanel"
                  aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
                >
                  <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card mx-4">
                    <div className="max-w-4xl mx-auto text-center">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <Quote className="w-12 h-12 text-primary mx-auto opacity-20" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center justify-center mb-6">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Content */}
                      <blockquote className="text-xl md:text-2xl text-foreground/80 italic mb-8 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        {testimonial.image ? (
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                            <span className="text-hero-text font-bold text-xl">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                        )}
                        <div className="text-left">
                          <div className="font-semibold text-foreground text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-foreground/70">
                            {testimonial.role}
                          </div>
                          <div className="text-primary font-medium text-sm">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-card rounded-full shadow-hover flex items-center justify-center hover:bg-accent transition-colors focus-ring"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-card rounded-full shadow-hover flex items-center justify-center hover:bg-accent transition-colors focus-ring"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus-ring ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Play/Pause Indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-foreground/50 hover:text-foreground/70 text-sm transition-colors focus-ring"
              aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
            >
              {isPlaying ? 'Pause' : 'Play'} Auto-rotation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;