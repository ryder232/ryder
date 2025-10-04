import { Car, Users, Package, Clock, MapPin, DollarSign } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Car,
      title: 'Standard Rides',
      description: 'Affordable everyday rides for your daily commute with verified drivers and comfortable vehicles.',
      features: ['Verified Drivers', 'GPS Tracking', 'In-App Payments']
    },
    {
      icon: Users,
      title: 'Ride Sharing',
      description: 'Share your ride with others heading the same direction and split the cost for eco-friendly travel.',
      features: ['Cost Effective', 'Eco-Friendly', 'Meet New People']
    },
    {
      icon: Package,
      title: 'Delivery Service',
      description: 'Quick and reliable package delivery across the city with real-time tracking and secure handling.',
      features: ['Same Day Delivery', 'Secure Handling', 'Real-Time Updates']
    },
    {
      icon: Clock,
      title: 'Scheduled Rides',
      description: 'Book your rides in advance for important appointments, airport trips, or early morning commutes.',
      features: ['Advanced Booking', 'Guaranteed Pickup', 'Flexible Scheduling']
    },
    {
      icon: MapPin,
      title: 'City Tours',
      description: 'Explore the city with experienced local drivers who know the best routes and hidden gems.',
      features: ['Local Guides', 'Custom Routes', 'Cultural Insights']
    },
    {
      icon: DollarSign,
      title: 'Business Accounts',
      description: 'Corporate solutions for businesses with dedicated support, invoicing, and expense management.',
      features: ['Bulk Booking', 'Monthly Invoicing', 'Priority Support']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive transportation solutions designed to meet all your mobility needs, from daily commutes to special occasions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/20">
            <p className="text-xl text-gray-300 mb-4">
              Need a custom solution for your business or community?
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-orange-500/50"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
