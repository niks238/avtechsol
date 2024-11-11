import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import logo from "../../images/assets/Logo-for-website.webp"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* About Section with Logo */}
        <div className="footer-section about">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <h2>About Our Company</h2>
          <p>
            We are committed to providing exceptional products and services tailored to your needs. 
            Our mission is to ensure excellence and satisfaction for all our customers.
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contactus">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <Link to="#"><FaFacebook className="social-icon" /></Link>
            <Link to="#"><FaTwitter className="social-icon" /></Link>
            <Link to="#"><FaInstagram className="social-icon" /></Link>
            <Link to="#"><FaLinkedin className="social-icon" /></Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        &copy; 2003 AVTech Solution | Amit Sonone
      </div>
    </footer>
  );
}

export default Footer;
