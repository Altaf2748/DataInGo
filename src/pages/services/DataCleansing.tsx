import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TilesGrid from '@/components/TilesGrid';
import ProcessFlow from '@/components/ProcessFlow';
import ReasonsGrid from '@/components/ReasonsGrid';
import ServiceFAQs from '@/components/ServiceFAQs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import dataCleansingHeroImage from '@/assets/services-data-cleansing-hero.jpg';
import dataProcessImage from '@/assets/services-data-process.jpg';

const DataCleansing: React.FC = () => {
  const contentBlocks = [
    {
      title: "Set Your Marketing Campaigns on the Path to Success",
      content: "Marketers understand that clean data is essential for running effective campaigns, but maintaining it can be both time-intensive and complex. With DataInGo Solutions, you can streamline the process. Our data cleaning and scrubbing services will refine your database, ensuring improved accuracy and relevance. As a trusted provider, we specialize in delivering high-quality, actionable data. Our CRM data cleansing solutions enable businesses to optimize marketing strategies and achieve superior results. With reliable insights and error-free data, your email campaigns will reach their full potential, driving meaningful growth.",
      imagePosition: 'left' as const,
      image: dataProcessImage
    },
    {
      title: "Eliminate Inaccurate Data and Handle Irrelevant Outliers Effectively",
      content: "As your data grows, so do the risks of errors. Many businesses in the US waste significant resources each year managing 'bad' or 'dirty data'—such as inaccuracies, typos, and incorrect entries. With constantly changing information, it's easy for updates to slip through the cracks, ultimately impacting your operations. That's where we come in. At DataInGo Solutions, we focus on refining your data management processes to ensure accuracy and dependability. Our data quality services leverage advanced tools and technologies to optimize your marketing efforts. By outsourcing your CRM data cleansing, we handle the task efficiently and effectively, so you can rest assured that your data is error-free and ready to deliver results.",
      imagePosition: 'right' as const,
      image: dataProcessImage
    }
  ];

  const advantagesList = [
    {
      number: "01",
      title: "Risk-Free Trial",
      description: "Try all our services with a free trial, giving you the chance to explore without any commitment."
    },
    {
      number: "02", 
      title: "Informed Decision Making",
      description: "Clean, accurate data enables you to make smarter decisions, enhancing your campaign outcomes."
    },
    {
      number: "03",
      title: "Quick Turnaround",
      description: "Our streamlined data cleansing process ensures rapid results, allowing you to meet tight deadlines effortlessly."
    },
    {
      number: "04",
      title: "Higher ROI",
      description: "Cleaned data leads to better targeting, increased conversions, and improved revenue, ensuring a faster return on your investment."
    },
    {
      number: "05",
      title: "Cost-Effective",
      description: "By reaching the right audience faster, you save valuable time and reduce costs while boosting your campaign's efficiency."
    },
    {
      number: "06",
      title: "Data Protection",
      description: "We prioritize the safety of your data with robust security measures, ensuring your information stays protected at all times."
    }
  ];

  const features = [
    "Duplicate Record Removal",
    "Data Standardization", 
    "Format Normalization",
    "Error Correction",
    "Address Validation",
    "Regular Maintenance"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Data Enrichment', href: '/services/data-enrichment' },
    { name: 'Data Cleansing', href: '/services/data-enrichment/data-cleansing' }
  ];

  const faqItems = [
    {
      question: "What is data cleansing?",
      answer: "Data cleansing involves identifying and correcting inaccuracies in your data. This process includes eliminating duplicates, fixing errors, and ensuring that all information is accurate, current, and properly formatted."
    },
    {
      question: "Why is data cleansing important for my business?",
      answer: "Clean data empowers you to make more informed decisions, optimize marketing efforts, and drive higher sales. By removing inaccurate or outdated information, you save time and resources, ensuring your campaigns connect with the right audience and deliver accurate messaging."
    },
    {
      question: "How does data cleansing improve my marketing efforts?",
      answer: "Clean data enables you to reach the right audience more efficiently, leading to better engagement and higher conversion rates. It ensures your emails, ads, and promotions are directed at the correct contacts, maximizing the impact of your marketing efforts."
    },
    {
      question: "How often should I clean my data?",
      answer: "Regular data cleaning is essential, ideally every 6-12 months. However, due to the constant changes in information, such as job transitions or email address updates, more frequent cleaning may be required to keep your data as accurate and effective as possible."
    },
    {
      question: "What kind of data does your cleaning service handle?",
      answer: "We specialize in cleaning all types of data, such as contact lists, CRM records, email addresses, customer information, and marketing databases, ensuring they are accurate and aligned with your campaign goals."
    },
    {
      question: "Is data cleansing a one-time process?",
      answer: "No, data cleansing is not a one-time task. As your business expands and your data changes, regular cleaning is essential to keep your information accurate and actionable."
    },
    {
      question: "How do I know if my data needs cleansing?",
      answer: "If you're experiencing low engagement in your marketing campaigns or noticing a high number of bounced emails and undeliverable contacts, it could indicate that your data requires cleaning."
    },
    {
      question: "What benefits can I expect from using your data cleansing service?",
      answer: "With clean data, you'll experience more precise targeting, higher ROI, improved reporting accuracy, and a more streamlined marketing strategy. It enables better decision-making and enhances customer satisfaction."
    },
    {
      question: "How secure is my data during the cleansing process?",
      answer: "We prioritize data security by adhering to stringent protocols, safeguarding your information throughout the entire cleansing process to prevent unauthorized access or data breaches."
    },
    {
      question: "How long does the data cleansing process take?",
      answer: "The time needed varies based on the size and complexity of your data, but we aim to complete the process swiftly and efficiently without compromising on accuracy."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Breadcrumbs */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span>/</span>}
                <Link 
                  to={crumb.href} 
                  className={index === breadcrumbs.length - 1 
                    ? "text-foreground font-medium" 
                    : "hover:text-foreground transition-colors"
                  }
                >
                  {crumb.name}
                </Link>
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <Hero
        title="Data Cleansing Services"
        subtitle="Maintain Clean Data for Optimal Business Success. Clean, standardize, and maintain high-quality databases for optimal performance"
        primaryCTA={{
          text: "Enquire Now",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "#features"
        }}
        backgroundImage={dataCleansingHeroImage}
      />

      {/* Service Description */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Accurate data is essential for driving successful marketing and business outcomes. At DataInGo Solutions, we specialize in data cleansing services that ensure your information is up-to-date, error-free, and tailored to your needs. Clean data is key to achieving better campaign performance, informed decision-making, and maximizing ROI.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Business data degrades at an alarming rate of 2.1% per month. Our data scrubbing services remove duplicates, verify contact details, and improve data quality, so you can focus your campaigns on the right leads at the optimal time.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With DataInGo Solutions, your data remains pristine, current, and aligned with your objectives. Let us help you harness the full potential of your business by providing you with accurate, actionable data to drive success.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Data Cleansing Features
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="features">
              {features.map((feature, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Blocks */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {contentBlocks.map((block, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                block.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl font-bold text-foreground">{block.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{block.content}</p>
                  <Button asChild size="lg" className="w-fit">
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                {block.image && (
                  <div className="flex-1">
                    <img 
                      src={block.image} 
                      alt={block.title} 
                      className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Advantages of Using Data Cleaning Services from DataInGo Solutions
              </h2>
            </div>
            
            <div className="space-y-8">
              {advantagesList.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-background rounded-lg border border-border">
                  <span className="text-2xl font-bold text-primary flex-shrink-0">
                    {advantage.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <TilesGrid />

      {/* Process Flow */}
      <ProcessFlow />

      {/* Reasons Grid */}
      <ReasonsGrid />

      {/* Service FAQs */}
      <ServiceFAQs 
        serviceName="Data Cleansing" 
        faqs={faqItems} 
      />

      {/* Final CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to Clean Your Data?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start improving your database quality today with our professional data cleansing services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get Your Data Cleaned</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="tel:+1-800-123-4567">Call: +1-800-123-4567</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DataCleansing;