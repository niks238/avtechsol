import React,{useState} from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import bgvideo from "../../images/assets/meeting conference background video 2.mp4";
import soundImage from "../../images/assets/sound system.jpg";
import projectionImage from "../../images/assets/Video Projection.jpg";
import ledImage from "../../images/assets/LED Screens.jpg";
import SoundImagetwo from "../../images/assets/sound system-2.jpg"
import projectionImageTwo from "../../images/assets/sound system-2.jpg"
import ledImageThree from "../../images/assets/LED ScreensThree.jpg"
import conferenceImage from "../../images/assets/audio.jpg"
import microphones from "../../images/assets/Microphones-1.jpg"
import mixer from "../../images/assets/Mixers-1.jpg"
import LEDWalls from "../../images/assets/LED Walls-1.jpg"
import microphonesone from "../../images/assets/Microphones-3.jpg"
import mixerone from "../../images/assets/Mixers-2.jpg"
import LEDWallsone from "../../images/assets/LED Screens.jpg"
import Footer from "../../components/Footer/Footer";

function Home() {

  return (
    <>
      <Navbar />
      {/* Video Background Section */}
      <div className="video-background">
        <video autoPlay muted loop playsInline className="background-video">
          <source src={bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content-overlay">
          <p className="video-content-heading-one">AUDIO-VISUAL AND</p>
          <p className="video-content-heading-two">CONFERENCE SOLUTIONS.</p>
        </div>
      </div>
      <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-heading">About Our AV Solutions</h2>
        <p className="about-description">
          We specialize in providing top-quality audio-visual rental solutions for conferences and events. Our commitment to excellence ensures your event has flawless AV support.
        </p>
        <button className="about-cta-button">Learn More</button>
      </div>
      <div className="about-image">
        <img src={conferenceImage} alt="Conference AV Setup" className="about-img" />
      </div>
    </section>
    <section className="service-cards-section">
      <h2 className="section-title">Our Services</h2>
      <div className="cards-container">
        <div className="service-card">
          <div className="service-card-image">
            <img src={soundImage} alt="Service 1" />
          </div>
          <div className="service-card-content">
            <h3 className="service-card-title">Sound Systems</h3>
            <p className="service-card-description">
              High-quality sound systems for conferences and events.
            </p>
            <button className="service-card-cta">Learn More</button>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-image">
            <img src={projectionImage} alt="Service 3" />
          </div>
          <div className="service-card-content">
            <h3 className="service-card-title">LED Screens</h3>
            <p className="service-card-description">
              Bright, high-resolution LED screens for any event.
            </p>
            <button className="service-card-cta">Learn More</button>
          </div>
        </div>

        <div className="service-card">
          <div className="service-card-image">
            <img src={ledImage} alt="Service 4" />
          </div>
          <div className="service-card-content">
            <h3 className="service-card-title">Lighting Solutions</h3>
            <p className="service-card-description">
              Professional lighting solutions to enhance your event's atmosphere.
            </p>
            <button className="service-card-cta">Learn More</button>
          </div>
        </div>
      </div>
    </section>
      {/* Equipment Section */}
      <div className="two-column-section d-flex ">
      {/* Content Column */}
      <div className="content-column">
        <h2>Our Advanced Technology</h2>
        <p>
          Discover the latest in audio-visual technology to make your events unforgettable. From advanced sound systems to high-definition screens, we bring top-tier solutions to elevate your experience.
        </p>
        <button className="cta-button">Learn More</button>
      </div>

      {/* Image Column with Image Card */}
      <div className="image-column">
        <div className="image-card">
          <img src={microphones} alt="Equipment 1" className="image-card-item" />
          <img src={mixer} alt="Equipment 2" className="image-card-item" />
          <img src={LEDWalls} alt="Equipment 3" className="image-card-item" />
        </div>
      </div>
    </div>
    <section className="section-one">
        <div className="section-content">
          <div className="section-image">
            <img src={microphonesone} alt="Section 1" />
          </div>
          <div className="section-text">
            <h2 className="section-title"> Microphones : </h2>
            <p className="section-description">
            We provide high-quality microphones that capture sound with exceptional clarity, perfect for live events, recording sessions, and broadcasts. Our range includes durable dynamic microphones, ideal for live performances with excellent noise control, and sensitive condenser microphones that capture every detail, perfect for studio environments. Our microphones ensure your audience hears every word and note with precision.
            </p>
            <p className="section-description">
            Our microphones are designed with advanced features to minimize handling noise and handle high sound pressure levels, so they deliver clear audio even at high volumes. Whether you’re organizing a large event or setting up a small recording space, our microphones provide the quality and reliability you need for any sound setup.
            </p>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </section>
    <section className="section-two">
        <div className="section-content">
          <div className="section-text">
            <h2 className="section-title"> Mixers : </h2>
            <p className="section-description">
            Our audio mixers give you complete control over sound balance and quality, allowing you to adjust volume, tone, and effects across multiple audio sources with ease. Designed for both beginners and professionals, our mixers have user-friendly interfaces and high-quality preamps to ensure clear, professional sound in any environment. From concerts to conferences, our mixers offer the tools you need for an impressive audio experience.
            </p>
            <p className="section-description">
            We offer both analog and digital mixers to fit different needs, with advanced models featuring touch screens and customizable presets. Our digital mixers make it easy to save settings for future use, while our analog mixers deliver robust performance for any setup. With our mixers, your sound will always be perfectly balanced and optimized for your event or production.
            </p>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="section-image">
            <img src={mixerone} alt="Section 2" />
          </div>
        </div>
      </section>
      <section className="section-one">
        <div className="section-content">
          <div className="section-image">
            <img src={LEDWallsone} alt="Section 1" />
          </div>
          <div className="section-text">
            <h2 className="section-title"> LED Walls : </h2>
            <p className="section-description">
            We provide vibrant and high-resolution LED walls that can transform any event with stunning visuals. Ideal for concerts, presentations, and advertisements, our LED walls offer bright, sharp images that stand out even in brightly lit spaces. With high brightness and rich colors, they ensure your audience sees everything clearly, creating an immersive visual experience
            </p>
            <p className="section-description">
            Our LED walls are customizable to fit any space, whether large or small, and have high refresh rates for smooth video playback. They’re energy-efficient, reducing costs while delivering impressive visuals. When you choose our LED walls, you’re adding a dynamic element to your event that captivates audiences and enhances engagement.
            </p>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
  <div className="testimonials-background">
    <h2 className="testimonials-heading"> Client Testimonials</h2>
    <div className="testimonials-cards">
      <div className="testimonial-card">
        <blockquote>
          "The AV team was phenomenal! Our conference was a success thanks to their expertise."
        </blockquote>
        <p>- John Doe, Event Manager</p>
      </div>
      <div className="testimonial-card">
        <blockquote>
          "We couldn’t be more pleased with the AV Solutions team. They brought our event to life!"
        </blockquote>
        <p>- Jane Smith, Corporate Director</p>
      </div>
      <div className="testimonial-card">
        <blockquote>
          "The audio-visual setup was flawless. We will definitely work with them again!"
        </blockquote>
        <p>- Michael Brown, Conference Organizer</p>
      </div>
      <div className="testimonial-card">
        <blockquote>
          "AV Solutions went above and beyond to make our event a memorable success!"
        </blockquote>
        <p>- Sarah Lee, Event Coordinator</p>
      </div>
    </div>
  </div>
</section>
      {/* Quick Quote Section */}
      <section id="quote" className="quote-section">
      <div className="quote-container">
        <h2 className="quote-heading">Request a Quick Quote</h2>
        <form className="quote-form">
          <div className="form-group">
            <label htmlFor="event-date">Event Date</label>
            <input
              type="date"
              id="event-date"
              name="event-date"
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
              required
              placeholder="Enter Location"
            />
          </div>
          <div className="form-group">
            <label htmlFor="equipment">Required Equipment</label>
            <textarea
              id="equipment"
              name="equipment"
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
      {/* Footer Section */}
    <Footer/>
    </>
  );
}

export default Home;
