const skillCategories = [
  {
    title: 'Electronics & Technology',
    skills: [
      { name: 'Power Banks & Chargers', level: 95 },
      { name: 'Mobile Accessories', level: 92 },
      { name: 'Audio Devices', level: 90 },
      { name: 'Storage Solutions', level: 88 },
      { name: 'Smart Gadgets', level: 85 }
    ]
  },
  {
    title: 'Lifestyle & Collectibles',
    skills: [
      { name: 'Plush Toys & Figures', level: 90 },
      { name: 'Gaming Accessories', level: 85 },
      { name: 'Pop Culture Items', level: 88 },
      { name: 'Gift Products', level: 92 },
      { name: 'Trending Merchandise', level: 87 }
    ]
  },
  {
    title: 'Supply Chain Excellence',
    skills: [
      { name: 'Factory Direct Sourcing', level: 95 },
      { name: 'Quality Inspection', level: 98 },
      { name: 'Inventory Management', level: 90 },
      { name: 'Fast Shipping', level: 92 },
      { name: 'Order Fulfillment', level: 93 }
    ]
  },
  {
    title: 'Business Support',
    skills: [
      { name: 'Bulk Order Processing', level: 96 },
      { name: 'Competitive Pricing', level: 95 },
      { name: 'Customer Service', level: 98 },
      { name: 'Market Trend Analysis', level: 88 },
      { name: 'Partnership Building', level: 90 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="expertise" className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Our Core Strengths
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive product expertise and business excellence across multiple categories.
            Building lasting partnerships through quality and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">
                        {skill.name}
                      </span>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-10 border border-blue-100 dark:border-blue-800 shadow-lg">
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 text-center">
            Business Advantages
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Competitive Pricing',
              'Fast Turnaround',
              'Quality Guaranteed',
              'Flexible MOQ',
              'Reliable Supply',
              'Market Insights',
              'Product Customization',
              'Global Shipping',
              'Secure Payments',
              'After-Sales Support',
              'Product Certifications',
              'Trend Forecasting',
              'Bulk Discounts',
              'Easy Reordering',
              'Partnership Programs'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
