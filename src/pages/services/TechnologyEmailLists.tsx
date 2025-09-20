import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TilesGrid from '@/components/TilesGrid';
import ProcessFlow from '@/components/ProcessFlow';
import ReasonsGrid from '@/components/ReasonsGrid';
import ServiceFAQs from '@/components/ServiceFAQs';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { serviceFAQs } from '@/data/serviceFAQs';
import technologyHeroImage from '@/assets/services-technology-hero.jpg';
import technologyCodingImage from '@/assets/services-technology-coding.jpg';
import technologyDatacenterImage from '@/assets/services-technology-datacenter.jpg';

const TechnologyEmailLists: React.FC = () => {
  const contentBlocks = [
    {
      title: "Connect with Technology Decision-Makers",
      content: "Access verified contact information for CTOs, IT Directors, Software Engineers, and technology professionals across startups and Fortune 500 companies. Our technology email lists include contacts from software development, cybersecurity, cloud computing, AI/ML, and emerging tech sectors.",
      imagePosition: 'left' as const,
      image: technologyCodingImage
    },
    {
      title: "Target by Technology Stack and Company Size",
      content: "Filter contacts by specific technologies, programming languages, cloud platforms, and software tools. Whether you're targeting companies using specific CRM systems, programming frameworks, or infrastructure solutions, our granular filtering helps you reach the most relevant prospects.",
      imagePosition: 'right' as const,
      image: technologyDatacenterImage
    },
    {
      title: "Industry-Leading Data Accuracy",
      content: "Our technology lists are updated daily with new contacts and verified through multiple touchpoints. We track job changes, company updates, and technology adoptions to ensure you're always reaching active decision-makers in the tech industry.",
      imagePosition: 'left' as const,
      image: technologyCodingImage
    },
    {
      title: "Drive Sales with Precision",
      content: "Leverage our highly-targeted Technology List to connect with key decision-makers across a variety of tech sectors, including software development, IT services, cybersecurity, and cloud computing. Our lists help you engage the right prospects who are primed to benefit from your solutions.",
      imagePosition: 'right' as const,
      image: technologyDatacenterImage
    }, 
    {
      title: "Accelerate Your Marketing Campaigns",
      content: "Get started right away with our clean, verified Technology List—free from invalid contacts and ready to deliver results. The data is fully customizable, enabling you to target specific sectors like SaaS, AI, hardware, and telecommunications for maximum impact.",
      imagePosition: 'left' as const,
      image: technologyCodingImage
    },
    {
      title: "Strengthen Connections, Close More Deals",
      content: "Reach the right audience, deliver the right message, and build lasting relationships that drive sales growth. Choose our Technology List today and give your sales efforts the boost they need!",
      imagePosition: 'right' as const,
      image: technologyDatacenterImage
    },
  ];

  const features = [
    "CTO & IT Director Contacts",
    "Startup to Enterprise Coverage",
    "Technology Stack Filtering",
    "Daily Data Updates",
    "Job Function Segmentation",
    "Geographic Targeting"
  ];

  const keyFeatures = [
    "Precise Targeting: Our list is meticulously segmented by industry, job title, company size, and technology usage, ensuring you reach the most relevant prospects.",
    "Verified and Up-to-Date Data: Access accurate, regularly updated contact information, ensuring high deliverability and reliable outreach.",
    "Broad Tech Coverage: Engage with a diverse range of sectors, from software development and IT services to cybersecurity, cloud computing, SaaS, AI, and beyond.",
    "Fully Customizable: Tailor the list to focus on specific regions, industries, or company sizes, aligning perfectly with your campaign goals.",
    "High-Quality, Validated Leads: We provide clean, opt-in leads, verified to enhance your conversion potential.",
    "Cost-Effective Solutions: Gain access to targeted, high-quality data at a competitive price, ensuring a strong return on investment.",
    "Improved Engagement: Connect with the right audience, boosting your campaign's open rates and click-through performance.",
    "Comprehensive Contact Details: Each contact entry includes essential information like job title and company name, enabling more personalized and effective outreach."
  ];

  const bestSellingDatabases = [
    "ADP Clients List", "Avaya Customers List", "Avaya IP Office Contact List", "Blackbaud Raiser's Edge Nxt Users List",
    "Companies Using AS400", "Hadoop Customers List", "IBM Mainframe Users List", "IBM Maximo ERP Vendors List",
    "IBM SPSS Users List", "IBM Users List", "IBM Websphere Users List", "iCims Users List", "JD Edwards Users List",
    "Litify Software Users List", "Magento Users List", "Microsoft Sharepoint Client List", "MongoDB Users List",
    "Netsuite Users List", "Office 365 Users List", "Peoplesoft Clients List", "Quickbooks Online Users List",
    "QuickBooks Users List", "RingCentral Users List", "Salesforce CRM Users List", "SAP Users List",
    "Servicenow Customers List", "Shopify Plus Users List", "Snowflakes Users List", "Solarwinds Customers List",
    "Stripe Customers List", "Sugarcrm Users List", "Tableau Users List", "Twilio Users List",
    "Value-added Resellers Contact Data", "VMWare Customers List", "WorkBooks Customers List", "ADO Users List",
    "Adobe Users List", "Altova Users List", "Amazon EMR Users List", "Amazon Web Services Users List",
    "Amcom Users List", "Amd Hardware Users List", "Apple iOS Developers List", "Apple Users List",
    "Artificial Intelligence Users List", "AS400/ISeries Users List", "ASP Users List", "AT&T Route It Users List",
    "Autodesk Users List", "Avaya Users List", "BaaN Users List", "BEA ERP Users List", "Big Data Users List",
    "Biometric Software Users List", "BMC Users List", "CA Nimsoft Users List", "Checkpoint Users List",
    "Cisco IOS Users List", "Cisco Users List", "Citrix GoToWebcast Users List", "Citrix Network Users List",
    "Cognos ERP List", "Crm Users List", "Dell AppAssure Users List", "Dell Server Users List", "Deltek ERP Users List",
    "EMC Users List", "Epicor ERP Users List", "ERP GOV Users List", "ERP Users List", "Esri Users List",
    "Google Users List", "Gumbo Users List", "Hadoop Users List", "HP 3Com Network Users List", "HP Users List",
    "HR Software Users List", "Hummingbird ERP Users List", "IBM ERP Users List", "Infor Baan ERP Services Users List",
    "Infor Users List", "InfoVista Technology Users List", "Intel Users List", "IntelliTrack Technology Users List",
    "Intellitrack Users List", "IoT Users List", "IT Decision Makers List", "Java Users List", "JD Edwards User List",
    "Lawson Software Users List", "Linux Users List", "Manage Engine Users List", "Mcafee Users List",
    "Medical Software Users List", "Microsoft SharePoint Users List", "Microsoft Users List", "Mobile App Developers List",
    "Net Application Users List", "NetApp Network Users List", "Netgear Users List", "Netscout Users List",
    "Novell Users List", "NTT Data Users List", "Oracle Database Users List", "OrgPublisher Users List",
    "PeopleSoft Users List", "Sage Erp Users List", "SalesForce Users List", "SAP User List",
    "Siebel Application Users List", "SQL Server Users List", "Sun ERP Users List", "Sybase DBMS Users List",
    "Symantec Enterprise Vault Users List", "Symantec Users List", "Vertiscale Software Users List",
    "Vmware Users List", "Vmware-Hardware Users List", "Volusion Users List", "Webex CRM Users List",
    "WebMethods ERP Users List", "Websense Users List", "Wonderware Users List", "XenApp Users List", "Zoho Users List"
  ];

  const dataHygieneSteps = [
    { title: "Your Lead Data is Safe", description: "We start with a permission-based database to ensure your messages connect with the right audience and drive campaign effectiveness." },
    { title: "Researching Your Top Customers", description: "We complete and enhance your lead data to power more accurate and successful campaigns." },
    { title: "Thorough Validation Process", description: "We ensure data accuracy and reliability through thorough validation using tele-surveys and verified download programs." },
    { title: "Identify Blind Spots", description: "We identify and eliminate invalid contacts — including spam traps, opt-outs, and complainers — to keep your list clean and accurate." },
    { title: "Address Verification", description: "We use trusted SMTP ping tools to verify that email addresses are valid and actively receiving messages." },
    { title: "Running Campaigns", description: "We execute live campaigns with high deliverability and promptly remove opt-outs and bounced emails to keep your list clean and compliant." },
    { title: "Automated Validation", description: "Our team manually verifies each address and enriches the data by adding relevant social media profiles." },
    { title: "Convert Leads to Customers", description: "We run targeted opt-in campaigns to gain explicit consent from prospects, ensuring all opt-outs are removed within 48 hours." }
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'B2B Email Lists', href: '/services/b2b-email-list' },
    { name: 'Technology Email Lists', href: '/services/b2b-email-list/technology-email-lists' }
  ];

  const title = "Power your campaigns with our comprehensive Technology Email Lists";
  const subtitle = "Harness lists that are reliable, adaptable, budget-friendly, and designed to drive impactful results & Reach technology professionals and IT decision-makers";
  const description = "Connect with the technology leaders driving innovation in their organizations. Our comprehensive technology email lists provide verified contacts for software engineers, IT directors, CTOs, and technology decision-makers across companies of all sizes.";

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
        backgroundImage={technologyHeroImage}
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

      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center font-poppins">
              Key Features of Our Technology Users List in the USA and Globally
            </h2>
            <div className="space-y-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-background rounded-xl card-elevated">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-hero-text rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center font-poppins">
              Advantages of Using the Verified Technology Customer Database
            </h2>
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                The technology sector is experiencing rapid growth, fuelled by increased investments. As businesses allocate larger budgets to technology, it becomes crucial to target the right users with your products and services to drive growth.
              </p>
              <p>
                At DataInGo Solutions, we offer a precise and comprehensive Technology User Database tailored for businesses seeking to connect in today's fast-paced market. Our trusted list of technology users gives you a competitive edge, featuring contacts from top brands like Adobe, FreshBooks, Hootsuite, SAP, Sage, Kronos, AWS, MS Dynamics, and more.
              </p>
              <p>
                Technology is reshaping industries worldwide. Whether you're targeting tech users in the USA or abroad, we provide the most accurate technology databases to support your success. Invest today to access premium B2B data and enhance your global marketing efforts.
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

      {/* Best-Selling Databases Section */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center font-poppins">
              Best-Selling Technology Databases and Contact Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bestSellingDatabases.map((database, index) => (
                <div key={index} className="bg-background p-4 rounded-lg card-elevated hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80 font-medium">{database}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Get Custom Database</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Data Hygiene & Validation Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center font-poppins">
              Make sure your data speaks clearly, in the right context, at the right moment
            </h2>
            <p className="text-xl text-foreground/70 text-center mb-12">
              because data hygiene is everything
            </p>
            <div className="space-y-6">
              {dataHygieneSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-accent/10 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-hero-text rounded-xl flex items-center justify-center font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 font-poppins">{step.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Start Data Validation</span>
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

export default TechnologyEmailLists;