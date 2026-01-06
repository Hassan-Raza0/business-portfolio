import { useState } from 'react';
import { ShoppingBag, Filter, Star } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const products = [
    {
      category: 'Power Banks',
      title: '20000mAh Fast Charging Power Bank',
      specs: 'USB-C PD 20W | Dual Output | LED Display',
      description: 'Premium high-capacity power bank with fast charging technology. Features intelligent chip protection and aluminum alloy casing for durability.',
      features: ['20000mAh capacity', 'USB-C PD 20W fast charge', 'Dual USB output', 'LED display', 'CE & FCC certified'],
      wholesale: 'MOQ: 50 units',
      popular: true
    },
    {
      category: 'Power Banks',
      title: '10000mAh Slim Portable Charger',
      specs: 'Ultra-Slim Design | Dual Output | 18W Fast Charge',
      description: 'Compact and lightweight power bank perfect for everyday carry. Premium finish with multi-protection safety system.',
      features: ['10000mAh capacity', '18W fast charging', 'Ultra-slim 14mm', 'Multi-device charging', 'Travel-friendly'],
      wholesale: 'MOQ: 100 units',
      popular: true
    },
    {
      category: 'Power Banks',
      title: 'Solar Wireless Power Bank 26800mAh',
      specs: 'Solar Panel | Wireless Charging | Waterproof',
      description: 'Outdoor-ready power bank with solar charging capability and wireless charging pad. Perfect for camping and outdoor activities.',
      features: ['26800mAh capacity', 'Solar charging panel', 'Qi wireless charging', 'IP66 waterproof', 'Built-in flashlight'],
      wholesale: 'MOQ: 50 units',
      popular: false
    },
    {
      category: 'Charging Accessories',
      title: 'GaN 65W USB-C Wall Charger',
      specs: '3-Port | Foldable Plug | GaN Technology',
      description: 'Ultra-compact GaN charger delivering 65W power in a pocket-sized design. Perfect for laptops, tablets, and phones.',
      features: ['65W total output', 'GaN technology', '3 ports (2x USB-C, 1x USB-A)', 'Foldable plug', 'Universal compatibility'],
      wholesale: 'MOQ: 100 units',
      popular: true
    },
    {
      category: 'Charging Accessories',
      title: '3-in-1 Wireless Charging Station',
      specs: 'Apple Watch | AirPods | iPhone | Fast Charge',
      description: 'All-in-one charging solution for Apple ecosystem. Premium aluminum design with fast wireless charging.',
      features: ['Charges 3 devices simultaneously', '15W fast wireless charge', 'Apple Watch & AirPods compatible', 'Premium aluminum build', 'LED indicator'],
      wholesale: 'MOQ: 50 units',
      popular: true
    },
    {
      category: 'Charging Accessories',
      title: 'Braided USB-C Cable Set',
      specs: '6ft Length | 100W PD | Nylon Braided',
      description: 'Durable nylon braided cables with reinforced connectors. Supports 100W power delivery and 480Mbps data transfer.',
      features: ['100W power delivery', '6ft length', 'Nylon braided', '10000+ bend tested', 'Available in multiple colors'],
      wholesale: 'MOQ: 200 units',
      popular: false
    },
    {
      category: 'Phone Accessories',
      title: 'Magnetic Phone Ring Holder',
      specs: 'MagSafe Compatible | 360° Rotation | Kickstand',
      description: 'Versatile magnetic ring grip with kickstand functionality. Strong adhesive and premium metal construction.',
      features: ['MagSafe compatible', '360° rotation', 'Kickstand function', 'Strong N52 magnets', 'Universal fit'],
      wholesale: 'MOQ: 200 units',
      popular: true
    },
    {
      category: 'Phone Accessories',
      title: 'Tempered Glass Screen Protector Pack',
      specs: '9H Hardness | HD Clear | Easy Installation',
      description: 'Premium tempered glass with oleophobic coating. Includes alignment frame for bubble-free installation.',
      features: ['9H hardness rating', 'HD clarity', 'Oleophobic coating', 'Easy install kit', 'Case-friendly'],
      wholesale: 'MOQ: 500 units',
      popular: false
    },
    {
      category: 'Phone Accessories',
      title: 'Car Phone Mount with Wireless Charging',
      specs: 'Auto-Clamp | 15W Fast Charge | Vent Mount',
      description: 'Smart auto-clamping car mount with fast wireless charging. Secure hold and easy one-hand operation.',
      features: ['15W wireless charging', 'Auto-clamping mechanism', 'Air vent mount', '360° rotation', 'Dashboard option included'],
      wholesale: 'MOQ: 100 units',
      popular: true
    },
    {
      category: 'Tech Gadgets',
      title: 'Bluetooth 5.3 TWS Earbuds',
      specs: 'Active Noise Cancellation | 40H Battery | IPX7',
      description: 'Premium true wireless earbuds with active noise cancellation. Crystal clear audio and extended battery life.',
      features: ['Bluetooth 5.3', 'ANC technology', '40 hours total battery', 'IPX7 waterproof', 'Touch controls'],
      wholesale: 'MOQ: 50 units',
      popular: true
    },
    {
      category: 'Tech Gadgets',
      title: 'LED Ring Light with Tripod Stand',
      specs: '10" Ring | Dimmable | Remote Control | Phone Holder',
      description: 'Professional lighting for content creators. Adjustable brightness and color temperature with remote control.',
      features: ['10-inch ring light', '3 color modes', 'Dimmable brightness', '52-inch tripod', 'Remote control included'],
      wholesale: 'MOQ: 50 units',
      popular: false
    },
    {
      category: 'Tech Gadgets',
      title: 'Smart Fitness Tracker Watch',
      specs: 'Heart Rate | Sleep Monitor | IP68 | 7-Day Battery',
      description: 'Comprehensive fitness tracking with heart rate monitoring and sleep analysis. Sync with smartphone for notifications.',
      features: ['Heart rate monitor', 'Sleep tracking', '20+ sport modes', '7-day battery', 'IP68 waterproof'],
      wholesale: 'MOQ: 100 units',
      popular: true
    },
    {
      category: 'Lifestyle Accessories',
      title: 'Cute Plush Toy Collection',
      specs: 'Soft Material | 12" Size | Multiple Characters',
      description: 'Adorable plush toys in various characters. Ultra-soft material perfect for gifts and collectibles.',
      features: ['12-inch size', 'Premium soft material', '10+ character designs', 'Gift-ready packaging', 'CE safety certified'],
      wholesale: 'MOQ: 100 units',
      popular: true
    },
    {
      category: 'Lifestyle Accessories',
      title: 'Insulated Stainless Steel Water Bottle',
      specs: '32oz | 24H Cold | 12H Hot | Leak-Proof',
      description: 'Double-wall vacuum insulated bottle keeping drinks cold for 24 hours. Durable stainless steel construction.',
      features: ['32oz capacity', 'Double-wall insulation', '24H cold / 12H hot', 'BPA-free', 'Wide mouth design'],
      wholesale: 'MOQ: 100 units',
      popular: false
    },
    {
      category: 'Lifestyle Accessories',
      title: 'LED Mood Light Bluetooth Speaker',
      specs: 'RGB Lights | Touch Control | 10H Battery',
      description: 'Multifunctional speaker with ambient LED lighting. Perfect for bedroom, office, or outdoor use.',
      features: ['Bluetooth 5.0', 'RGB mood lighting', 'Touch controls', '10-hour battery', 'TF card support'],
      wholesale: 'MOQ: 50 units',
      popular: true
    }
  ];

  const categories = ['All', 'Power Banks', 'Charging Accessories', 'Phone Accessories', 'Tech Gadgets', 'Lifestyle Accessories'];

  const filteredProducts = activeFilter === 'All'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Product <span className="gradient-text">Catalog</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our extensive range of quality electronics and lifestyle products.
            All items quality-tested and certified for your business needs.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-8 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2">
                <span className="gradient-text">500+</span>
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold">Products Available</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">
                <span className="gradient-text">20+</span>
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold">Product Categories</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">
                <span className="gradient-text">100%</span>
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold">Quality Certified</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">
                <span className="gradient-text">150+</span>
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-semibold">Partner Businesses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-6 lg:px-8 sticky top-20 z-40 backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 overflow-x-auto">
            <Filter className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={20} />
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                    activeFilter === category
                      ? 'gradient-bg text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 hover:scale-[1.02] transition-all relative shadow-lg border border-gray-200 dark:border-gray-700"
            >
              {product.popular && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    Popular
                  </span>
                </div>
              )}

              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 shadow-lg">
                <ShoppingBag className="text-white" size={24} />
              </div>

              <div className="mb-2">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/20">
                  {product.category}
                </span>
              </div>

              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                {product.title}
              </h3>

              <p className="text-sm text-cyan-600 dark:text-cyan-400 font-bold mb-3">
                {product.specs}
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                {product.description}
              </p>

              <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-xl p-4 mb-4 border border-gray-200 dark:border-gray-700">
                <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-600 dark:text-gray-300">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {product.wholesale}
                  </span>
                  <button className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    Get Quote →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="gradient-bg rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Need Custom Products?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Can't find what you're looking for? We specialize in custom sourcing and private label services.
              Let us source the exact products your business needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg"
              >
                Request Custom Quote
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-10 py-5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border-2 border-white/20 text-lg"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              All products certified and tested to international standards
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'CE Certified', value: '✓' },
              { label: 'FCC Approved', value: '✓' },
              { label: 'RoHS Compliant', value: '✓' },
              { label: 'ISO Quality', value: '✓' }
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2">
                  {cert.value}
                </div>
                <div className="text-gray-900 dark:text-white font-bold">
                  {cert.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
