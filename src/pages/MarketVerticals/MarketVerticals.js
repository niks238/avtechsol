import React from "react";
import "./MarketVerticals.css";
import {Link} from "react-router-dom"
import { FaBuilding, FaChalkboardTeacher, FaMusic, FaHeart } from "react-icons/fa"; // Importing icons
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const MarketVerticals = () => {
  return (
    <>
      <Navbar />
      <section className="market-verticals">
        {/* Intro Section */}
        <div className="intro-section">
          <h1>Market Verticals We Serve</h1>
          <p>We cater to a wide range of industries with our specialized AV services. Explore our tailored solutions for each sector.</p>
        </div>

        {/* Vertical Cards Section with Icons and Animations */}
        <div className="verticals-cards">
          <div className="card">
            <FaBuilding className="icon" />
            <h3>Corporate</h3>
            <p>We provide professional AV setups for corporate events, meetings, and conferences. Ensuring seamless communication and engagement.</p>
          </div>
          <div className="card">
            <FaChalkboardTeacher className="icon" />
            <h3>Education</h3>
            <p>Enhance learning experiences with our AV solutions for schools, colleges, and universities. We bring classrooms to life.</p>
          </div>
          <div className="card">
            <FaMusic className="icon" />
            <h3>Entertainment</h3>
            <p>Deliver a high-impact experience for concerts, exhibitions, and festivals. Perfect audio and visuals for any entertainment event.</p>
          </div>
          <div className="card">
            <FaHeart className="icon" />
            <h3>Weddings & Parties</h3>
            <p>Create unforgettable memories with our AV services for weddings and social events. Let us make your celebration exceptional.</p>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="case-studies">
          <h2>Our Success Stories</h2>
          <div className="case-study">
            <h3>Global Corporate Conference</h3>
            <p>We managed the AV needs for a 5-day corporate conference, providing seamless communication tools and live streaming services.</p>
          </div>
          <div className="case-study">
            <h3>University Graduation</h3>
            <p>Our AV team was responsible for the live broadcast and sound system during a major university graduation ceremony.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta">
          <h2>Contact Us for Custom Solutions</h2>
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

export default MarketVerticals;
