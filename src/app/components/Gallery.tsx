import { useState } from 'react';
import { X } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: '/Doctor_chair.jpg',
      alt: 'Doctor Consultation Area',
    },
    {
      url: '/Dental_chair2.jpg',
      alt: 'Advanced Dental Treatment Setup',
    },
    {
      url: '/Dental_chair.jpg',
      alt: 'Modern Dental Equipment',
    },
    {
      url: '/clinic_reception.jpg',
      alt: 'Reception & Welcome Area',
    },
    {
      url: '/clinic_indoor.jpg',
      alt: 'Clinic Interior & Hygiene',
    },
    {
      url: '/Treatment_room.jpg',
      alt: 'Premium Treatment Room',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Clinic Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our modern infrastructure, advanced equipment, and hygienic environment
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.url)}
              className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <p className="text-white p-4 font-semibold text-lg">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={34} />
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
