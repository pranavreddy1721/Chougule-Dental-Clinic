import { useState } from 'react';
import { Calendar, User, Phone, MessageSquare, Send } from 'lucide-react';

export function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you! We will contact you soon to confirm your appointment.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="appointment" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E88E5]/10 to-[#26A69A]/10 rounded-full px-6 py-2 mb-6">
            <span className="text-[#1E88E5] font-semibold">Book Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Schedule Your Appointment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take the first step towards a healthier smile
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="flex items-center gap-2 font-semibold text-gray-700 mb-3"
              >
                <User size={20} className="text-[#1E88E5]" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#1E88E5] focus:ring-4 focus:ring-[#1E88E5]/10 outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="flex items-center gap-2 font-semibold text-gray-700 mb-3"
              >
                <Phone size={20} className="text-[#1E88E5]" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#1E88E5] focus:ring-4 focus:ring-[#1E88E5]/10 outline-none transition-all"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="flex items-center gap-2 font-semibold text-gray-700 mb-3"
              >
                <MessageSquare size={20} className="text-[#1E88E5]" />
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#1E88E5] focus:ring-4 focus:ring-[#1E88E5]/10 outline-none transition-all resize-none"
                placeholder="Tell us about your dental concern..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1E88E5] to-[#26A69A] text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3"
            >
              <Send size={22} />
              Book Appointment Now
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600">
              Or call us directly at{' '}
              <a
                href="tel:+917350075545"
                className="font-bold text-[#1E88E5] hover:text-[#26A69A] transition-colors"
              >
                +91 73500 75545
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
