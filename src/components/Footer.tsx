import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import HalloweenDecorations from './HalloweenDecorations';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = {
    "B2B Email List": [
      { name: "Technology Email Lists", href: "/services/b2b-email-list/technology-email-lists" },
      { name: "Healthcare Email Lists", href: "/services/b2b-email-list/healthcare-email-lists" },
      { name: "Professionals Email List", href: "/services/b2b-email-list/professionals-email-list" },
      { name: "Industry-Specific Email Lists", href: "/services/b2b-email-list/industry-specific-email-lists" },
      { name: "B2B Sales Email Lists", href: "/services/b2b-email-list/b2b-sales-email-lists" },
      { name: "Custom Mail List", href: "/services/b2b-email-list/custom-mail-list" },
      { name: "All Conferences Attendees List", href: "/services/all-conferences-attendees-list" }
    ],
    "Data Enrichment Services": [
      { name: "Email Append", href: "/services/data-enrichment/email-append" },
      { name: "Data Append", href: "/services/data-enrichment/data-append" },
      { name: "Data Verification", href: "/services/data-enrichment/data-verification" },
      { name: "Data Profiling", href: "/services/data-enrichment/data-profiling" },
      { name: "Data Intelligence", href: "/services/data-enrichment/data-intelligence" },
      { name: "Data Cleansing", href: "/services/data-enrichment/data-cleansing" }
    ],
    "Digital Marketing Services": [
      { name: "Email Campaigns", href: "/services/digital-marketing/email-campaigns" },
      { name: "LinkedIn Campaigns", href: "/services/digital-marketing/linkedin-campaigns" },
      { name: "Event Marketing", href: "/services/digital-marketing/event-marketing" },
      { name: "Content Writing Services", href: "/services/digital-marketing/content-writing-services" },
      { name: "Social Media Creation", href: "/services/digital-marketing/social-media-poster-video-creation" },
      { name: "LinkedIn Account Management", href: "/services/digital-marketing/linkedin-account-management" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "GDPR Compliance", href: "/gdpr-compliance" }
  ];

  return (
    <footer className="bg-secondary-dark text-secondary-dark-foreground border-t-2 border-orange-500/30 shadow-[0_-2px_15px_rgba(255,165,0,0.3)] relative">
      <div className="relative">
        <HalloweenDecorations />
      </div>
      
      {/* Floating Halloween elements at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden h-16">
        <div className="relative w-full h-full flex justify-around items-end pb-2">
          <span className="text-2xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}>🎃</span>
          <span className="text-2xl animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '2.2s' }}>👻</span>
          <span className="text-2xl animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '1.8s' }}>🦇</span>
          <span className="text-2xl animate-bounce" style={{ animationDelay: '0.9s', animationDuration: '2.1s' }}>🕷️</span>
          <span className="text-2xl animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '1.9s' }}>🍬</span>
          <span className="text-2xl animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '2.3s' }}>🎃</span>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex flex-col items-center space-y-3 mb-6">
              <div>
                <img src="/src/assets/logo_footer.png" alt="DataInGo Solutions" className="w-80 h-20 object-contain" />
              </div>
              <p className="text-secondary-dark-foreground/70 text-sm">Marketing Solutions</p>
            </Link>
            
            <p className="text-secondary-dark-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for comprehensive B2B data solutions, digital marketing services, 
              and lead generation strategies. We help businesses connect with their ideal customers 
              through verified, high-quality data and targeted marketing campaigns.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary-start flex-shrink-0" />
                <span className="text-secondary-dark-foreground/80">
                  16192 Coastal Highway, Lewes, DE 19958 USA
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary-start flex-shrink-0" />
                <a 
                  href="tel:" /*+1 307 683 8467*/
                  className="text-secondary-dark-foreground/80 hover:text-primary-start transition-colors"
                >
                  {/*+1 307 683 8467*/}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary-start flex-shrink-0" />
                <a 
                  href="mailto:projects@dataingo.com" 
                  className="text-secondary-dark-foreground/80 hover:text-primary-start transition-colors"
                >
                  projects@dataingo.com
                </a>
              </div>
            </div>
          </div>

          {/* Service Links */}
          {Object.entries(serviceLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-secondary-dark-foreground mb-4 font-poppins">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-secondary-dark-foreground/70 hover:text-primary-start transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media & Newsletter */}
      <div className="border-t border-secondary-dark-foreground/10">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-1">
              <span className="text-secondary-dark-foreground/70 mr-4">Follow us:</span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-secondary-dark-foreground/10 hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4 text-secondary-dark-foreground hover:text-hero-text" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4">
              <span className="text-secondary-dark-foreground/70 text-sm">
                Stay updated with our latest insights
              </span>
              <Link 
                to="/resources/newsletter" 
                className="btn-primary text-sm px-4 py-2"
              >
                Subscribe Newsletter
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-secondary-dark-foreground/10 bg-secondary-dark/50">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-secondary-dark-foreground/70 text-sm">
              © {currentYear} All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-secondary-dark-foreground/70 hover:text-primary-start transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;