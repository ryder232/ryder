import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-lg shadow-lg shadow-orange-500/10 transform translate-y-0'
          : 'bg-transparent transform translate-y-0'
      }`}
      style={{
        transform: isScrolled ? 'translateY(0)' : 'translateY(0)',
        animation: isScrolled ? 'slideDown 0.3s ease-out' : undefined
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Ryder
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-orange-500 transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-orange-500 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-white hover:text-orange-500 transition-colors font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-orange-500 transition-colors font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('hero')}
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-orange-500/50"
            >
              Join Waitlist
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-orange-500 transition-colors font-medium py-2"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-white hover:text-orange-500 transition-colors font-medium py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-white hover:text-orange-500 transition-colors font-medium py-2"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white hover:text-orange-500 transition-colors font-medium py-2"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('hero')}
              className="w-full px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full font-semibold shadow-lg shadow-orange-500/50"
            >
              Join Waitlist
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
