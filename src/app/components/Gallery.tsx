import { useState } from 'react';
import { X } from 'lucide-react';
import indoor4 from "../assets/indoor_4.jpg";


export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: indoor4, 
      alt: 'Chougule Dental Clinic Interior',
    },
    {
      url: 'https://images.unsplash.com/photo-1704455306251-b4634215d98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjaGFpciUyMGNsaW5pY3xlbnwxfHx8fDE3NzEzMjYwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Dental Chair',
    },
    {
      url: 'https://images.unsplash.com/photo-1758812821349-1d2a4a96eecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBlcXVpcG1lbnQlMjByb29tfGVufDF8fHx8MTc3MTM0ODg1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Equipment Room',
    },
    {
      url: 'https://images.unsplash.com/photo-1764727291644-5dcb0b1a0375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc3MTI3NjAwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Clinic Reception',
    },
    {
      url: 'https://images.unsplash.com/photo-1758205308179-4e00e0e4060b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50YWwlMjBvZmZpY2UlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcxMzgxMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Treatment Room',
    },
    {
      url: 'https://images.unsplash.com/photo-1758205308181-d52b41e00cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBleGFtaW5hdGlvbiUyMHJvb218ZW58MXx8fHwxNzcxMzgxMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Modern Equipment',
    },
    {
      url: 'https://images.unsplash.com/photo-1764004450351-37fb72cb8e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MTM4MTI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Clinic Exterior',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Clinic Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of our modern, hygienic facilities
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 italic">
           
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
