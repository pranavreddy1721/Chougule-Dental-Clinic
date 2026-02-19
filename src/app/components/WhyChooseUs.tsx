import { Users, Building2, Shield, DollarSign } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: 'Experienced Doctors',
      description: '5+ years of professional dental expertise',
      color: '#1E88E5',
    },
    {
      icon: Building2,
      title: 'Modern Facility',
      description: 'State-of-the-art equipment and clean environment',
      color: '#26A69A',
    },
    {
      icon: Shield,
      title: 'Trusted Care',
      description: '2000+ satisfied patients across Ashta',
      color: '#1E88E5',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Quality dental care at reasonable costs',
      color: '#26A69A',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E88E5]/10 to-[#26A69A]/10 rounded-full px-6 py-2 mb-6">
            <span className="text-[#1E88E5] font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Most Trusted Dental Clinic in Ashta
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience exceptional dental care with our dedicated team
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{ 
                  backgroundColor: `${reason.color}15`,
                  boxShadow: `0 10px 30px ${reason.color}20`
                }}
              >
                <reason.icon size={40} style={{ color: reason.color }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1E88E5] transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
