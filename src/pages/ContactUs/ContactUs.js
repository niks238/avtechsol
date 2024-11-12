import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactUs.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4d75gox",      // Replace with your EmailJS service ID
        "template_06zacfe",      // Replace with your EmailJS template ID
        formData,
        "T5f6AQKf1ltl5IRUu"           // Replace with your EmailJS user ID (public key)
      )
      .then(
        (response) => {
          console.log("Message sent successfully!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" }); // Reset form after submission
        },
        (error) => {
          console.error("Failed to send message", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <>
      <Navbar />
      <section className="contact-us">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Reach out with any inquiries or feedback.</p>
        </div>

        <div className="contact-content">
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Our Contact Information</h2>
            <div className="info-item">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>+91 7420002342</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>serv.avtech@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>R.S Mundle Collage Opposite Trimurti Flat Khare Town, Shankar Nagar Nagpur, 440010</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
