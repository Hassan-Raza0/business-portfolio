import { Mail, Linkedin, Phone, Send, ShoppingBag } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Start Your Wholesale Partnership
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to source quality products for your business? Get in touch for bulk orders,
            custom quotes, and partnership opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Fix n Wholesale
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Whether you need bulk electronics, trending lifestyle products, or custom sourcing solutions,
                we're here to power your retail success. We typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:contact@fixnwholesale.com"
                className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">
                  <Mail className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                  <div className="font-semibold text-gray-900 dark:text-white">contact@fixnwholesale.com</div>
                </div>
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">
                  <Phone className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Phone</div>
                  <div className="font-semibold text-gray-900 dark:text-white">+1 (234) 567-890</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/muhammad-hadi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">
                  <Linkedin className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</div>
                  <div className="font-semibold text-gray-900 dark:text-white">Connect with Muhammad Hadi</div>
                </div>
              </a>

              <a
                href="/portfolio"
                className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">
                  <ShoppingBag className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Products</div>
                  <div className="font-semibold text-gray-900 dark:text-white">Browse Product Catalog</div>
                </div>
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">Bulk Order Inquiry</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                For bulk orders, please provide:
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Product categories of interest</li>
                <li>• Estimated order quantities</li>
                <li>• Target price range</li>
                <li>• Shipping destination</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Request a Quote
            </h3>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your Business Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="business@example.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Product Category
                </label>
                <select
                  id="project"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option>Power Banks & Chargers</option>
                  <option>Audio Devices</option>
                  <option>Mobile Accessories</option>
                  <option>Storage Solutions</option>
                  <option>Lifestyle Products</option>
                  <option>Custom Order</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Order Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your order requirements, quantities, and any special requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition-all hover:shadow-xl shadow-lg flex items-center justify-center group"
              >
                Request Quote
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="font-medium">Accepting bulk orders worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
