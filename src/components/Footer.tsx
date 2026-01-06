import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, Package } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center shadow-lg">
                <Package className="text-white" size={24} />
              </div>
              <h3 className="text-gray-900 dark:text-white font-black text-2xl">
                Fix n <span className="gradient-text">Wholesale</span>
              </h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 font-medium">
              B2B Wholesale Solutions · Quality Electronics · Lifestyle Products
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
              Your trusted partner for sourcing high-demand products and building successful retail businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-blue-600 dark:text-blue-400 font-bold mb-6 text-lg uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/portfolio', label: 'Products' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block text-base font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-blue-600 dark:text-blue-400 font-bold mb-6 text-lg uppercase tracking-wide">Categories</h4>
            <ul className="space-y-3">
              {[
                { to: '/portfolio', label: 'Electronics' },
                { to: '/portfolio', label: 'Power Banks' },
                { to: '/portfolio', label: 'Audio Devices' },
                { to: '/portfolio', label: 'Lifestyle Products' }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block text-base font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="text-blue-600 dark:text-blue-400 font-bold mb-6 text-lg uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3">
              {[
                { to: '/contact', label: 'Get Quote' },
                { to: '/services', label: 'Bulk Orders' },
                { to: '/contact', label: 'Partnership' },
                { to: '/blog', label: 'News & Updates' }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block text-base font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 dark:text-gray-400 text-base">
            © {new Date().getFullYear()} Fix n Wholesale. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/muhammad-hadi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 flex items-center justify-center transition-all hover:scale-110 shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-white" />
            </a>
            <a
              href="mailto:contact@fixnwholesale.com"
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 flex items-center justify-center transition-all hover:scale-110 shadow-md"
              aria-label="Email"
            >
              <Mail size={20} className="text-white" />
            </a>
            <a
              href="tel:+1234567890"
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 flex items-center justify-center transition-all hover:scale-110 shadow-md"
              aria-label="Phone"
            >
              <Phone size={20} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
