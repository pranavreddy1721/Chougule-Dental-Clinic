import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function Appointment() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      name: name,
      phone: phone,
      message: message,
    }

    emailjs
      .send(
        "service_qrumx55",     // Your Service ID
        "template_908dksu",    // Your Template ID
        templateParams,
        "2mDLcruOZfH0K_PBA"     // Your Public Key
      )
      .then(
        () => {
          setStatus("Appointment request sent successfully ✅")
          setName("")
          setPhone("")
          setMessage("")
        },
        () => {
          setStatus("Something went wrong ❌ Please try again.")
        }
      )
  }

  return (
    <section className="appointment">
      <h2>Book an Appointment</h2>

      <form onSubmit={handleSubmit} className="appointment-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Book Appointment</button>

        {status && <p style={{ marginTop: "15px" }}>{status}</p>}
      </form>
    </section>
  )
}
