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
import servicesDataProcessImage from '@/assets/services-data-process.jpg';
import { serviceFAQs } from '@/data/serviceFAQs';

const DataProfiling: React.FC = () => {
  const contentBlocks = [
    {
      title: "Optimizing Your Database for More Effective Campaigns",
      content: "At DataInGo Solutions, we recognize the value of having clean, organized data. Our robust data profiling services go beyond just eliminating duplicates—they also address data format inconsistencies and enrich your database with essential insights. By ensuring your contact information is accurate and current, we help maximize the effectiveness of your marketing campaigns. With a combination of manual and automated verification, we maintain the accuracy and reliability of your data, driving higher success rates.",
      imagePosition: 'left' as const,
      image: servicesDataProcessImage
    },
    {
      title: "Maximizing Efficiency and ROI Through Accurate Data",
      content: "Effective data profiling transforms your marketing strategy by ensuring your database is not only clean but enriched with valuable insights. Our team goes beyond basic data cleaning to enhance your contact records, helping you target the right audience with precision. With a well-organized and normalized database, you can optimize your outreach efforts, minimize wasted resources, and focus on high-potential leads. Partnering with DataInGo Solutions means gaining access to data-driven marketing tools that improve engagement, boost ROI, and accelerate business growth. Contact us today to start optimizing your data!",
      imagePosition: 'right' as const,
      image: servicesDataProcessImage
    }
  ];

  const features = [
    "Data Completeness Analysis",
    "Quality Scoring Reports", 
    "Pattern Recognition",
    "Uniqueness Assessment",
    "Distribution Charts",
    "Segmentation Insights"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Data Enrichment', href: '/services/data-enrichment' },
    { name: 'Data Profiling', href: '/services/data-enrichment/data-profiling' }
  ];

  const faqItems = [
    {
      question: "What is data profiling?",
      answer: "Data profiling involves analyzing and refining the structure and quality of your database. It helps uncover inconsistencies, remove duplicate entries, and address data format issues, ensuring that your data is accurate, organized, and ready for impactful marketing campaigns."
    },
    {
      question: "Why is data profiling important for my business?",
      answer: "Data profiling guarantees that your database is organized, accurate, and relevant, resulting in more targeted campaigns, increased email deliverability, and enhanced ROI. It ensures you're reaching the right audience with the right message."
    },
    {
      question: "How does data profiling improve my email campaigns?",
      answer: "Data profiling eliminates duplicate records and verifies contact information, improving email deliverability and reducing the likelihood of your emails being marked as spam."
    },
    {
      question: "What happens if my database is not properly profiled?",
      answer: "Without proper data profiling, your database may contain outdated, inaccurate, or duplicate contacts, resulting in ineffective campaigns, low engagement, and wasted marketing resources."
    },
    {
      question: "How does DataInGo Solutions help with data profiling?",
      answer: "Our data profiling service offers a thorough approach, combining both manual and automated verification, duplicate removal, and correction of data formats. We ensure your database is optimized for precise targeting, leading to more successful campaign results."
    },
    {
      question: "What are the benefits of using DataInGo Solutions for data profiling?",
      answer: "Leveraging advanced tools and expert insights, we clean and validate your data to enhance deliverability, minimize marketing waste, and maximize ROI. Our service ensures you're reaching the right audience with precise and reliable contact details."
    },
    {
      question: "Can data profiling help with lead generation?",
      answer: "Absolutely, data profiling helps identify high-value leads by structuring your database and ensuring the accuracy of your potential customer information. This results in more efficient and effective lead generation."
    },
    {
      question: "How often should I update my database with data profiling?",
      answer: "It's advisable to update your database on a regular basis to keep your data accurate and current. While the ideal frequency may vary depending on your business size and type, updating it quarterly or bi-annually is generally a good approach."
    },
    {
      question: "How can I get started with data profiling?",
      answer: "Reach out to DataInGo Solutions today to begin optimizing your data with our profiling services. Our team of experts will assist you in cleaning, verifying, and organizing your data to enhance the success of your marketing campaigns."
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
        title="Data Profiling Services"
        subtitle="Enhance Your Insight into Prospects with Data Profiling. Analyze and understand your database quality with detailed profiling reports"
        primaryCTA={{
          text: "Enquire Now",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "#features"
        }}
        backgroundImage={servicesDataProcessImage}
      />

      {/* Service Description with Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Data Profiling Services
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Data profiling is an essential tool for enhancing the structure and accuracy of your database. It allows you to identify key data sets, leading to more precise and impactful campaigns. At DataInGo Solutions, we follow a thorough profiling and validation process to ensure your database remains relevant and of the highest quality.
              </p>
              
              <div className="mt-8 text-left">
                <p className="text-lg text-muted-foreground mb-6">Our approach includes:</p>
                <div className="space-y-3 mb-8">
                  {[
                    "Eliminating duplicate entries",
                    "Both manual and automated validation and verification",
                    "Standardizing data formats",
                    "Enriching target profiles with actionable insights and intelligence fields"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-lg text-muted-foreground mb-6">
                  By removing duplicates, we help you extend the reach of your email campaigns and minimize the risk of being flagged as spam. Duplicate records can significantly hinder your database's effectiveness, but we have the tools to resolve this. Our validation process ensures that you always have accurate and updated contact information, saving you valuable time and resources.
                </p>
                
                <p className="text-lg text-muted-foreground mb-6">
                  We handle various data formats, ensuring smooth integration and efficient use of your data. Our goal is to optimize your database, enabling you to launch more focused campaigns and achieve higher ROI.
                </p>
                
                <p className="text-lg text-muted-foreground">
                  Let DataInGo Solutions help you clean and profile your database. Contact our experts today!
                </p>
              </div>
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
      <section className="py-24 bg-muted/30">
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

      {/* Related Services */}
      <TilesGrid />

      {/* Process Flow */}
      <ProcessFlow />

      {/* Reasons Grid */}
      <ReasonsGrid />

      {/* Service FAQs */}
      <ServiceFAQs 
        serviceName="Data Profiling" 
        faqs={faqItems} 
      />

      {/* Final CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to Profile Your Data?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start optimizing your database quality today with our professional data profiling services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get Your Data Profiled</Link>
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

export default DataProfiling;