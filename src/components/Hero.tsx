import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="text-blue-700 dark:text-blue-300 font-bold tracking-wider uppercase text-sm border-2 border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded-full backdrop-blur-sm">
              B2B Wholesale Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="text-gray-900 dark:text-white">Power Your </span>
            <span className="gradient-text block">Business</span>
            <span className="text-gray-900 dark:text-white">with Quality Products</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed max-w-4xl mx-auto">
            Fix n Wholesale: Your trusted partner for high-demand electronics and lifestyle products.
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Sourcing premium power banks, charging accessories, tech gadgets, and trending lifestyle items for resellers and retailers worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 justify-center mb-16">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary inline-flex items-center px-10 py-5 text-white font-bold rounded-xl transition-all duration-300 group text-lg shadow-lg"
            >
              Get Wholesale Quote
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary inline-flex items-center px-10 py-5 text-white font-bold rounded-xl transition-all duration-300 text-lg shadow-lg"
            >
              View Products
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black mb-3">
                <span className="gradient-text">500+</span>
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold text-lg">Products Sourced</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black mb-3">
                <span className="gradient-text">150+</span>
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold text-lg">Business Partners</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black mb-3">
                <span className="gradient-text">99%</span>
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold text-lg">Client Satisfaction</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href="https://linkedin.com/in/muhammad-hadi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-xl"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-blue-600 dark:text-blue-400" />
            </a>
            <a
              href="mailto:contact@fixnwholesale.com"
              className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-xl"
              aria-label="Email"
            >
              <Mail size={24} className="text-blue-600 dark:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
