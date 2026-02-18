import { Award, GraduationCap } from 'lucide-react';

export function Doctors() {
  const doctors = [
    {
      name: 'Dr. Rohit Chougule',
      designation: 'Dental Surgeon',
      qualification: 'BDS, MDS(Orthodontics)',
      image: 'https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxMzQ4ODUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        'Orthodontic Specialist focused on advanced teeth alignment and bite corretion .',
    },
    {
      name: 'Dr. Pranagha Chougule',
      designation: 'Dental Surgeon',
      qualification: 'BDS, MDS (Endodontics)',
      image: 'https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZW50aXN0JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxMzQ4ODUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        'Endodontic expert providing painless root canal and restorative treatments',
    },
  ];

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experienced professionals committed to your dental health
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-80">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
                  <p className="text-white/90">{doctor.designation}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#1E88E5]/10 flex items-center justify-center">
                    <GraduationCap className="text-[#1E88E5]" size={20} />
                  </div>
                  <p className="font-semibold text-gray-900">
                    {doctor.qualification}
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {doctor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}