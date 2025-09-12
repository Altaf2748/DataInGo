// Cookie Policy page
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-poppins">
              Cookie Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              
              <p className="mb-8">
                This Cookie Policy explains how DataInGo Solutions uses cookies and similar 
                technologies to recognize you when you visit our website.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                What are cookies?
              </h2>
              <p className="mb-6">
                Cookies are small data files that are placed on your computer or mobile device when 
                you visit a website. Cookies are widely used by website owners to make their websites 
                work more efficiently and to provide reporting information.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Why do we use cookies?
              </h2>
              <p className="mb-4">
                We use cookies for several reasons:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>To ensure our website functions properly</li>
                <li>To improve your browsing experience</li>
                <li>To analyze how our website is used</li>
                <li>To remember your preferences</li>
                <li>To provide targeted marketing content</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Types of cookies we use
              </h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                Essential Cookies
              </h3>
              <p className="mb-4">
                These cookies are necessary for the website to function and cannot be switched off 
                in our systems. They are usually set in response to actions made by you.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                Analytics Cookies
              </h3>
              <p className="mb-4">
                These cookies allow us to count visits and traffic sources so we can measure and 
                improve the performance of our site.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                Marketing Cookies
              </h3>
              <p className="mb-6">
                These cookies may be set through our site by our advertising partners to build a 
                profile of your interests and show you relevant adverts.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                How can you control cookies?
              </h2>
              <p className="mb-4">
                You have the right to decide whether to accept or reject cookies. You can:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Set your browser to refuse all cookies</li>
                <li>Set your browser to indicate when a cookie is being sent</li>
                <li>Delete cookies that have already been set</li>
                <li>Use our cookie preference center (if available)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Contact Us
              </h2>
              <p className="mb-6">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-accent/20 p-4 rounded-lg">
                <p><strong>Email:</strong> projects@dataingo.com</p>
                <p><strong>Phone:</strong> +1 307 683 8467</p>
              </div>

              <p className="text-sm text-foreground/60 mt-8">
                <em>Note: This is a general cookie policy template. Please consult with legal counsel 
                to ensure compliance with applicable privacy and cookie regulations.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;