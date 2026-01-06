import { Package, TrendingUp, ShieldCheck, Truck } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: 'Product Sourcing & Procurement',
    description: 'Access to high-demand electronics and lifestyle products from verified suppliers. We source quality products that your customers want, ensuring competitive pricing and reliable supply.',
    capabilities: [
      'Direct factory sourcing',
      'Verified supplier network',
      'Competitive wholesale pricing',
      'Trending product identification'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Bulk Order Management',
    description: 'Flexible bulk ordering solutions tailored to your business size. From small retailers to large distributors, we handle orders of any scale with efficiency.',
    capabilities: [
      'Minimum order flexibility',
      'Volume-based discounts',
      'Custom order fulfillment',
      'Inventory management support'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes ensure you receive only premium products. Every item is inspected and tested before shipment to maintain your business reputation.',
    capabilities: [
      'Pre-shipment inspection',
      'Product testing and certification',
      'Warranty support',
      'Return and exchange policies'
    ]
  },
  {
    icon: Truck,
    title: 'Logistics & Delivery',
    description: 'Reliable shipping and logistics solutions that get products to your location safely and on time. Track your orders from warehouse to doorstep.',
    capabilities: [
      'Fast shipping options',
      'Order tracking system',
      'Secure packaging',
      'International shipping available'
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            B2B Wholesale Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive wholesale solutions that power your retail business.
            From sourcing to delivery, we handle everything so you can focus on growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 border border-blue-100 dark:border-blue-800 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="text-blue-600 dark:text-blue-400 mr-2 font-bold">•</span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
