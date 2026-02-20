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

  const timeSlots = [
    "09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM",
    "04:30 PM","05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","08:00 PM","08:30 PM"
  ];

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

  const handleChange = (e:any) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  };

  return (
    <section id="appointment" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">

        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="flex items-center gap-2 font-semibold mb-2">
                <User size={18}/> Name
              </label>
              <input name="name" value={formData.name} onChange={handleChange} required className="w-full border p-3 rounded-xl"/>
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 font-semibold mb-2">
                <Phone size={18}/> Phone
              </label>
              <input name="phone" value={formData.phone} onChange={handleChange} required className="w-full border p-3 rounded-xl"/>
            </div>

            {/* Date */}
            <div>
              <label className="flex items-center gap-2 font-semibold mb-2">
                <Calendar size={18}/> Date
              </label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full border p-3 rounded-xl"/>
            </div>

            {/* ⭐ Time dropdown */}
            <div>
              <label className="flex items-center gap-2 font-semibold mb-2">
                <Calendar size={18}/> Time Slot
              </label>

              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-xl"
              >
                <option value="">Select time</option>
                {timeSlots.map((slot,index)=>(
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="flex items-center gap-2 font-semibold mb-2">
                <MessageSquare size={18}/> Message
              </label>
              <textarea name="message" value={formData.message} onChange={handleChange} className="w-full border p-3 rounded-xl"/>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 rounded-xl flex items-center justify-center gap-2">
              <Send size={18}/> Book Appointment
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
