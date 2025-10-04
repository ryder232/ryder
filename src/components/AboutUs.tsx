import { Users, Heart, Globe } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Ryder</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming urban transportation one ride at a time, connecting communities and empowering drivers across the continent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To provide safe, affordable, and reliable transportation solutions that connect people and communities while creating economic opportunities for drivers.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-400 leading-relaxed">
              Safety first, community-driven, innovation-focused. We believe in building trust through transparency and delivering exceptional service with every ride.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To become the leading ride-sharing platform that revolutionizes urban mobility, making transportation accessible and convenient for everyone.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm p-12 rounded-3xl border border-orange-500/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                Built for the Community
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Ryder was founded with a simple belief: that everyone deserves access to safe, reliable transportation. We're more than just a ride-sharing platform—we're a movement to transform how people move through their cities.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                By leveraging technology and community partnerships, we're creating sustainable transportation solutions that benefit riders, drivers, and the environment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-orange-500 mb-2">50K+</div>
                <div className="text-gray-400">Active Riders</div>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-orange-500 mb-2">10K+</div>
                <div className="text-gray-400">Trusted Drivers</div>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-orange-500 mb-2">1M+</div>
                <div className="text-gray-400">Rides Completed</div>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
                <div className="text-gray-400">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
