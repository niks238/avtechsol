import React from "react";
import "./Services.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import { FaUsers, FaHeadset, FaTools, FaRegSmile, FaTruck } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const events = [
    { title: "Meetings", image: "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240806074733.jpg" },
    { title: "Conferences", image: "https://www.ceipal.com/wp-content/uploads/2019/05/ISF_3.jpeg" },
    { title: "Birthday Parties", image: "https://www.partycraze.in/wp-content/uploads/2020/03/projectors-on-rent-in-patna.jpg" },
    { title: "Corporate Events", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrm_uDSMLLCilY5U5nWiruuJOdSahhnLnDg&s" },
    { title: "School Functions", image: "https://5.imimg.com/data5/SELLER/Default/2024/3/403011384/GA/QX/GU/39806344/digital-class-room-projector.jpg" },
    { title: "Exhibitions", image: "https://www.iccr.gov.in/sites/default/files/2021-11/WhatsApp%20Image%202021-11-22%20at%208.05.24%20PM.jpeg" },
    { title: "LED Walls", image: "https://www.digitalstudioindia.com/cloud/2024/05/09/Christie-Video-Wall.jpg" },
    // { title: "Exhibitions", image: "https://www.iccr.gov.in/sites/default/files/2021-11/WhatsApp%20Image%202021-11-22%20at%208.05.24%20PM.jpeg" }

  ];

  const testimonials = [
    { name: "Neha Pilankar", text: "Exceptional service and high-quality equipment!" },
    { name: "Nisha ", text: "Our event was a huge success thanks to their team." },
    { name: "Swati", text: "Professional and reliable, highly recommended!" }
  ];

  return (
     <>
    <Navbar/>
    <section className="services">
      {/* Welcome Section */}
      <div className="intro-section">
        <h1>Audio-Visual Rental Services</h1>
        <p>Bringing your events to life with top-notch AV equipment and professional service.</p>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-item">
          <h2>Reliable Equipment</h2>
          <p>We offer a wide range of audio-visual gear, perfectly maintained to ensure smooth operation.</p>
        </div>
        <div className="feature-item">
          <h2>Skilled Technicians</h2>
          <p>Our expert team ensures flawless event execution, from setup to tear-down.</p>
        </div>
        <div className="feature-item">
          <h2>Flexible Packages</h2>
          <p>Customized rental options tailored to meet the unique needs of your event.</p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery">
        <h2>Our Event Services</h2>
        <p>From small gatherings to large-scale events, our AV services cover it all.</p>
        <div className="gallery-grid">
          {events.map((event, index) => (
            <div className="gallery-item" key={index}>
              <img src={event.image} alt={event.title} />
              <div className="overlay">
                <h3>{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
       {/* Our Team & Event Support Section */}
       <div className="team-support">
          <h2>Our Team & Event Support</h2>
          <p>Our dedicated team ensures seamless coordination and professional support throughout every live event.</p>
          <div className="support-icons">
            <div className="support-item">
              <FaUsers className="icon" />
              <h3>On-Site Coordination</h3>
              <p>Our team is on-site to handle every aspect of coordination for a smooth event experience.</p>
            </div>
            <div className="support-item">
              <FaHeadset className="icon" />
              <h3>Live Technical Support</h3>
              <p>We provide real-time technical assistance to address any issues immediately.</p>
            </div>
            <div className="support-item">
              <FaTools className="icon" />
              <h3>Setup & Installation</h3>
              <p>Our experts handle the setup and teardown to ensure everything works perfectly.</p>
            </div>
            <div className="support-item">
              <FaRegSmile className="icon" />
              <h3>Client Assistance</h3>
              <p>Our friendly team is always ready to assist you and your guests with any queries.</p>
            </div>
            <div className="support-item">
              <FaTruck className="icon" />
              <h3>Logistics Management</h3>
              <p>We manage the logistics, from transport to setup, for hassle-free event planning.</p>
            </div>
          </div>
        </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Services;
