import { useState } from 'react';
import { Calendar, User, Phone, MessageSquare, Send } from 'lucide-react';
import emailjs from "@emailjs/browser";

export function Appointment() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    date: '',
    time: '',
  });

  /* ⭐ Handle change with Sunday validation */
  const handleChange = (e: any) => {

    if (e.target.name === "date") {
      const selectedDate = new Date(e.target.value);
      const day = selectedDate.getDay();

      if (day === 0) {
        alert("Clinic is closed on Sunday");
        return;
      }
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ⭐ Submit */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      message: formData.message,
      date: formData.date,
      time: formData.time,
    };

    emailjs.send(
      "service_qrumx55",
      "template_908dksu",
      templateParams,
      "2mDLcruOZfH0K_PBA"
    ).then(() => {
      alert('Appointment request sent successfully ✅');
      setFormData({ name:'', phone:'', message:'', date:'', time:'' });
    }).catch(()=>{
      alert('Something went wrong ❌ Please try again.');
    });
  };

  return (
    <section id="appointment" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="flex items-center gap-2 font-semibold text-gray-700 mb-3">
                <User size={20} className="text-[#1E88E5]" />
                Full Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 font-semibold text-gray-700 mb-3">
                <Phone size={20} className="text-[#1E88E5]" />
                Phone Number
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200"
              />
            </div>

            {/* ⭐ Date */}
            <div>
              <label className="flex items-center gap-2 font-semibold text-gray-700 mb-3">
                <Calendar size={20} className="text-[#1E88E5]" />
                Appointment Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200"
              />
            </div>

            {/* ⭐ Time slot dropdown */}
            <div>
              <label className="flex items-center gap-2 font-semibold text-gray-700 mb-3">
                <Calendar size={20} className="text-[#1E88E5]" />
                Time Slot
              </label>

              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200"
              >
                <option value="">Select time slot</option>

                <optgroup label="Morning (9:30 AM - 2 PM)">
                  <option>09:30 AM</option>
                  <option>10:00 AM</option>
                  <option>10:30 AM</option>
                  <option>11:00 AM</option>
                  <option>11:30 AM</option>
                  <option>12:00 PM</option>
                  <option>12:30 PM</option>
                  <option>01:00 PM</option>
                  <option>01:30 PM</option>
                </optgroup>

                <optgroup label="Evening (4:30 PM - 9 PM)">
                  <option>04:30 PM</option>
                  <option>05:00 PM</option>
                  <option>05:30 PM</option>
                  <option>06:00 PM</option>
                  <option>06:30 PM</option>
                  <option>07:00 PM</option>
                  <option>07:30 PM</option>
                  <option>08:00 PM</option>
                  <option>08:30 PM</option>
                </optgroup>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="flex items-center gap-2 font-semibold text-gray-700 mb-3">
                <MessageSquare size={20} className="text-[#1E88E5]" />
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1E88E5] to-[#26A69A] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3"
            >
              <Send size={22} />
              Book Appointment Now
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
