import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Blogs.css"
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer"

function Blogs() {
  return(
    <>
    <Navbar/>
    <div className="blog-container">
      {/* Header */}
      <header className="blog-header">
        <h1>Audio-Visual Rental Insights</h1>
        <p>Explore our expert insights on AV equipment, rental tips, and the latest trends in technology.</p>
      </header>

      {/* Main Content Area */}
      <main className="blog-main">
        {/* Blog Posts */}
        <section className="blog-posts">
          <article className="blog-post">
            <h2>Choosing the Right Audio Equipment for Your Event</h2>
            <p>
              Selecting the best audio equipment for your event can be challenging, but with some basic knowledge,
              it becomes manageable. In this post, we explore types of microphones, speakers, and sound systems that
              work best for different events.
            </p>
            <p>
              Audio quality plays a critical role in the success of an event, whether it's a conference, concert, or
              a wedding ceremony. Knowing the setup, venue size, and audience can help you select the ideal equipment.
              We'll guide you through the essentials of AV rentals, ensuring an impactful experience for your audience.
            </p>
            <p>
              Some basic audio options include handheld mics for speeches, lavalier mics for presenters, and wireless
              systems for flexibility. Pairing these with high-quality speakers and mixers will ensure clear audio
              coverage throughout the venue. Read on to learn about different equipment and their uses!
            </p>
            <a href="#">Read more</a>
          </article>

          <article className="blog-post">
            <h2>Top 5 Trends in AV Rentals for 2024</h2>
            <p>
              The AV industry is evolving with new technology every year. In 2024, some trends to watch include
              interactive displays, advanced sound solutions, and immersive experiences. These are increasingly in
              demand for corporate and social events, helping organizers create unforgettable experiences.
            </p>
            <p>
              As events shift towards hybrid formats, demand for high-definition video and audio equipment has grown.
              Other trends include the integration of AR and VR, enhancing audience engagement. Explore these trends
              and how you can leverage them in your next event!
            </p>
            <a href="#">Read more</a>
          </article>
        </section>

        {/* Sidebar Ads */}
        <aside className="ads">
          <div className="ad">
            <h3>Special Rental Deals</h3>
            <p>Get 20% off on projector rentals this month!</p>
          </div>
          <div className="ad">
            <h3>Upcoming Events</h3>
            <p>Join our webinar on AV technology trends!</p>
          </div>
        </aside>
      </main>

      {/* Recent Events Section */}
      <section className="recent-events">
        <h2>Our Recent Events</h2>
        <div className="event">
          <h3>Corporate Tech Conference 2024</h3>
          <p>
            This year’s tech conference featured our advanced AV setup, including immersive sound systems and LED video
            walls. Attendees enjoyed a seamless experience as they connected, engaged, and shared ideas in a high-tech
            environment. Our team worked closely with organizers to ensure a flawless event.
          </p>
          <a href="#">Read event highlights</a>
        </div>
        <div className="event">
          <h3>Product Launch - VR & AR Showcase</h3>
          <p>
            We provided AV support for a product launch featuring the latest in AR and VR technology. Guests were able
            to interact with products in an immersive, virtual environment, highlighting the capabilities of cutting-edge
            AV tech for interactive experiences.
          </p>
          <a href="#">See photos and videos</a>
        </div>
      </section>

      {/* Additional Blog Post */}
      <section className="extended-blog-post">
        <h2>How to Plan AV Setup for Outdoor Events</h2>
        <p>
          Outdoor events present unique challenges for AV setups, including unpredictable weather and open spaces. But
          with the right preparation, you can provide excellent audio and visual experiences even outdoors.
        </p>
        <p>
          For sound, consider powerful, weather-resistant speakers that can distribute sound evenly across large
          areas. You might also want to look into wireless options to avoid complicated cable setups. For visual
          elements, LED screens with high brightness are ideal for daylight events. Learn more about how to
          overcome these challenges and make your outdoor event a success.
        </p>
        <a href="#">Explore full guide</a>
      </section>
      
    </div>
    <Footer/>
    </>
  );
}

export default Blogs;