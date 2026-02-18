import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import logoImage from 'figma:asset/b2b0bc334fa69d292ba173b889dfc20dcf493036.png';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-md">
                <img 
                  src="https://scontent.fpnq7-3.fna.fbcdn.net/v/t39.30808-6/358694955_734002048731150_8613471796808913725_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KLW9a4RVVBsQ7kNvwGejmyS&_nc_oc=AdlvHRcEbmnGLXukSrHFksclhRnQfj0NYdgR_zg15ZId-a0Hn3oXlVzIzefzMQ1uYAoLJ3ok0meCL9OB2vrgjKq1&_nc_zt=23&_nc_ht=scontent.fpnq7-3.fna&_nc_gid=BjWnaQm2V4FVYaF8IIp7Cw&oh=00_AfuKHtAGRnWlGvFv8VEgR29XBbb7HHws6aDYQ7_S2ssrPA&oe=699A9FFD" 
                  alt="Chougule Dental Clinic Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Chougule Dental</h3>
                <p className="text-sm text-gray-400">Clinic</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Most Trusted Dental Clinic in Ashta, providing advanced,
              painless, and affordable dental care.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/chouguledentalclinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1E88E5] flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/chougule_dental_clinic5?igsh=cm5icXE2Zm5xaGJv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1E88E5] flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#1E88E5] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Root Canal Treatment</li>
              <li>Dental Implants</li>
              <li>Braces & Orthodontics</li>
              <li>Teeth Whitening</li>
              <li>Smile Designing</li>
              <li>Tooth Extraction</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#1E88E5] flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-400">
                  Chougule Multispeciality Dental Clinic, Ashta, Maharashtra
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#26A69A]" size={20} />
                <a
                  href="tel:+917350075545"
                  className="text-gray-400 hover:text-[#1E88E5] transition-colors"
                >
                  +91 73500 75545
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#1E88E5]" size={20} />
                <a
                  href="mailto:chouguledentalclinic5@gmail.com"
                  className="text-gray-400 hover:text-[#1E88E5] transition-colors"
                >
                  chouguledentalclinic5@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © 2026 Chougule Multispeciality Dental Clinic. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}