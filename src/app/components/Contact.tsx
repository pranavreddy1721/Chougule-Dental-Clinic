import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visit Our Clinic
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch to schedule your appointment or visit us at our clinic
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>

              <div className="space-y-7">

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E88E5] to-[#1976D2] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="text-white" size={26} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                      Clinic Address
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Chougule Dental Clinic
                      <br />
                      First Floor, above DCC Bank (Jilha Madhyawarti Bank),
                      <br />
                      near Chandu Wadapav, Amruta Awati,
                      <br />
                      Ashta, Sangli, Maharashtra – 416301
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#26A69A] to-[#00897B] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="text-white" size={26} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                      Phone Number
                    </h4>
                    <a
                      href="tel:+917350075545"
                      className="text-gray-700 hover:text-[#1E88E5] transition-colors text-lg"
                    >
                      +91 73500 75545
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E88E5] to-[#1976D2] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="text-white" size={26} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                      Email Address
                    </h4>
                    <a
                      href="mailto:chouguledentalclinic5@gmail.com"
                      className="text-gray-700 hover:text-[#1E88E5] transition-colors break-all"
                    >
                      chouguledentalclinic5@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#26A69A] to-[#00897B] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="text-white" size={26} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                      Working Hours
                    </h4>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday – Saturday</p>
                      <p className="font-medium text-[#1E88E5]">
                        9:30 am – 2 pm, 4:30 – 9 pm
                      </p>
                      <p className="mt-2">Sunday</p>
                      <p className="font-medium text-[#1E88E5]">
                        Closed
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <a
                href="https://maps.app.goo.gl/inbBThmYUqL7f3RL7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1E88E5] to-[#26A69A] text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Navigation size={22} />
                Get Directions on Google Maps
              </a>
            </div>
          </div>

          {/* Right Side - Simple Map Section */}
          <div className="contact-map">
            <iframe
              title="Chougule Dental Clinic Location"
              src="https://www.google.com/maps?q=Chougule%20Dental%20Clinic%20Ashta%20Sangli&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
