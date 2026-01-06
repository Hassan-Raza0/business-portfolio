import { Award, TrendingUp } from 'lucide-react';

const certifications = [
  {
    title: 'Verified Supplier Network',
    issuer: 'International Trade Council',
    date: '2024',
    type: 'Business Certification'
  },
  {
    title: 'Quality Assurance Certified',
    issuer: 'ISO Standards',
    date: '2024',
    type: 'Quality Certification'
  },
  {
    title: 'Export & Import License',
    issuer: 'Trade Authority',
    date: '2023',
    type: 'Business License'
  },
  {
    title: 'Electronics Safety Standards',
    issuer: 'CE & FCC Certified',
    date: '2024',
    type: 'Product Certification'
  }
];

const achievements = [
  {
    metric: 'Business Growth',
    value: '300% YoY',
    description: 'Consistent expansion across product lines'
  },
  {
    metric: 'Client Retention',
    value: '95% Rate',
    description: 'Long-term partnerships with satisfied clients'
  },
  {
    metric: 'Product Range',
    value: '500+ SKUs',
    description: 'Diverse catalog of trending products'
  },
  {
    metric: 'Delivery Success',
    value: '99.8% On-Time',
    description: 'Reliable logistics and fulfillment'
  }
];

const Certifications = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Credentials & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Certified excellence and proven track record in wholesale distribution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                Certifications & Licenses
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-gray-900 dark:text-white flex-1">
                      {cert.title}
                    </h4>
                    <span className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded border border-gray-200 dark:border-gray-700 ml-2">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{cert.type}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                Business Milestones
              </h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-bold mb-1">
                    {achievement.metric}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                    {achievement.value}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-black text-white mb-4">
              Our Commitment to Excellence
            </h3>
            <p className="text-lg text-white/95 leading-relaxed">
              Fix n Wholesale is built on trust, quality, and reliability. We continuously
              expand our product range, strengthen supplier relationships, and improve our
              services to ensure your business thrives. Your success is our success, and
              we're committed to being your long-term wholesale partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
