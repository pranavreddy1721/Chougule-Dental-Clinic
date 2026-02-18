import {
  Activity,
  Sparkles,
  Layers,
  Scissors,
  Smile,
  Stethoscope,
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Activity,
      title: 'Root Canal Treatment',
      description: 'Advanced, painless root canal therapy using modern techniques',
      color: '#1E88E5',
    },
    {
      icon: Layers,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions for a natural look',
      color: '#26A69A',
    },
    {
      icon: Smile,
      title: 'Braces & Orthodontics',
      description: 'Comprehensive orthodontic care for perfect alignment',
      color: '#1E88E5',
    },
    {
      icon: Sparkles,
      title: 'Teeth Cleaning & Whitening',
      description: 'Professional cleaning and whitening for a brighter smile',
      color: '#26A69A',
    },
    {
      icon: Scissors,
      title: 'Tooth Extraction',
      description: 'Safe and comfortable tooth removal procedures',
      color: '#1E88E5',
    },
    {
      icon: Stethoscope,
      title: 'Smile Designing',
      description: 'Cosmetic dentistry for your dream smile',
      color: '#26A69A',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E88E5]/10 to-[#26A69A]/10 rounded-full px-6 py-2 mb-6">
            <span className="text-[#1E88E5] font-semibold">Expert Care</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${service.color} 0%, transparent 100%)` }}
              ></div>
              
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ 
                    backgroundColor: `${service.color}15`,
                    boxShadow: `0 8px 16px ${service.color}20`
                  }}
                >
                  <service.icon size={32} style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1E88E5] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
