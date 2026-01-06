import { Package, TrendingUp, Truck, Globe, CheckCircle, ArrowRight, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      icon: Package,
      title: 'Bulk Wholesale Supply',
      tagline: 'Competitive pricing on high-volume orders',
      description: 'Access wholesale pricing on our complete range of electronics and lifestyle products. From power banks to plush toys, we offer bulk quantities at rates that maximize your profit margins. Minimum order quantities designed to fit businesses of all sizes.',
      capabilities: [
        'Volume-based tiered pricing structure',
        'Minimum order quantities from 50-100 units',
        'Mixed product orders for variety',
        'Flexible payment terms for established partners',
        'Dedicated account manager support',
        'Priority inventory allocation'
      ],
      useCases: [
        'Retail store inventory stocking',
        'Online marketplace seller supply',
        'Corporate gift programs',
        'Event merchandise planning',
        'Seasonal inventory buildup'
      ],
      highlights: ['500+ SKUs', 'Flexible MOQ', 'Bulk Discounts']
    },
    {
      icon: TrendingUp,
      title: 'Product Sourcing & Procurement',
      tagline: 'Find trending products for your market',
      description: 'Let us source the products you need. Our established supplier network across Asia gives you access to trending electronics, charging accessories, lifestyle items, and more. We handle quality verification, negotiation, and logistics so you can focus on sales.',
      capabilities: [
        'Custom product sourcing requests',
        'Market trend analysis and recommendations',
        'Supplier verification and quality checks',
        'Sample ordering before bulk commitment',
        'Competitive price negotiation',
        'Import/export documentation handling'
      ],
      useCases: [
        'Seasonal product line expansion',
        'Exclusive product partnerships',
        'Testing new market categories',
        'Replacing discontinued items',
        'Custom specification requirements'
      ],
      highlights: ['Asia Suppliers', 'Quality Verified', 'Custom Sourcing']
    },
    {
      icon: Globe,
      title: 'Private Label & Custom Branding',
      tagline: 'Build your brand with custom products',
      description: 'Stand out with branded products. We offer private label services on select product lines including power banks, phone accessories, and lifestyle items. Custom packaging, logo placement, and branding options help you build a unique identity.',
      capabilities: [
        'Custom logo and brand placement',
        'Private label packaging design',
        'Product customization options',
        'Color and material variations',
        'Quality control throughout production',
        'Brand protection and exclusivity options'
      ],
      useCases: [
        'Building proprietary product lines',
        'Corporate branded merchandise',
        'Promotional product campaigns',
        'Retail brand differentiation',
        'Gift set and bundle creation'
      ],
      highlights: ['Custom Branding', 'Logo Placement', 'Unique Packaging']
    },
    {
      icon: Truck,
      title: 'Dropshipping Solutions',
      tagline: 'Sell without holding inventory',
      description: 'Start or expand your online business without inventory investment. Our dropshipping program handles storage, packaging, and direct shipping to your customers. You focus on marketing and sales while we manage fulfillment and logistics.',
      capabilities: [
        'Direct-to-customer fulfillment',
        'Automated order processing integration',
        'Branded packing slip options',
        'Real-time inventory synchronization',
        'Tracking number provision',
        '24-48 hour processing time'
      ],
      useCases: [
        'E-commerce store operations',
        'Online marketplace selling',
        'Testing products before bulk buying',
        'Expanding product range risk-free',
        'Multi-channel retail operations'
      ],
      highlights: ['No MOQ', 'Fast Shipping', 'Auto Sync']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Inquiry & Consultation',
      description: 'Contact us with your product needs, quantity requirements, and business goals. We provide product recommendations and pricing.'
    },
    {
      step: '02',
      title: 'Quotation & Samples',
      description: 'Receive detailed quotes with pricing tiers. Request samples to verify product quality before committing to bulk orders.'
    },
    {
      step: '03',
      title: 'Order Confirmation',
      description: 'Finalize your order details, confirm quantities, and arrange payment terms. We provide order confirmation documents.'
    },
    {
      step: '04',
      title: 'Quality Check & Packing',
      description: 'All products undergo quality inspection before packing. We ensure items meet specifications and arrive in perfect condition.'
    },
    {
      step: '05',
      title: 'Shipping & Delivery',
      description: 'Choose from multiple shipping options. Track your order from warehouse to your door with full transparency.'
    },
    {
      step: '06',
      title: 'After-Sales Support',
      description: 'Ongoing support for returns, replacements, and reorders. Build a long-term partnership with dedicated service.'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Quick processing and shipping gets products to you faster so you can start selling sooner'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'All products tested and certified. We stand behind everything we sell with warranty support'
    },
    {
      icon: Users,
      title: 'Partner Success',
      description: 'Your growth is our priority. Dedicated support team helps you succeed at every stage'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Wholesale <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive B2B solutions for electronics and lifestyle products. From bulk supply to dropshipping, we help your business grow.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="text-white" size={36} />
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h2>
                  <p className="text-xl text-cyan-600 dark:text-cyan-400 font-bold mb-6">
                    {service.tagline}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-lg text-sm font-bold border border-cyan-500/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <CheckCircle className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                      What We Provide
                    </h3>
                    <ul className="space-y-3">
                      {service.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                          <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-2xl p-8 border border-blue-500/20 dark:border-blue-500/30">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      Perfect For
                    </h3>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                          <span className="text-cyan-600 dark:text-cyan-400 mr-2">→</span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
              Why Partner With Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all shadow-lg border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
              How We Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Simple, transparent process from inquiry to delivery and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 hover:scale-105 transition-all shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-6xl font-black text-blue-500/20 dark:text-blue-500/30 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="gradient-bg rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Start Ordering?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Get a custom quote for your business needs and start growing your inventory
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl group text-lg"
            >
              Request a Quote
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
