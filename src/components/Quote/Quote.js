import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Quote.css";

const QuickQuote = () => {
  const [formData, setFormData] = useState({
    event_date: "",
    location: "",
    equipment: "",
    user_name: "AVTech Solution"
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
        "template_87x53sg",      // Replace with your EmailJS template ID
        formData,
        "T5f6AQKf1ltl5IRUu"           // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Quote request sent successfully!", response.status, response.text);
          alert("Your quote request has been sent!");
          setFormData({ event_date: "", location: "", equipment: "" }); // Reset form
        },
        (error) => {
          console.error("Failed to send quote request", error);
          alert("Failed to send request. Please try again later.");
        }
      );
  };

  return (
    <section id="quote" className="quote-section">
      <div className="quote-container">
        <h2 className="quote-heading">Request a Quick Quote</h2>
        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="event-date">Event Date</label>
            <input
              type="date"
              id="event-date"
              name="event_date"
              value={formData.event_date}
              onChange={handleChange}
              required
              placeholder="Select Event Date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Enter Location"
            />
          </div>
          <div className="form-group">
            <label htmlFor="equipment">Required Equipment</label>
            <textarea
              id="equipment"
              name="equipment"
              value={formData.equipment}
              onChange={handleChange}
              rows="4"
              required
              placeholder="Describe the equipment you need"
            ></textarea>
          </div>
          <button type="submit" className="quote-btn">
            Request Quote
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuickQuote;
