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
import dataIntelligenceHeroImage from '@/assets/services-data-intelligence-hero.jpg';
import dataAnalyticsImage from '@/assets/services-data-analytics.jpg';

const DataIntelligence: React.FC = () => {
  const contentBlocks = [
    {
      title: "Advanced Business Intelligence & Intent Signals",
      content: "Transform raw data into actionable business intelligence with intent signals, buying behavior analysis, and market insights. Our data intelligence service identifies prospects showing purchase intent and provides strategic recommendations for optimal timing.",
      imagePosition: 'left' as const,
      image: dataAnalyticsImage
    },
    {
      title: "Technographic & Competitive Intelligence", 
      content: "Discover what technologies your prospects use, their digital footprint, and competitive landscape insights. This intelligence enables precise targeting, personalized messaging, and strategic positioning for maximum campaign effectiveness.",
      imagePosition: 'right' as const,
      image: dataAnalyticsImage
    },
    {
      title: "Predictive Analytics & Opportunity Scoring",
      content: "Leverage machine learning algorithms to score leads, predict conversion likelihood, and identify the best opportunities in your pipeline. Our intelligence platform helps prioritize prospects and optimize resource allocation for maximum ROI.",
      imagePosition: 'left' as const,
      image: dataAnalyticsImage
    }
  ];

  const features = [
    "Intent Signal Detection",
    "Technographic Profiling",
    "Behavioral Analytics",
    "Competitive Intelligence",
    "Predictive Lead Scoring",
    "Market Trend Analysis"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Data Enrichment', href: '/services/data-enrichment' },
    { name: 'Data Intelligence', href: '/services/data-enrichment/data-intelligence' }
  ];

  const faqItems = [
    {
      question: "What is Data Intelligence?",
      answer: "Data Intelligence is the process of analyzing, enhancing, and leveraging data to extract meaningful insights. It enables businesses to make smarter decisions, refine strategies, and gain a deeper understanding of customer behaviour for more effective outcomes."
    },
    {
      question: "How to get Data Intelligence Services?",
      answer: "Partner with a trusted provider like DataInGo Solutions to access Data Intelligence services tailored to your needs. Reach out to us, and we'll craft personalized solutions, including data analysis, enrichment, and actionable insights, to help you achieve your business objectives."
    },
    {
      question: "Why is Data Intelligence so important?",
      answer: "Data Intelligence is essential because it converts raw data into actionable insights that inform better decision-making. By harnessing Data Intelligence, businesses can spot emerging trends, discover new opportunities, and gain a deeper understanding of their audience. This leads to stronger customer engagement, more targeted marketing efforts, and improved campaign outcomes. Moreover, it allows organizations to make data-driven decisions that optimize performance and boost ROI. Without Data Intelligence, businesses risk falling behind, facing inefficiencies, and missing key opportunities in an increasingly competitive environment."
    },
    {
      question: "Is DataInGo Solutions Data Intelligence worth it?",
      answer: "Certainly! DataInGo Solutions offers customized Data Intelligence solutions specifically crafted to align with your business objectives. By blending cutting-edge technology, in-depth analysis, and extensive industry expertise, we deliver high-quality insights that drive better targeting, enhance marketing effectiveness, and foster long-term growth."
    },
    {
      question: "How do I implement Data Intelligence in my business?",
      answer: "To implement Data Intelligence successfully, it's essential to choose the right tools, gather accurate data, utilize analytics platforms, and ensure your team is equipped to understand and act on the insights effectively"
    },
    {
      question: "Can Data Intelligence improve customer retention?",
      answer: "Yes, Data Intelligence allows you to uncover customer behaviour trends and preferences, enabling you to deliver personalized messages and offers, which in turn boosts customer satisfaction, loyalty, and retention."
    },
    {
      question: "What industries benefit from Data Intelligence?",
      answer: "Sectors such as healthcare, finance, retail, marketing, and technology see significant advantages from Data Intelligence, as it enhances decision-making, optimizes operations, and enables more tailored services for customers."
    },
    {
      question: "Is Data Intelligence only for large companies?",
      answer: "No, Data Intelligence is valuable for businesses of all sizes. Small and mid-sized companies can also harness data insights to streamline operations, enhance marketing efforts, and fuel growth."
    },
    {
      question: "How do I ensure the accuracy of the data in Data Intelligence?",
      answer: "Accuracy is guaranteed through strict data cleaning, validation, and verification protocols, along with the use of trusted data sources and advanced technologies to keep the data fresh, reliable, and actionable."
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
        title="Data Intelligence Services"
        subtitle="Maximize the Power of Data Insights. Transform data into actionable business intelligence and intent insights"
        primaryCTA={{
          text: "Enquire Now",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "#features"
        }}
        backgroundImage={dataIntelligenceHeroImage}
      />

      {/* Service Description with Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Data Intelligence Services
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We offer Data Intelligence Services designed to help businesses transform raw data into actionable insights. Using cutting-edge tools such as data analytics, visualization, and machine learning, we empower you to make smarter, data-driven decisions. Whether you want to enhance performance, understand customer behavior, or plan for the future, our services deliver clear, customized insights to meet your specific business goals.
              </p>
              
              <div className="text-left space-y-6">
                <div className="space-y-3">
                  {[
                    "We simplify complex data into easy-to-read reports and dashboards, enabling informed decision-making.",
                    "Our detailed data analysis highlights key areas for improvement, helping you reduce costs and optimize operations.",
                    "With predictive analytics, we provide actionable forecasts and trends to help you plan strategically and stay ahead of the competition."
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Better Business Outcomes</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    At DataInGo Solutions, we're dedicated to delivering tangible business outcomes. We transform data into a strategic asset that drives growth, boosts performance, and strengthens your competitive advantage. By leveraging advanced analytics, reporting tools, and predictive models, we provide insights that deliver measurable results across your entire organization.
                  </p>
                  
                  <div className="space-y-3">
                    {[
                      "Our insights empower strategic decisions that lead to higher revenue, improved customer satisfaction, and operational excellence.",
                      "We help you uncover trends, identify gaps, and seize opportunities to enhance efficiency and productivity.",
                      "With our services, you'll create smarter, data-driven business strategies grounded in real-time, reliable information."
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
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
        serviceName="Data Intelligence" 
        faqs={faqItems} 
      />

      {/* Final CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to Unlock Your Data Intelligence?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Transform your raw data into actionable insights today with our AI-powered intelligence platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get Intelligence Insights</Link>
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

export default DataIntelligence;