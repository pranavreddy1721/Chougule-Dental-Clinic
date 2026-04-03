import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certifications = [
    {
      image: '/mds-certificate.jpg',
      title: 'Master of Dental Surgery (MDS)',
      description:
        'Orthodontics and Dentofacial Orthopaedics – MUHS, Nashik',
      year: '2021',
    },
    {
      image: '/MDS_Degree.jpeg',
      title: 'Master of Dental Surgery (MDS)',
      description:
        'Specialized training in advanced root canal treatment and procedures',
      year: '2021',
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E88E5]/10 to-[#26A69A]/10 rounded-full px-6 py-2 mb-6">
            <span className="text-[#1E88E5] font-semibold">
              Professional Excellence
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certifications & Qualifications
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognized credentials and advanced training for superior dental care
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(cert.image)}
              className="cursor-pointer group bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >

              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>

                <ImageWithFallback
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Zoom hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-semibold">
                    Click to View
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-bold text-[#1E88E5]">
                    Certified {cert.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1E88E5] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-600">
                  {cert.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* 🔥 MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-2xl font-bold"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Certificate Preview"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
