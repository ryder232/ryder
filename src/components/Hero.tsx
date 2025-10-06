import { useState } from 'react';
import { base } from '../lib/airtable';
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface HeroProps {
  slides: Slide[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}

export function Hero({ slides, currentSlide, setCurrentSlide }: HeroProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME;
    if (!tableName) {
      setMessage('Airtable Table Name is not configured.');
      setIsSubmitting(false);
      return;
    }

    try {
      await base(tableName).create([
        {
          fields: {
            'Email Address': email,
          },
        },
      ]);

      setMessage('Welcome! You\'re on the list.');
      setEmail('');
    } catch (err: any) {
      // A simple check for duplicate emails. 
      // For a robust solution, you might need a more specific error handling strategy.
      if (err && err.message && err.message.includes('DUPLICATE_VALUE')) {
        setMessage('You\'re already on the waitlist!');
      } else {
        setMessage('Something went wrong. Please try again.');
        console.error(err);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="space-y-4">
            {slides.map((slide, index) => (
              <h1
                key={index}
                className={`text-6xl md:text-8xl font-bold transition-all duration-1000 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 absolute'
                }`}
              >
                {slide.title}
              </h1>
            ))}
          </div>

          <div className="h-16">
            {slides.map((slide, index) => (
              <p
                key={index}
                className={`text-xl md:text-2xl text-gray-300 transition-all duration-1000 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 absolute'
                }`}
              >
                {slide.description}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Zap className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium">Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Shield className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium">100% Secure</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium">Premium Experience</span>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Join the Waitlist
            </h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-500/50"
                >
                  {isSubmitting ? 'Joining...' : 'Join Now'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              {message && (
                <p className={`mt-4 text-sm ${message.includes('Welcome') ? 'text-green-400' : 'text-orange-400'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>

          <div className="flex justify-center gap-2 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-orange-500 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-orange-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
