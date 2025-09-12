import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobList from '@/components/JobList';
import { Users, Heart, TrendingUp, Award, Coffee, Globe } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumbs */}
      <section className="py-4 bg-accent/30">
        <div className="container-custom">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li><a href="/" className="text-sm font-medium text-foreground/70 hover:text-primary">Home</a></li>
              <li><a href="/resources" className="text-sm font-medium text-foreground/70 hover:text-primary">Resources</a></li>
              <li><span className="text-sm font-medium text-foreground/50">Careers</span></li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-primary">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-text mb-6 font-poppins">
            Join Our Growing Team
          </h1>
          <p className="text-xl text-hero-text/90 mb-8 max-w-3xl mx-auto">
            Build your career with DataInGo Solutions and help businesses worldwide 
            achieve their growth objectives through data-driven marketing solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#open-positions" className="bg-hero-text text-primary font-semibold px-8 py-4 rounded-lg hover:bg-hero-text/90 transition-colors">
              View Open Positions
            </a>
            <a href="/contact" className="border-2 border-hero-text text-hero-text font-medium px-8 py-4 rounded-lg hover:bg-hero-text hover:text-primary transition-all duration-300">
              Contact HR
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              Why Choose DataInGo Solutions?
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              We're not just a workplace—we're a community of passionate professionals 
              dedicated to innovation, growth, and making a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-hero-text" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
                Career Growth
              </h3>
              <p className="text-foreground/70">
                Accelerate your career with continuous learning opportunities, 
                mentorship programs, and clear advancement paths.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-hero-text" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
                Remote-First Culture
              </h3>
              <p className="text-foreground/70">
                Work from anywhere with our flexible remote-first approach that 
                promotes work-life balance and global collaboration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-hero-text" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
                Collaborative Team
              </h3>
              <p className="text-foreground/70">
                Join a diverse, inclusive team where every voice matters and 
                collaboration drives innovation and success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-hero-text" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
                Competitive Benefits
              </h3>
              <p className="text-foreground/70">
                Comprehensive health insurance, retirement plans, professional 
                development budget, and performance-based bonuses.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-8 h-8 text-hero-text" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
                Work-Life Balance
              </h3>
              <p className="text-foreground/70">
                Flexible schedules, unlimited PTO policy, and wellness programs 
                to help you maintain a healthy work-life balance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-hero-text" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 font-poppins">
                Mission-Driven Work
              </h3>
              <p className="text-foreground/70">
                Make a real impact by helping businesses grow and succeed through 
                innovative data solutions and marketing strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 md:py-24 bg-accent/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
              Open Positions
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Discover exciting opportunities to grow your career and make an impact 
              in the data marketing industry.
            </p>
          </div>

          <JobList />
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
                Our Company Culture
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                At DataInGo Solutions, we believe that great results come from great people. 
                Our culture is built on innovation, collaboration, and continuous learning. 
                We foster an environment where creativity thrives and every team member 
                can contribute to our shared success.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                Whether you're just starting your career or are an experienced professional, 
                you'll find opportunities to grow, learn, and make a meaningful impact on 
                businesses around the world.
              </p>
              <a href="/contact" className="btn-primary">
                Learn More About Our Culture
              </a>
            </div>

            <div className="bg-gradient-primary rounded-2xl p-8 text-hero-text">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Our Values</h3>
                <div className="space-y-4">
                  <div className="bg-hero-text/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Innovation</h4>
                    <p className="text-sm">We constantly seek new ways to solve challenges and deliver value.</p>
                  </div>
                  <div className="bg-hero-text/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Integrity</h4>
                    <p className="text-sm">We conduct business with honesty, transparency, and ethical practices.</p>
                  </div>
                  <div className="bg-hero-text/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Excellence</h4>
                    <p className="text-sm">We strive for the highest quality in everything we do.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;