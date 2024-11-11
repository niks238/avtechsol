import React from "react";
import "./Solutions.css";
import {Link} from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Solutions = () => {
  return (
    <>
      <Navbar />
      <section className="solutions">
        {/* Intro Section */}
        <div className="intro-section">
          <h1>Our Solutions</h1>
          <p>We provide tailored audio-visual solutions that enhance every type of event.</p>
        </div>

        {/* Features Section */}
        <div className="solutions-features">
          <div className="feature">
            <h2>Customizable Packages</h2>
            <p>Whether it's a small meeting or a grand conference, we provide solutions that fit your needs.</p>
          </div>
          <div className="feature">
            <h2>Expert Technicians</h2>
            <p>Our team of AV professionals ensures your event runs seamlessly, no matter the size or complexity.</p>
          </div>
          <div className="feature">
            <h2>Innovative Technologies</h2>
            <p>Stay ahead with our cutting-edge equipment and technology that bring your events to life.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta">
          <h2>Ready to elevate your event?</h2>
          <p>Get in touch with us to discuss how we can bring your vision to life.</p>
          <button className="cta-button">
  <Link to="/contactus" style={{ color: "inherit", textDecoration: "none" }}>
    Contact Us
  </Link>
</button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Solutions;
