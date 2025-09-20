import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TilesGrid from '@/components/TilesGrid';
import ProcessFlow from '@/components/ProcessFlow';
import ReasonsGrid from '@/components/ReasonsGrid';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import industrySpecificHeroImage from '@/assets/services-industry-specific-hero.jpg';
import servicesDataAnalyticsImage from '@/assets/services-data-analytics.jpg';
import servicesGlobalNetworkingImage from '@/assets/services-global-networking.jpg';

const IndustrySpecificEmailLists: React.FC = () => {
  const contentBlocks = [
    {
      title: "Targeted Industry-Specific Email Lists for Every Sector",
      content: "Access comprehensive email lists tailored to specific industries including manufacturing, retail, finance, construction, education, and more. Our industry-specific databases provide verified contacts from decision-makers within each sector, ensuring your campaigns reach the most relevant prospects for your business.",
      imagePosition: 'left' as const,
      image: servicesDataAnalyticsImage
    },
    {
      title: "Deep Industry Segmentation and Filtering",
      content: "Filter contacts by industry sub-sectors, company size, revenue, geographic location, and job functions. Whether you're targeting automotive manufacturers, retail chain executives, or financial services professionals, our granular segmentation capabilities help you reach your ideal prospects.",
      imagePosition: 'right' as const,
      image: servicesGlobalNetworkingImage
    },
    {
      title: "Industry-Leading Data Accuracy and Compliance",
      content: "Our industry-specific lists are continuously updated with new contacts and verified through multiple industry sources. We maintain partnerships with industry associations and trade organizations to ensure our data reflects the latest industry changes and personnel updates.",
      imagePosition: 'left' as const,
      image: servicesDataAnalyticsImage
    },
    {
      title: "Maximize ROI with Industry-Focused Campaigns",
      content: "Leverage our industry-specific targeting to create highly relevant marketing campaigns that resonate with your audience. Our lists help you speak the language of each industry and address sector-specific pain points, resulting in higher engagement and conversion rates.",
      imagePosition: 'right' as const,
      image: servicesGlobalNetworkingImage
    },
    {
      title: "Comprehensive Coverage Across All Major Industries",
      content: "From emerging sectors like renewable energy and fintech to established industries like manufacturing and healthcare, our database covers all major industry verticals. Choose from our pre-built industry lists or work with our team to create custom industry-specific targeting for your unique needs.",
      imagePosition: 'left' as const,
      image: servicesDataAnalyticsImage
    }
  ];

  const features = [
    "50+ Industry Verticals",
    "Sub-Industry Targeting",
    "Company Size Filtering",
    "Revenue-Based Segmentation",
    "Industry Association Data",
    "Trade Organization Contacts"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'B2B Email Lists', href: '/services/b2b-email-list' },
    { name: 'Industry-Specific Email Lists', href: '/services/b2b-email-list/industry-specific-email-lists' }
  ];

  const title = "Industry-Specific Email Lists";
  const subtitle = "Targeted email lists customized for your specific industry vertical";
  const description = "Reach decision-makers in your target industry with our comprehensive industry-specific email lists. From manufacturing and retail to finance and healthcare, our database covers all major industry verticals with verified, up-to-date contact information.";

  const sicCodeData = [
    { code: "01-09", industry: "Agriculture, Forestry, Fishing" },
    { code: "01", industry: "Agricultural Production - Crops" },
    { code: "02", industry: "Agricultural Production - Livestock" },
    { code: "07", industry: "Agricultural Services" },
    { code: "08", industry: "Forestry" },
    { code: "09", industry: "Fishing, Hunting and Trapping" },
    { code: "10-14", industry: "Mining" },
    { code: "10", industry: "Metal Mining" },
    { code: "12", industry: "Bituminous Coal and Lignite Mining" },
    { code: "13", industry: "Oil and Gas Extraction" },
    { code: "14", industry: "Mining and Quarrying of Nonmetallic Minerals" },
    { code: "15-17", industry: "Construction" },
    { code: "15", industry: "Building Construction General Contractors and Operative Builders" },
    { code: "16", industry: "Heavy Construction other than Building Construction Contractors" },
    { code: "17", industry: "Construction Special Trade Contractors" },
    { code: "40-49", industry: "Transportation & Public Utilities" },
    { code: "40", industry: "Railroad Transportation" },
    { code: "41", industry: "Local and Suburban Transit and Interurban Highway Passenger Transportation" },
    { code: "42", industry: "Motor Freight Transportation and Warehousing" },
    { code: "43", industry: "United States Postal Service" },
    { code: "44", industry: "Water Transportation" },
    { code: "45", industry: "Transportation by Air" },
    { code: "46", industry: "Pipelines, except Natural Gas" },
    { code: "47", industry: "Transportation Services" },
    { code: "48", industry: "Communications" },
    { code: "49", industry: "Electric, Gas and Sanitary Services" },
    { code: "50-51", industry: "Wholesale Trade" },
    { code: "50", industry: "Wholesale Trade-Durable Goods" },
    { code: "51", industry: "Wholesale Trade-Nondurable Goods" },
    { code: "52-59", industry: "Retail Trade" },
    { code: "52", industry: "Building Materials, Hardware, Garden Supply, and Mobile Home Dealers" },
    { code: "53", industry: "General Merchandise Stores" },
    { code: "54", industry: "Food Stores" },
    { code: "55", industry: "Automotive Dealers and Gasoline Service Stations" },
    { code: "56", industry: "Apparel and Accessory Stores" },
    { code: "57", industry: "Home Furniture, Furnishings, and Equipment Stores" },
    { code: "58", industry: "Eating and Drinking Places" },
    { code: "59", industry: "Miscellaneous Retail" },
    { code: "60-67", industry: "Finance, Insurance, Real Estate" },
    { code: "60", industry: "Depository Institutions" },
    { code: "61", industry: "Non-Depository Credit Institutions" },
    { code: "62", industry: "Security and Commodity Brokers, Dealers, Exchanges, and Services" },
    { code: "63", industry: "Insurance Carriers" },
    { code: "64", industry: "Insurance Agents, Brokers and Service" },
    { code: "65", industry: "Real Estate" },
    { code: "67", industry: "Holding and other Investment Offices" },
    { code: "70-89", industry: "Services" },
    { code: "70", industry: "Hotels, Rooming Houses, Camps, and other Lodging Places" },
    { code: "72", industry: "Personal Services" },
    { code: "73", industry: "Business Services" },
    { code: "75", industry: "Automotive Repair, Services, and Parking" },
    { code: "76", industry: "Miscellaneous Repair Services" },
    { code: "78", industry: "Motion Pictures" },
    { code: "79", industry: "Amusement and Recreation Services" },
    { code: "80", industry: "Health Services" },
    { code: "81", industry: "Legal Services" },
    { code: "82", industry: "Educational Services" },
    { code: "83", industry: "Social Services" },
    { code: "84", industry: "Museums, Art Galleries, and Botanical and Zoological Gardens" },
    { code: "86", industry: "Membership Organizations" },
    { code: "87", industry: "Engineering, Accounting, Research, Management, and Related Services" },
    { code: "88", industry: "Private Households" },
    { code: "89", industry: "Miscellaneous Services" },
    { code: "91-99", industry: "Public Administration" },
    { code: "91", industry: "Executive, Legislative, and General Government, except Finance" },
    { code: "92", industry: "Justice, Public Order, and Safety" },
    { code: "93", industry: "Public Finance, Taxation, and Monetary Policy" },
    { code: "94", industry: "Administration of Human Resource Programs" },
    { code: "95", industry: "Administration of Environmental Quality and Housing Programs" },
    { code: "96", industry: "Administration of Economic Programs" },
    { code: "97", industry: "National Security and International Affairs" },
    { code: "98", industry: "Nonclassifiable Establishments" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumbs */}
      <section className="py-4 bg-accent/30">
        <div className="container-custom">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="inline-flex items-center">
                  {index > 0 && (
                    <svg className="w-3 h-3 text-foreground/40 mx-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  <Link
                    to={crumb.href}
                    className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                  >
                    {crumb.name}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <Hero 
        title={title}
        subtitle={subtitle || description}
        primaryCTA={{
          text: "CONTACT US NOW",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Get Quote",
          href: "/contact"
        }}
        backgroundImage={industrySpecificHeroImage}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              {description}
            </p>
            
            {features.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-left">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Content Blocks */}
      {contentBlocks.map((block, index) => (
        <section key={index} className={`py-16 md:py-24 ${index % 2 === 1 ? 'bg-accent/20' : 'bg-background'}`}>
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              block.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <div className={block.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-poppins">
                  {block.title}
                </h3>
                <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                  {block.content}
                </p>
                <Link to="/contact" className="btn-outline inline-flex items-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Image */}
              <div className={block.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}>
                {block.image ? (
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={block.image} 
                      alt={block.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-gradient-primary rounded-2xl aspect-[4/3] flex items-center justify-center">
                    <div className="text-hero-text text-center">
                      <div className="w-24 h-24 bg-hero-text/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <CheckCircle className="w-12 h-12" />
                      </div>
                      <h4 className="text-xl font-semibold">{block.title}</h4>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Section 1: Trusted Provider */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center font-poppins">
              Trusted Provider of Industry-Specific Data Lists Across the USA
            </h2>
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                Looking to grow your business and connect with the right audience? DataInGo Solutions is a leading provider of industry-specific data lists in the USA. We deliver carefully curated and verified contact lists across a wide range of industries, helping you engage with key professionals and decision-makers.
              </p>
              <p>
                Whether you operate in technology, healthcare, finance, retail, or any other sector, our lists are tailored to your unique business needs. With accurate, up-to-date data, your marketing campaigns reach the right people at the right time. Our highly segmented lists allow targeting by job title, company size, location, and more.
              </p>
              <p>
                We recognize that every business has distinct goals, so we offer flexible, reliable, and cost-effective solutions designed to maximize your return on investment.
              </p>
              <p>
                By choosing DataInGo Solutions, you gain access to a premium-quality database that powers your marketing efforts and accelerates business growth. Start targeting your ideal audience with precision and increase your sales with the best industry-specific data lists available. Contact us today to learn how we can help!
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>ENQUIRE NOW</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Strategic Foundation */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center font-poppins">
              Develop a Strategic Foundation to Support Long-Term Business Growth
            </h2>
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                At DataInGo Solutions, we specialize in providing industry-specific contact lists that help you connect with the right audience and accelerate business growth. Our expertly curated databases are designed to reach decision-makers and professionals across a wide range of industries—including technology, healthcare, finance, manufacturing, and more.
              </p>
              <p>
                With accurate, up-to-date contact information, you can target key individuals based on job title, company size, location, and other critical criteria—ensuring your message lands in front of the right people. Whether you're launching a new product, expanding into new markets, or running a focused campaign, our industry-specific lists make it easy to reach potential customers and strategic partners.
              </p>
              <p>
                Our lists are not only reliable and highly targeted but also cost-effective—offering exceptional value for your marketing investment. By starting with the right data, you can boost lead generation, strengthen customer engagement, and lay the foundation for long-term business success.
              </p>
              <p>
                Partner with DataInGo Solutions to power your marketing strategies with precise, industry-driven data. Contact us today to start reaching your ideal audience with confidence and clarity.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>ENQUIRE NOW</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Executive Contact List */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center font-poppins">
              Industry-Specific Executive Contact List
            </h2>
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                At DataInGo Solutions, our industry-specific executive lists empower you to reach top-level professionals—such as CEOs, CFOs, CTOs, and other influential decision-makers—across a wide range of sectors. Whether you're targeting the technology, healthcare, finance, or manufacturing space, our data helps you engage the right audience with precision.
              </p>
              <p>
                Our lists are accurate, up-to-date, and fully segmented by job title, company size, location, industry, and more—ensuring your marketing campaigns are both targeted and effective. With access to the right contacts, you'll enhance engagement, boost lead generation, and gain a competitive advantage in your market.
              </p>
              <p>
                By leveraging our reliable executive data, you can drive more meaningful conversations, close deals faster, and accelerate your business growth.
              </p>
              <p>
                Partner with DataInGo Solutions today to start reaching the right executives and take your marketing strategy to the next level.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>ENQUIRE NOW</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Industry-Wise List with SIC Codes */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center font-poppins">
              Some of Our Industry-Wise List (With SIC CODE)
            </h2>
            <div className="overflow-x-auto">
              <div className="min-w-full bg-background rounded-2xl card-elevated">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-primary text-hero-text">
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider rounded-tl-2xl">
                        Code
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider rounded-tr-2xl">
                        Industry / Subcategory
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-accent/20">
                    {sicCodeData.map((item, index) => (
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-background' : 'bg-accent/10'} hover:bg-accent/20 transition-colors duration-200`}>
                        <td className="px-6 py-4 text-sm font-medium text-foreground">
                          {item.code}
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground/80">
                          {item.industry}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Get Custom Industry List</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Tiles */}
      <TilesGrid 
        title="Related Services"
        subtitle="Explore our other data and marketing solutions"
      />

      {/* Process Flow */}
      <ProcessFlow />

      {/* Reasons to Choose Us */}
      <ReasonsGrid />

      {/* Final CTA */}
      <section className="section-dark py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark-foreground mb-6 font-poppins">
            Ready to Get Started with {title}?
          </h2>
          <p className="text-xl text-secondary-dark-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our experts today for a free consultation and personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-hero">
              Get Free Consultation
            </Link>
            <a 
              href="tel:+13076838467"
              className="border-2 border-hero-text text-hero-text font-medium px-8 py-4 rounded-lg hover:bg-hero-text hover:text-secondary-dark transition-all duration-300"
            >
              Call {/*+1 307 683 8467*/}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustrySpecificEmailLists;