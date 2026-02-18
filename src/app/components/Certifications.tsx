import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Certifications() {
  const certifications = [
    {
      {
  image: '/mds-certificate.jpg',
  title: 'Master of Dental Surgery (MDS)',
  description: 'Orthodontics and Dentofacial Orthopaedics – MUHS, Nashik',
  year: '2021',
},

    },
    {
      image: 'https://images.unsplash.com/photo-1729870992116-5f1f59feb4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjZXJ0aWZpY2F0aW9uJTIwYXdhcmQlMjBkb2N1bWVudHxlbnwxfHx8fDE3NzEzNTAyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Advanced Endodontics Certification',
      description: 'Specialized training in advanced root canal treatment and procedures',
      year: '2018',
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E88E5]/10 to-[#26A69A]/10 rounded-full px-6 py-2 mb-6">
            <span className="text-[#1E88E5] font-semibold">Professional Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certifications & Qualifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognized credentials and advanced training for superior dental care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <ImageWithFallback
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-sm font-bold text-[#1E88E5]">
                      Certified {cert.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1E88E5] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scalability Note */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#1E88E5]/5 to-[#26A69A]/5 rounded-2xl px-8 py-5 border border-[#1E88E5]/20">
            <p className="text-gray-600">
             
          </div>
        </div>
      </div>
    </section>
  );
}
