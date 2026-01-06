import { Briefcase, Globe, Award, Target, Package, Users, User, TrendingUp } from 'lucide-react';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import HadiImage from './Hadi.jpeg';

const About = () => {
  const milestones = [
    {
      year: '2024 - Present',
      title: 'Market Expansion',
      company: 'Fix n Wholesale',
      description: 'Expanding product lines and strengthening partnerships across electronics and lifestyle categories. Building a reputation for quality and reliability in B2B wholesale.',
      achievements: [
        'Grew product catalog to 500+ SKUs',
        'Established partnerships with 150+ retailers',
        'Achieved 99% client satisfaction rate'
      ]
    },
    {
      year: '2023 - 2024',
      title: 'Business Growth',
      company: 'Fix n Wholesale',
      description: 'Scaled operations and developed robust supply chain relationships. Focused on sourcing trending electronics and lifestyle products for growing wholesale demand.',
      achievements: [
        '300% year-over-year revenue growth',
        'Expanded supplier network across Asia',
        'Implemented quality control processes'
      ]
    },
    {
      year: '2022 - 2023',
      title: 'Foundation Years',
      company: 'Fix n Wholesale',
      description: 'Founded Fix n Wholesale with a vision to provide quality electronics and lifestyle products to retailers worldwide. Started with power banks and charging accessories.',
      achievements: [
        'Launched wholesale operations',
        'Built initial client base of 50+ businesses',
        'Established reliable shipping partnerships'
      ]
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'Every product rigorously tested and certified. We never compromise on quality because your business reputation depends on it.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Partnership',
      description: 'Your success is our success. We provide competitive pricing, market insights, and support to help your business grow.'
    },
    {
      icon: Users,
      title: 'Reliable Service',
      description: 'Transparent communication, on-time delivery, and responsive support. Building long-term relationships through consistent excellence.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Photo Placeholder */}
      <section className="pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-800">
                  <img
                    src={HadiImage}
                    alt="Muhammad Hadi"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-20 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 gradient-bg rounded-2xl opacity-20 blur-xl"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
                About <span className="gradient-text">Fix n Wholesale</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                A trusted B2B wholesale supplier specializing in high-demand electronics and lifestyle products.
                We help retailers and resellers grow their businesses with quality products and competitive pricing.
              </p>
              <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-300 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center shadow-lg">
                    <Globe size={24} className="text-white" />
                  </div>
                  <span className="font-semibold">Serving Businesses Worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-800 flex items-center justify-center shadow-lg">
                    <Briefcase size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-semibold">3+ Years in Wholesale Distribution</span>
                </div>
              </div>
              <div className="inline-block px-6 py-3 rounded-full border-2 border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-900/30">
                <span className="text-blue-700 dark:text-blue-300 font-bold">Currently accepting new partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              <p>
                Fix n Wholesale was founded with a clear mission: to provide retailers and resellers
                access to high-quality electronics and lifestyle products at competitive wholesale prices.
                What started as a small operation sourcing power banks has grown into a comprehensive
                B2B wholesale supplier serving businesses worldwide.
              </p>
              <p>
                We understand the challenges retailers face—finding reliable suppliers, maintaining
                product quality, managing inventory, and staying competitive on pricing. That's why we've
                built our business on three core principles: quality assurance, competitive pricing,
                and exceptional service.
              </p>
              <p>
                Today, Fix n Wholesale offers over 500 products across multiple categories, from
                power banks and charging accessories to trending lifestyle items like plush toys and
                collectibles. Our network of verified suppliers ensures product authenticity and quality,
                while our streamlined logistics guarantee on-time delivery.
              </p>
              <p>
                Whether you're a small retail shop or a large distributor, we're committed to being
                your long-term wholesale partner. Your success drives our growth, and we're invested
                in helping your business thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Timeline */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Building trust and excellence through consistent growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 hover:scale-[1.02] transition-all shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-bold mb-2">
                      {milestone.company}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                    {milestone.year}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {milestone.description}
                </p>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                    Key Milestones:
                  </h4>
                  <ul className="space-y-2">
                    {milestone.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                        <Award className="text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" size={16} />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
              Our Business Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide every partnership we build
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all shadow-lg border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <Skills />
      <Certifications />
    </div>
  );
};

export default About;
