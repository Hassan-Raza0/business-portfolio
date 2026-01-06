import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: '2025 Wholesale Electronics Trends: What Retailers Need to Know',
      excerpt: 'Stay ahead of the curve with insights on trending electronics and lifestyle products that are driving sales in 2025.',
      date: 'January 5, 2026',
      readTime: '7 min read',
      category: 'Market Trends',
      tags: ['Trends', 'Electronics', 'Business Strategy']
    },
    {
      title: 'Power Bank Buying Guide: Capacity, Features, and Quality Standards',
      excerpt: 'Everything you need to know about selecting the right power banks for your retail inventory. From mAh ratings to certifications.',
      date: 'December 28, 2025',
      readTime: '10 min read',
      category: 'Product Guide',
      tags: ['Power Banks', 'Buying Guide', 'Quality']
    },
    {
      title: 'Building a Successful Online Retail Business with Wholesale Sourcing',
      excerpt: 'Proven strategies for launching and growing your online retail store using wholesale products. Real-world tips from successful sellers.',
      date: 'December 20, 2025',
      readTime: '12 min read',
      category: 'Business Growth',
      tags: ['E-commerce', 'Wholesale', 'Strategy']
    },
    {
      title: 'Understanding MOQ: How to Negotiate with Wholesale Suppliers',
      excerpt: 'Master the art of minimum order quantities. Learn negotiation tactics and how to structure orders for maximum profitability.',
      date: 'December 10, 2025',
      readTime: '8 min read',
      category: 'Business Tips',
      tags: ['MOQ', 'Negotiation', 'Wholesale']
    },
    {
      title: 'Quality Control Checklist for Wholesale Electronics Importers',
      excerpt: 'Protect your business and customers with this comprehensive quality control checklist for electronics imports.',
      date: 'November 25, 2025',
      readTime: '9 min read',
      category: 'Quality Assurance',
      tags: ['Quality Control', 'Imports', 'Standards']
    },
    {
      title: 'Top 10 Fast-Moving Lifestyle Products for Q1 2026',
      excerpt: 'Data-driven insights on the hottest lifestyle accessories and gift items flying off shelves this quarter.',
      date: 'November 15, 2025',
      readTime: '6 min read',
      category: 'Product Trends',
      tags: ['Lifestyle', 'Hot Products', 'Inventory']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Business <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Expert insights on wholesale business, product sourcing, market trends, and growth strategies for retailers and resellers.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="gradient-bg rounded-3xl p-12 text-white shadow-2xl">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4 backdrop-blur-sm">
                Featured Article
              </span>
              <h2 className="text-4xl font-black mb-4">
                2025 Wholesale Electronics Trends: What Retailers Need to Know
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Discover the hottest product trends, emerging categories, and market insights that will help you stock the right inventory and stay ahead of competitors in 2025.
              </p>
              <div className="flex items-center gap-6 mb-8 text-white/80">
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  January 5, 2026
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  7 min read
                </div>
              </div>
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all group">
                Read Article
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Practical guides and insights to grow your retail business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-all group shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-500/30">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded border border-gray-200 dark:border-gray-700"
                      >
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 font-bold text-sm flex items-center group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
              Browse by Category
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Market Trends', count: '15 articles' },
              { name: 'Product Guides', count: '22 articles' },
              { name: 'Business Growth', count: '18 articles' },
              { name: 'Quality & Standards', count: '12 articles' }
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:scale-105 transition-all cursor-pointer group shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {category.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Get the latest market trends, product updates, and business tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500"
            />
            <button className="btn-primary px-8 py-4 text-white font-bold rounded-xl whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Connect CTA */}
      <section className="py-16 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
            Ready to Start Your Wholesale Journey?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Have questions about products, pricing, or wholesale partnerships?
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center px-10 py-5 text-white font-bold rounded-xl transition-all duration-300 group text-lg shadow-lg"
          >
            Contact Us
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
