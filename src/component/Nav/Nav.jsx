import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const location = useLocation();

  return (
    <nav className="navbar">
      {/* ✅ Logo */}
      <Link to="/" className="logo">
        <span className="logo-text">Safar-e-Pak</span>
      </Link>

      {/* ✅ Navigation Links */}
      <div className="nav-links">
        <ul>
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link></li>
          <li><Link to="/destinations" className={location.pathname === "/destinations" ? "active" : ""}>Destinations</Link></li>
          <li><Link to="/gallery" className={location.pathname === "/gallery" ? "active" : ""}>Gallery</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
          <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link></li>
        </ul>
      </div>

      {/* ✅ Auth & CTA Buttons */}
      <div className="nav-buttons">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/booknow" className="book-now-btn">Book Now</Link>
      </div>
    </nav>
  );
}

export default Nav;
