import { ExternalLink, ShoppingCart } from 'lucide-react';

const projects = [
  {
    category: 'Power Solutions',
    title: 'Power Bank 10,000mAh',
    description: 'High-capacity portable chargers with fast charging technology. Dual USB ports for simultaneous charging, compact design, and LED battery indicators. Perfect for retailers targeting mobile users.',
    tech: ['10,000mAh', 'Fast Charge', 'Dual Port', 'LED Display'],
    impact: 'Top Seller',
    type: 'In Stock'
  },
  {
    category: 'Charging Solutions',
    title: 'Dual 20W Home Plug Adapter',
    description: 'Premium wall chargers featuring dual 20W USB-C ports for rapid device charging. Universal compatibility with smartphones, tablets, and accessories. Safety certified with overcharge protection.',
    tech: ['20W Output', 'Dual USB-C', 'Fast Charging', 'Safety Certified'],
    impact: 'High Demand',
    type: 'In Stock'
  },
  {
    category: 'Cables & Accessories',
    title: 'Fast Charging Cable',
    description: 'Durable braided cables supporting fast charging protocols. Available in multiple lengths and connector types (USB-C, Lightning, Micro USB). Built to withstand 10,000+ bends.',
    tech: ['Fast Charge', 'Braided Design', 'Multi-Type', 'Durable'],
    impact: 'Best Value',
    type: 'In Stock'
  },
  {
    category: 'Audio Devices',
    title: 'Yesido AirPods 2nd Gen',
    description: 'Premium wireless earbuds with superior sound quality and long battery life. Touch controls, automatic pairing, and comfortable fit. Complete with charging case for on-the-go convenience.',
    tech: ['Wireless', 'Touch Control', 'Long Battery', 'Charging Case'],
    impact: 'Premium Item',
    type: 'In Stock'
  },
  {
    category: 'Storage Solutions',
    title: 'USB + Type-C Flash Drive',
    description: 'Dual-interface flash drives for seamless data transfer between devices. Available in 32GB, 64GB, and 128GB capacities. Compact metal design with keychain attachment.',
    tech: ['Dual Interface', 'Multi-Capacity', 'Metal Build', 'Portable'],
    impact: 'Versatile',
    type: 'In Stock'
  },
  {
    category: 'Lifestyle Products',
    title: 'Plush Toys Collection',
    description: 'Trending collectible plush toys including Naruto characters and Pop Mart series. High-quality materials, authentic designs, and perfect for gift shops and toy retailers.',
    tech: ['Naruto Series', 'Pop Mart', 'Premium Quality', 'Licensed'],
    impact: 'Trending',
    type: 'In Stock'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            High-demand electronics and lifestyle products sourced for your business success.
            Quality tested and ready for wholesale orders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {project.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="mb-4">
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {project.impact}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                  <ShoppingCart size={16} className="mr-1" />
                  Order Now
                </button>
                <button className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                  <ExternalLink size={16} className="mr-1" />
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
