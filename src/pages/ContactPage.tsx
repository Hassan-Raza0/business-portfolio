import { useState } from 'react';
import { Mail, Linkedin, Github, Send, Calendar, MessageSquare, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Machine Learning Project',
    budget: 'Under $10k',
    timeline: 'Within 1 month',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company,
          project_type: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          submitted_at: new Date().toISOString()
        }]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'Machine Learning Project',
        budget: 'Under $10k',
        timeline: 'Within 1 month',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@aiportfolio.dev',
      link: 'mailto:hello@aiportfolio.dev',
      description: 'Preferred for detailed inquiries'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect professionally',
      link: 'https://linkedin.com/in/yourprofile',
      description: 'Professional networking'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'View my code',
      link: 'https://github.com/yourusername',
      description: 'Check out my repositories'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      value: 'Book a meeting',
      link: 'https://calendly.com/yourname',
      description: '30-min consultation'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Let's Work <span className="gradient-text">Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Have a project in mind? Let's discuss how AI and data science can drive
            your business forward. I typically respond within 24 hours.
          </p>
          <div className="inline-flex items-center justify-center space-x-2 text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-400/10 px-6 py-3 rounded-full border border-cyan-500/30 dark:border-cyan-400/20">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="font-bold">Currently accepting new projects</span>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:scale-105 transition-all group text-center shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{method.title}</h3>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-2">{method.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{method.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below with details about your project.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/30 dark:border-cyan-400/20 rounded-xl flex items-start">
                  <CheckCircle className="text-cyan-600 dark:text-cyan-400 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-cyan-600 dark:text-cyan-400 font-bold">Message sent successfully!</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <p className="text-red-600 dark:text-red-400 font-bold">Something went wrong.</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Please try again or contact me directly via email.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Your Company Inc."
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  >
                    <option>Machine Learning Project</option>
                    <option>Data Analytics</option>
                    <option>Computer Vision</option>
                    <option>NLP Solution</option>
                    <option>Python Automation</option>
                    <option>AI Consulting</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                    >
                      <option>Under $10k</option>
                      <option>$10k - $25k</option>
                      <option>$25k - $50k</option>
                      <option>$50k - $100k</option>
                      <option>$100k+</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                    >
                      <option>Within 1 month</option>
                      <option>1-3 months</option>
                      <option>3-6 months</option>
                      <option>6+ months</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Tell me about your project... What challenges are you trying to solve? What are your goals?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-white font-bold rounded-xl transition-all flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">
                  What Happens Next?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0 mr-4 shadow-lg">
                      <MessageSquare className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Initial Response</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        I'll review your message and respond within 24 hours with initial thoughts and next steps.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0 mr-4 shadow-lg">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Discovery Call</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        We'll schedule a call to discuss your project in detail and explore how I can help.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0 mr-4 shadow-lg">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Proposal</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        I'll create a detailed proposal with scope, timeline, and investment required.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30 dark:border-cyan-500/30">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                  Response Time
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I take all inquiries seriously and respond promptly. You can expect:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-600 dark:text-gray-300">
                    <CheckCircle className="text-cyan-600 dark:text-cyan-400 mr-2 flex-shrink-0 mt-0.5" size={18} />
                    First response within 24 hours
                  </li>
                  <li className="flex items-start text-gray-600 dark:text-gray-300">
                    <CheckCircle className="text-cyan-600 dark:text-cyan-400 mr-2 flex-shrink-0 mt-0.5" size={18} />
                    Detailed proposal within 3-5 business days
                  </li>
                  <li className="flex items-start text-gray-600 dark:text-gray-300">
                    <CheckCircle className="text-cyan-600 dark:text-cyan-400 mr-2 flex-shrink-0 mt-0.5" size={18} />
                    Clear communication throughout
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                  Location & Availability
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-cyan-600 dark:text-cyan-400 mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">Remote Work</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Available for clients worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-cyan-600 dark:text-cyan-400 mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">Working Hours</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Mon-Fri, 9 AM - 6 PM (EST)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
