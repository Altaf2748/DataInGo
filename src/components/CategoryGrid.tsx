// Category grid for All Conferences page with prefill functionality
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Wheat,
  Car,
  Hammer,
  Palette,
  Laptop,
  Heart,
  GraduationCap,
  DollarSign,
  Home,
  Plane,
  Users,
  Shield
} from 'lucide-react';

interface Category {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CategoryGrid: React.FC = () => {
  const navigate = useNavigate();

  const categories: Category[] = [
    {
      title: "Agriculture & Forestry",
      description: "Connect with agribusiness professionals and forestry experts",
      icon: Wheat
    },
    {
      title: "Automotive",
      description: "Reach automotive industry leaders and manufacturers",
      icon: Car
    },
    {
      title: "Construction & Engineering", 
      description: "Target construction professionals and engineering firms",
      icon: Hammer
    },
    {
      title: "Arts & Entertainment",
      description: "Engage with creative industry professionals and artists",
      icon: Palette
    },
    {
      title: "Technology & Software",
      description: "Connect with tech leaders and software developers",
      icon: Laptop
    },
    {
      title: "Healthcare & Medical",
      description: "Reach healthcare professionals and medical practitioners",
      icon: Heart
    },
    {
      title: "Education & Training",
      description: "Target educational institutions and training providers",
      icon: GraduationCap
    },
    {
      title: "Finance & Banking",
      description: "Connect with financial services and banking professionals",
      icon: DollarSign
    },
    {
      title: "Real Estate & Property",
      description: "Reach real estate agents and property developers",
      icon: Home
    },
    {
      title: "Travel & Tourism",
      description: "Engage with travel industry and tourism professionals",
      icon: Plane
    },
    {
      title: "Human Resources",
      description: "Connect with HR professionals and recruitment experts",
      icon: Users
    },
    {
      title: "Security & Defense",
      description: "Target security professionals and defense contractors",
      icon: Shield
    }
  ];

  const handleEnquireClick = (categoryTitle: string) => {
    const encodedCategory = encodeURIComponent(categoryTitle);
    navigate(`/services/all-conferences-attendees-list?category=${encodedCategory}`);
    
    // Smooth scroll to form after navigation
    setTimeout(() => {
      const formElement = document.getElementById('conferences-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Focus the first input
        const firstInput = formElement.querySelector('input[type="text"]') as HTMLInputElement;
        if (firstInput) {
          firstInput.focus();
        }
      }
    }, 100);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
            Browse Shows By Event Category or Industry
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Select your industry of interest to access targeted attendee lists from relevant 
            conferences and trade shows worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-hover hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-hero-text" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 font-poppins">
                  {category.title}
                </h3>
                
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <button
                  onClick={() => handleEnquireClick(category.title)}
                  className="w-full btn-primary text-sm py-3 hover:scale-[1.02] transition-transform"
                >
                  ENQUIRE NOW
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;