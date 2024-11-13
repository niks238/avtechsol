import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import facebook from "../../images/assets/icons8-facebook-48.png";
import instagram from "../../images/assets/icons8-instagram-30.png";
import linkedin from "../../images/assets/icons8-linkedin-50.png";
import logo from "../../images/assets/Logo-for-website.webp";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="top-bar">
        <div className="social-links">
          <p className="text-white mt-2">Connect With Us</p>
          <Link to="https://www.instagram.com/avtech_solution?igsh=MXU0ZzMwZnY1MWh3OA%3D%3D" className="social-icon">
            <img alt="" src={facebook} className="social-icon-image" />
          </Link>
          <Link to="https://www.facebook.com/avtechsolutionnagpur" className="social-icon">
            <img alt="" src={instagram} className="social-icon-image" />
          </Link>
          <Link to="https://www.linkedin.com/company/69615062/admin/dashboard/" className="social-icon">
            <img alt="" src={linkedin} className="social-icon-image" />
          </Link>
        </div>
      </div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} className="navbar-logo-image" alt="Logo" />
          </Link>
          <button className="navbar-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/aboutus" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/solutions" onClick={() => setIsMenuOpen(false)}>Solutions</Link>
            <Link to="/marketverticals" onClick={() => setIsMenuOpen(false)}>Market Verticals</Link>
            <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
            <Link to="/contactus" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
