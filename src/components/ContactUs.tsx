import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function ContactUs() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);

      if (error) {
        setStatusMessage('Something went wrong. Please try again.');
      } else {
        setStatusMessage('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setStatusMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-800 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Our team is here to help.
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 transition-all duration-800 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Let's Talk</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Whether you're a potential rider, driver, or partner, we're excited to connect with you. Fill out the form and we'll respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-400">getryder.official@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Visit Us</h4>
                  <p className="text-gray-400">123 Innovation Street, Tech City, TC 12345</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/20">
              <h4 className="font-bold text-xl mb-4">Join Our Team</h4>
              <p className="text-gray-300 mb-4">
                Interested in becoming a Ryder driver? Start earning on your own schedule.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('hero');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-orange-500 font-semibold hover:text-orange-400 transition-colors flex items-center gap-2"
              >
                Learn More
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-500/50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </button>

                {statusMessage && (
                  <p className={`text-sm text-center ${statusMessage.includes('success') ? 'text-green-400' : 'text-orange-400'}`}>
                    {statusMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Ryder
              </span>
            </div>

            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; 2025 Ryder. All rights reserved.</p>
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
              <button className="hover:text-orange-500 transition-colors">Privacy Policy</button>
              <button className="hover:text-orange-500 transition-colors">Terms of Service</button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
