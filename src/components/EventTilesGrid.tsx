// Event tiles grid for featured conferences and country filters
import React from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

interface Event {
  title: string;
  category: string;
  location: string;
  attendees: string;
  date: string;
  description: string;
}

interface Country {
  name: string;
  flag: string;
  eventCount: number;
}

const EventTilesGrid: React.FC = () => {
  const countries: Country[] = [
    { name: "United States", flag: "🇺🇸", eventCount: 1250 },
    { name: "Germany", flag: "🇩🇪", eventCount: 890 },
    { name: "United Kingdom", flag: "🇬🇧", eventCount: 720 },
    { name: "France", flag: "🇫🇷", eventCount: 650 },
    { name: "Canada", flag: "🇨🇦", eventCount: 480 },
    { name: "Australia", flag: "🇦🇺", eventCount: 420 },
    { name: "Japan", flag: "🇯🇵", eventCount: 380 },
    { name: "Netherlands", flag: "🇳🇱", eventCount: 290 }
  ];

  const featuredEvents: Event[] = [
    {
      title: "CES - Consumer Electronics Show",
      category: "Technology & Innovation",
      location: "Las Vegas, USA",
      attendees: "170,000+",
      date: "January 2024",
      description: "The world's largest technology trade show featuring cutting-edge innovations."
    },
    {
      title: "Mobile World Congress",
      category: "Mobile Technology",
      location: "Barcelona, Spain", 
      attendees: "110,000+",
      date: "February 2024",
      description: "Premier mobile industry event showcasing latest mobile technologies."
    },
    {
      title: "HIMSS Healthcare IT Conference",
      category: "Healthcare Technology",
      location: "Orlando, USA",
      attendees: "45,000+", 
      date: "March 2024",
      description: "Leading healthcare information and technology conference."
    },
    {
      title: "Hannover Messe",
      category: "Industrial Technology",
      location: "Hannover, Germany",
      attendees: "215,000+",
      date: "April 2024", 
      description: "World's largest industrial trade fair for manufacturing and automation."
    },
    {
      title: "NAB Show",
      category: "Media & Entertainment",
      location: "Las Vegas, USA",
      attendees: "91,000+",
      date: "April 2024",
      description: "Premier destination for media, entertainment and technology professionals."
    },
    {
      title: "Money20/20",
      category: "Fintech & Payments",
      location: "Amsterdam, Netherlands",
      attendees: "5,000+",
      date: "June 2024",
      description: "The largest global event focused on payments and financial services innovation."
    }
  ];

  const handleEnquireClick = (eventTitle: string) => {
    const encodedEvent = encodeURIComponent(`Event: ${eventTitle}`);
    window.location.href = `/services/all-conferences-attendees-list?category=${encodedEvent}`;
  };

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Countries Section */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              Browse Event Attendees Data By Country
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Access comprehensive attendee databases from conferences and trade shows 
              across major business markets worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {countries.map((country, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-hover hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-3xl mb-2">{country.flag}</div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {country.name}
                </h4>
                <p className="text-primary text-xs font-medium">
                  {country.eventCount.toLocaleString()} Events
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              Top Leading Brand Events Attendees List
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Get access to attendee data from the world's most prestigious conferences, 
              trade shows, and industry events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-hover hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-primary p-6 text-hero-text">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-hero-text/20 text-hero-text px-3 py-1 rounded-full text-xs font-medium">
                      {event.category}
                    </span>
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-poppins">
                    {event.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-sm">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/80">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Users className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/80">{event.attendees} Attendees</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/80">{event.date}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleEnquireClick(event.title)}
                    className="w-full btn-outline flex items-center justify-center space-x-2 hover:scale-[1.02] transition-transform"
                  >
                    <span>ENQUIRE NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventTilesGrid;