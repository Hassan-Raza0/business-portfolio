import Hero from '../components/Hero';
import { Shield, Zap, CheckCircle, ArrowRight, Package, TrendingUp, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const whyChoose = [
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'All products rigorously tested and certified. Every item meets international quality standards before shipping.'
    },
    {
      icon: Zap,
      title: 'Fast Fulfillment',
      description: 'Efficient order processing and quick delivery. Track your shipments in real-time from warehouse to your door.'
    },
    {
      icon: CheckCircle,
      title: 'Competitive Pricing',
      description: 'Direct factory sourcing ensures best wholesale prices. Volume discounts and flexible payment terms available.'
    }
  ];

  const howItWorks = [
    {
      number: '1',
      title: 'Browse & Select',
      description: 'Explore our extensive product catalog. Choose from electronics, accessories, and trending lifestyle items.'
    },
    {
      number: '2',
      title: 'Request Quote',
      description: 'Submit your bulk order requirements. Receive competitive pricing and terms within 24 hours.'
    },
    {
      number: '3',
      title: 'Order & Receive',
      description: 'Confirm your order and track shipping. Products arrive quality-checked and ready for your customers.'
    }
  ];

  const services = [
    {
      icon: Package,
      title: 'Product Sourcing',
      description: 'Direct access to quality electronics and accessories',
      link: '/services'
    },
    {
      icon: TrendingUp,
      title: 'Bulk Orders',
      description: 'Flexible order quantities with volume discounts',
      link: '/services'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assurance',
      description: 'Certified products with warranty support',
      link: '/services'
    },
    {
      icon: Truck,
      title: 'Global Shipping',
      description: 'Fast and reliable worldwide delivery',
      link: '/services'
    }
  ];

  return (
    <div>
      <Hero />

      {/* Why Choose Section */}
      <section className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Why Fix n Wholesale?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your trusted partner for quality products and business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-10 hover:scale-105 transition-all duration-300 shadow-lg border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="text-white" size={36} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Simple process, exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20"
              >
                <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-4xl font-black bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent">{step.number}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive B2B solutions for your wholesale needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="bg-white dark:bg-gray-900 rounded-xl p-8 hover:scale-105 transition-all duration-300 group shadow-lg border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold inline-flex items-center">
                    Learn more
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="btn-primary inline-flex items-center px-10 py-5 text-white font-bold rounded-xl transition-all duration-300 group text-lg shadow-lg"
            >
              View All Services
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Grow Your Retail Business?
            </h2>
            <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto">
              Partner with Fix n Wholesale for quality products, competitive pricing, and reliable service
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group text-lg"
              >
                Get Quote
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/20 text-lg"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
