import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface ResourceItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image?: string;
  href: string;
}

interface ResourceGridProps {
  title: string;
  subtitle?: string;
  items: ResourceItem[];
  baseHref: string;
  showFilters?: boolean;
}

const ResourceGrid: React.FC<ResourceGridProps> = ({
  title,
  subtitle,
  items,
  baseHref,
  showFilters = false
}) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-poppins">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium">
                All Categories
              </button>
              <button className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                B2B Email Lists
              </button>
              <button className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                Data Enrichment
              </button>
              <button className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                Digital Marketing
              </button>
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <article key={item.id} className="card-elevated group overflow-hidden">
              {/* Image */}
              <div className="aspect-[16/10] bg-gradient-primary overflow-hidden">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-hero-text">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">{item.category}</div>
                      <div className="text-sm opacity-80">Featured Article</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {item.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 font-poppins group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-foreground/70 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center text-sm text-foreground/60 mb-4 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{item.author}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link 
                  to={item.href}
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium group"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-border rounded-lg text-foreground/60 hover:bg-accent hover:text-foreground transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border border-border rounded-lg text-foreground/60 hover:bg-accent hover:text-foreground transition-colors">
              2
            </button>
            <button className="px-4 py-2 border border-border rounded-lg text-foreground/60 hover:bg-accent hover:text-foreground transition-colors">
              3
            </button>
            <button className="px-4 py-2 border border-border rounded-lg text-foreground/60 hover:bg-accent hover:text-foreground transition-colors">
              Next
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ResourceGrid;