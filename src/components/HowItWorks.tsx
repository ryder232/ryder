import { Smartphone, MapPin, Car, Star } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Smartphone,
      title: 'Download & Sign Up',
      description: 'Get the Ryder app from your app store and create your account in minutes. Quick verification process ensures security.',
      image: '/Generated Image October 03, 2025 - 3_04PM.png'
    },
    {
      icon: MapPin,
      title: 'Set Your Destination',
      description: 'Enter your pickup location and destination. Our smart algorithm finds the best route and estimates your fare instantly.',
      image: '/Generated Image October 03, 2025 - 3_01PM.png'
    },
    {
      icon: Car,
      title: 'Get Matched & Ride',
      description: 'Connect with a nearby verified driver. Track their arrival in real-time and enjoy a comfortable, safe ride to your destination.',
      image: '/Generated Image October 03, 2025 - 3_05PM.png'
    },
    {
      icon: Star,
      title: 'Rate & Pay',
      description: 'Cashless payment happens automatically. Rate your experience and help us maintain the highest quality service.',
      image: '/Generated Image October 03, 2025 - 3_04PM.png'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            How It <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Getting started with Ryder is simple. Follow these easy steps to experience seamless transportation.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-6xl font-bold text-white/10">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <h3 className="text-4xl font-bold">{step.title}</h3>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {step.description}
                </p>

                <div className="flex gap-4 pt-4">
                  <div className="bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                    <span className="text-sm text-gray-300">Fast</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                    <span className="text-sm text-gray-300">Simple</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                    <span className="text-sm text-gray-300">Secure</span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative overflow-hidden rounded-3xl border border-white/10">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm p-12 rounded-3xl border border-orange-500/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of satisfied riders and experience the future of urban transportation today.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('hero');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-orange-500/50"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
