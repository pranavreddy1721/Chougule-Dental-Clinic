export function Services() {
  const services = [
    {
      image: "/root_canal.jpg",
      title: 'Root Canal Treatment',
      description: 'Advanced, painless root canal therapy using modern techniques',
      color: '#1E88E5',
    },
    {
      image: "/dental_implant.png",
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions for a natural look',
      color: '#26A69A',
    },
    {
      image: "/braces.jpg",
      title: 'Braces & Orthodontics',
      description: 'Comprehensive orthodontic care for perfect alignment',
      color: '#1E88E5',
    },
    {
      image: "/teeth_whitening.jpg",
      title: 'Teeth Cleaning & Whitening',
      description: 'Professional cleaning and whitening for a brighter smile',
      color: '#26A69A',
    },
    {
      image: "/tooth_extraction.jpg",
      title: 'Tooth Extraction',
      description: 'Safe and comfortable tooth removal procedures',
      color: '#1E88E5',
    },
    {
      image: "/smile_Designing.jpg",
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
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500"
                style={{ background: `linear-gradient(135deg, ${service.color}, transparent)` }}
              ></div>

              <div className="relative">
                
                {/* IMAGE BOX */}
                <div
                  className="relative w-16 h-16 rounded-2xl overflow-hidden mb-6 transition-all duration-500 group-hover:scale-110"
                  style={{ boxShadow: `0 10px 25px ${service.color}30` }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1E88E5] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                <button
                  className="mt-auto inline-block px-5 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: service.color }}
                >
                  Book Appointment
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
