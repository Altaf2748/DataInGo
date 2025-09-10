import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, User, Share2, ArrowLeft, ArrowRight } from 'lucide-react';

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  category: string;
  content: string;
  image?: string;
  relatedPosts?: Array<{
    id: string;
    title: string;
    href: string;
    image?: string;
  }>;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  author,
  date,
  category,
  content,
  image,
  relatedPosts = []
}) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumbs */}
      <section className="py-4 bg-accent/30">
        <div className="container-custom">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li><Link to="/" className="text-sm font-medium text-foreground/70 hover:text-primary">Home</Link></li>
              <li><Link to="/resources" className="text-sm font-medium text-foreground/70 hover:text-primary">Resources</Link></li>
              <li><Link to="/resources/blog" className="text-sm font-medium text-foreground/70 hover:text-primary">Blog</Link></li>
              <li><span className="text-sm font-medium text-foreground/50">{title}</span></li>
            </ol>
          </nav>
        </div>
      </section>

      <article className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <Link 
              to="/resources/blog"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {category}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
                {title}
              </h1>

              <div className="flex items-center text-foreground/60 space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>{author}</span>
                </div>
                <button className="flex items-center space-x-2 hover:text-primary transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>

              {/* Featured Image */}
              {image ? (
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
                />
              ) : (
                <div className="w-full h-64 md:h-96 bg-gradient-primary rounded-xl flex items-center justify-center mb-8">
                  <div className="text-hero-text text-center">
                    <div className="text-2xl font-bold mb-2">{category}</div>
                    <div className="text-sm opacity-80">Featured Article</div>
                  </div>
                </div>
              )}
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <div className="text-foreground/80 leading-relaxed space-y-6">
                    {content.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-12 p-8 bg-accent/30 rounded-xl text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
                      Ready to Transform Your Business?
                    </h3>
                    <p className="text-foreground/70 mb-6">
                      Get expert guidance and start seeing results with our proven data solutions.
                    </p>
                    <Link to="/contact" className="btn-primary">
                      Get Free Consultation
                    </Link>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8 space-y-8">
                    {/* Newsletter Signup */}
                    <div className="bg-card rounded-xl p-6 shadow-card">
                      <h4 className="text-lg font-semibold text-foreground mb-4">
                        Subscribe to Our Newsletter
                      </h4>
                      <p className="text-foreground/70 text-sm mb-4">
                        Get the latest insights on data marketing and business growth.
                      </p>
                      <form className="space-y-3">
                        <input 
                          type="email" 
                          placeholder="Your email"
                          className="form-input text-sm"
                        />
                        <button type="submit" className="w-full btn-primary text-sm py-2">
                          Subscribe
                        </button>
                      </form>
                    </div>

                    {/* Categories */}
                    <div className="bg-card rounded-xl p-6 shadow-card">
                      <h4 className="text-lg font-semibold text-foreground mb-4">
                        Categories
                      </h4>
                      <ul className="space-y-2">
                        <li><Link to="/resources/blog?category=b2b-email-lists" className="text-foreground/70 hover:text-primary text-sm">B2B Email Lists</Link></li>
                        <li><Link to="/resources/blog?category=data-enrichment" className="text-foreground/70 hover:text-primary text-sm">Data Enrichment</Link></li>
                        <li><Link to="/resources/blog?category=digital-marketing" className="text-foreground/70 hover:text-primary text-sm">Digital Marketing</Link></li>
                        <li><Link to="/resources/blog?category=seo" className="text-foreground/70 hover:text-primary text-sm">SEO Services</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-16 pt-16 border-t border-border">
                <h3 className="text-2xl font-bold text-foreground mb-8 font-poppins">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((post) => (
                    <Link key={post.id} to={post.href} className="group">
                      <div className="card-elevated">
                        <div className="aspect-[16/10] bg-gradient-primary rounded-t-xl overflow-hidden">
                          {post.image ? (
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-hero-text">
                              <ArrowRight className="w-8 h-8" />
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {post.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;