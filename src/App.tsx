import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
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

// Data Enrichment Subpages
import EmailAppend from "./pages/services/EmailAppend";
import DataAppend from "./pages/services/DataAppend";
import DataVerification from "./pages/services/DataVerification";
import DataProfiling from "./pages/services/DataProfiling";
import DataIntelligence from "./pages/services/DataIntelligence";
import DataCleansing from "./pages/services/DataCleansing";

// Digital Marketing Subpages
import EmailCampaigns from "./pages/services/EmailCampaigns";
import LinkedInCampaigns from "./pages/services/LinkedInCampaigns";
import EventMarketing from "./pages/services/EventMarketing";
import ContentWritingServices from "./pages/services/ContentWritingServices";
import SocialMediaCreation from "./pages/services/SocialMediaCreation";
import LinkedInAccountManagement from "./pages/services/LinkedInAccountManagement";

// Resource Pages
import Resources from "./pages/Resources";
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
        <ScrollToTop />
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
          <Route path="/services/data-enrichment/email-append" element={<EmailAppend />} />
          <Route path="/services/data-enrichment/data-append" element={<DataAppend />} />
          <Route path="/services/data-enrichment/data-verification" element={<DataVerification />} />
          <Route path="/services/data-enrichment/data-profiling" element={<DataProfiling />} />
          <Route path="/services/data-enrichment/data-intelligence" element={<DataIntelligence />} />
          <Route path="/services/data-enrichment/data-cleansing" element={<DataCleansing />} />
          
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/digital-marketing/email-campaigns" element={<EmailCampaigns />} />
          <Route path="/services/digital-marketing/linkedin-campaigns" element={<LinkedInCampaigns />} />
          <Route path="/services/digital-marketing/event-marketing" element={<EventMarketing />} />
          <Route path="/services/digital-marketing/content-writing-services" element={<ContentWritingServices />} />
          <Route path="/services/digital-marketing/social-media-creation" element={<SocialMediaCreation />} />
          <Route path="/services/digital-marketing/linkedin-account-management" element={<LinkedInAccountManagement />} />
          
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/website-design-development" element={<WebsiteDesignDevelopment />} />
          
          {/* Resource Pages */}
          <Route path="/resources" element={<Resources />} />
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
