import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact error:", error);
      setStatus(error.message);
    }
  };

  return (
    <section className="contact">
      <div className="contact-div">
        <h1>Contact Travel Bharat</h1>

        <p>Address:</p>

        <p>
          Email:
          <a href="mailto:huzaifakhatib60@gmail.com">
            TravelBharat26@gmail.com
          </a>
        </p>

        <p>
          Contact No:
          <a href="tel:+918010885264">
            +91 80108 85264
          </a>
        </p>
      </div>

      <div className="message-div">
        <h1>Send us a Message</h1>

        <form className="message-container" onSubmit={handleSubmit}>
          <p>Name</p>
          <br />

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <p>Email</p>
          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <p>Subject</p>
          <br />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <br />

          <textarea
            name="message"
            rows="8"
            cols={60}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <br />

          <button type="submit">Send Message</button>

          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;