import { Award, Shield, Heart } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Award,
      title: '5+ Years Experience',
      description: 'Trusted by thousands of patients',
      color: '#1E88E5',
    },
    {
      icon: Shield,
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment',
      color: '#26A69A',
    },
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'Compassionate and gentle treatment',
      color: '#1E88E5',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side - First on mobile, second on desktop */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E88E5]/10 to-[#26A69A]/10 rounded-full px-6 py-2 mb-6">
              <span className="text-[#1E88E5] font-semibold">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Chougule Multispeciality Dental Clinic
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Most Trusted Dental Clinic in Ashta, Maharashtra. We provide
              advanced, painless, and affordable dental care services with a
              commitment to excellence and patient satisfaction.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 group"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{ 
                      backgroundColor: `${feature.color}15`,
                      boxShadow: `0 4px 12px ${feature.color}20`
                    }}
                  >
                    <feature.icon size={26} style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1E88E5] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side - First on desktop, second on mobile */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzEzMjc1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Dental Clinic Interior"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-gradient-to-br from-[#1E88E5] to-[#26A69A] text-white rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2">1000+</div>
                <div className="text-xs sm:text-sm font-medium opacity-90">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}