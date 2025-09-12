import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface DropdownItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services',
      dropdown: [
        { name: 'B2B Email Lists', href: '/services/b2b-email-list' },
        { name: 'All Conferences Attendees List', href: '/services/all-conferences-attendees-list' },
        { name: 'Data Enrichment', href: '/services/data-enrichment' },
        { name: 'Digital Marketing', href: '/services/digital-marketing' },
        { name: 'SEO Services', href: '/services/seo' },
        { name: 'Website Design & Development', href: '/services/website-design-development' }
      ]
    },
    {
      name: 'Resources',
      dropdown: [
        { name: 'Blog', href: '/resources/blog' },
        { name: 'Brochure', href: '/resources/brochure' },
        { name: 'Newsletter', href: '/resources/newsletter' },
        { name: 'Careers', href: '/resources/careers' },
        { name: 'Testimonials', href: '/resources/testimonials' },
        { name: 'Case Study', href: '/resources/case-study' },
        { name: 'Article', href: '/resources/article' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  const isActiveRoute = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const handleDropdownToggle = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <header className="sticky top-0 z-50 bg-nav-bg/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-hero-text font-bold text-lg md:text-xl">GD</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-nav-text">Global Datasys</h1>
              <p className="text-xs text-nav-text/70">Marketing Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className={`nav-link flex items-center space-x-1 py-2 ${
                        item.dropdown.some(dropItem => isActiveRoute(dropItem.href)) 
                          ? 'text-nav-hover' 
                          : ''
                      }`}
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    {openDropdown === item.name && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-card rounded-lg shadow-hover border border-border z-50"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="py-2">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              to={dropItem.href}
                              className={`block px-4 py-3 text-sm hover:bg-accent hover:text-nav-hover transition-colors ${
                                isActiveRoute(dropItem.href) 
                                  ? 'text-nav-hover bg-accent/50' 
                                  : 'text-nav-text'
                              }`}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href!}
                    className={`nav-link py-2 ${
                      isActiveRoute(item.href!) ? 'text-nav-hover' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors focus-ring"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-nav-text" />
            ) : (
              <Menu className="w-6 h-6 text-nav-text" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-left text-nav-text hover:bg-accent rounded-md transition-colors"
                        onClick={() => handleDropdownToggle(item.name)}
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {openDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              to={dropItem.href}
                              className={`block px-4 py-2 text-sm rounded-md hover:bg-accent transition-colors ${
                                isActiveRoute(dropItem.href) 
                                  ? 'text-nav-hover bg-accent/50' 
                                  : 'text-nav-text'
                              }`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href!}
                      className={`block px-4 py-3 rounded-md font-medium hover:bg-accent transition-colors ${
                        isActiveRoute(item.href!) 
                          ? 'text-nav-hover bg-accent/50' 
                          : 'text-nav-text'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="mt-6 px-4">
                <Link 
                  to="/contact" 
                  className="btn-primary block text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;