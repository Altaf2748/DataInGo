import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services"; 
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service Pages
import B2BEmailList from "./pages/services/B2BEmailList";
import TechnologyEmailLists from "./pages/services/TechnologyEmailLists";
import HealthcareEmailLists from "./pages/services/HealthcareEmailLists";
import ProfessionalsEmailList from "./pages/services/ProfessionalsEmailList";
import IndustrySpecificEmailLists from "./pages/services/IndustrySpecificEmailLists";
import B2BSalesEmailLists from "./pages/services/B2BSalesEmailLists";
import CustomMailList from "./pages/services/CustomMailList";
import DataEnrichment from "./pages/services/DataEnrichment";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import SEO from "./pages/services/SEO";
import WebsiteDesignDevelopment from "./pages/services/WebsiteDesignDevelopment";

// Resource Pages
import Blog from "./pages/resources/Blog";
import Brochure from "./pages/resources/Brochure";
import Newsletter from "./pages/resources/Newsletter";
import Careers from "./pages/resources/Careers";
import Testimonials from "./pages/resources/Testimonials";
import CaseStudy from "./pages/resources/CaseStudy";
import Article from "./pages/resources/Article";

// Legal Pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";
import GdprCompliance from "./pages/legal/GdprCompliance";

// All Conferences Page
import AllConferencesAttendeesList from "./pages/services/AllConferencesAttendeesList";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* B2B Email List Services */}
          <Route path="/services/b2b-email-list" element={<B2BEmailList />} />
          <Route path="/services/b2b-email-list/technology-email-lists" element={<TechnologyEmailLists />} />
          <Route path="/services/b2b-email-list/healthcare-email-lists" element={<HealthcareEmailLists />} />
          <Route path="/services/b2b-email-list/professionals-email-list" element={<ProfessionalsEmailList />} />
          <Route path="/services/b2b-email-list/industry-specific-email-lists" element={<IndustrySpecificEmailLists />} />
          <Route path="/services/b2b-email-list/b2b-sales-email-lists" element={<B2BSalesEmailLists />} />
          <Route path="/services/b2b-email-list/custom-mail-list" element={<CustomMailList />} />
          
          {/* Other Services */}
          <Route path="/services/all-conferences-attendees-list" element={<AllConferencesAttendeesList />} />
          <Route path="/services/data-enrichment" element={<DataEnrichment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/website-design-development" element={<WebsiteDesignDevelopment />} />
          
          {/* Resource Pages */}
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/brochure" element={<Brochure />} />
          <Route path="/resources/newsletter" element={<Newsletter />} />
          <Route path="/resources/careers" element={<Careers />} />
          <Route path="/resources/testimonials" element={<Testimonials />} />
          <Route path="/resources/case-study" element={<CaseStudy />} />
          <Route path="/resources/article" element={<Article />} />
          
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/gdpr-compliance" element={<GdprCompliance />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
