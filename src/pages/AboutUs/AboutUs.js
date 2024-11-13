import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import aboutUs from "../../images/assets/About Us.jpg";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import chooseUs from "../../images/assets/Beige White Modern Minimalist Simple House For Sale Poster.mp4";
import listOffeature from "../../images/assets/feature list selection-4.mp4";
import zydus from "../../images/assets/download-removebg-preview (1).png";
import glanmark from "../../images/assets/glenmark-pharmaceuticals4908-removebg-preview.png";
import cadila from "../../images/assets/Logo-removebg-preview.png";
import pfizer from "../../images/assets/download-removebg-preview (2).png";
import mankind from "../../images/assets/download-removebg-preview (3).png";
import cipla from "../../images/assets/download-removebg-preview.png";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <Navbar />
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>
          We create unforgettable experiences through expertly organized
          conferences, events, and meetings.
        </p>
      </header>

      {/* Company Overview Section */}
      <section className="about-us-section" data-aos="fade-up">
        <div className="about-us-container">
          <div className="about-us-left">
            <h2 className="section-title">Company Overview</h2>
            <p className="paragraph">
              AVTech Solution was established in the year 2003 to catch the wave
              of opportunity presented by the newly discovered use of the data
              projector in the display of computer-generated data to large
              audiences. The group has now evolved into a 360-degree event
              management and consulting solutions provider. We strive to provide
              reliable and creative event solutions to clients with an emphasis
              on high standards for quality delivery and value for money.
            </p>
            <p className="paragraph">
              We help in the Creation and Development of large-scale events such
              as festivals, conferences, ceremonies, weddings, formal parties,
              concerts, or conventions.
            </p>
            <b>Amit Sonone</b>
            <p className="professional-team">
              <IoMdArrowDroprightCircle /> Professional Team
            </p>
            <p className="certification-organization">
              <IoMdArrowDroprightCircle /> Certification Organization
            </p>
            <p className="feedback-testimonial">
              <IoMdArrowDroprightCircle /> Best Feedback Testimonial
            </p>
          </div>
          <div className="about-us-right img-about">
            <img src={aboutUs} alt="Company Overview" className="img-about"/>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section" data-aos="fade-up">
        <div className="why-choose-us-container">
          <div className="why-choose-us-video">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="why-choose-us-video-content"
            >
              <source src={chooseUs} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="why-choose-us-text">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="why-choose-us-video-content"
            >
              <source src={listOffeature} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" data-aos="fade-up">
        <h2 className="section-title">We Offer</h2>
        <div className="services-container d-flex">
          <div className="service-item" data-aos="zoom-in">
            <i className="fas fa-calendar-check"></i>
            <h3>Event Planning</h3>
            <p>Comprehensive planning and logistics for all types of events.</p>
          </div>
          <div className="service-item" data-aos="zoom-in">
            <i className="fas fa-microphone"></i>
            <h3>Conference Support</h3>
            <p>
              Professional support for conferences, including speaker
              arrangements and digital presentations.
            </p>
          </div>
          <div className="service-item" data-aos="zoom-in">
            <i className="fas fa-users"></i>
            <h3>Meeting Setup</h3>
            <p>
              Customizable setups for corporate meetings, from small gatherings
              to seminars.
            </p>
          </div>
        </div>
      </section>

      {/* Companies We've Worked With Section */}
      <section className="partner-section" data-aos="fade-up">
        <h2>Companies We've Worked With</h2>
        <p className="intro-text">
          We're proud to have partnered with numerous leading companies to
          deliver exceptional events and experiences.
        </p>

        <div className="company-count-box" data-aos="zoom-in">
          <h3>Over 100 Companies</h3>
          <p>
            From tech startups to global enterprises, we have worked with
            companies of all sizes, ensuring their events and conferences are a
            success.
          </p>
        </div>

        <div className="company-list">
          <div className="company-list-inner">
            <div className="company-item">
              <img src={zydus} alt="Zydus" />
            </div>
            <div className="company-item">
              <img src={glanmark} alt="Glenmark" />
            </div>
            <div className="company-item">
              <img src={cadila} alt="Cadila" />
            </div>
            <div className="company-item">
              <img src={pfizer} alt="Pfizer" />
            </div>
            <div className="company-item">
              <img src={mankind} alt="Mankind" />
            </div>
            {/* Repeat company items for smooth infinite scrolling */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;
