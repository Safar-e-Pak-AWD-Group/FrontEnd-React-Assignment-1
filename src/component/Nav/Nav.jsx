import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Nav.css";

import img1 from "../../assets/images/dashboard.jpg";

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  const handledash = () => {
    if(isLoggedIn){
    navigate("/dash");
    }
  }

  return (
    <nav className="navbar">
      {/* ✅ Logo */}
      <Link to="/home" className="logo">
        <span className="logo-text">Safar-e-Pak</span>
      </Link>

      {/* ✅ Navigation Links */}
      <div className="nav-links">
        <ul>
          <li><Link to="/home" className={location.pathname === "/home" ? "active" : ""}>Home</Link></li>
          <li><Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link></li>
          <li><Link to="/destinations" className={location.pathname === "/destinations" ? "active" : ""}>Destinations</Link></li>
          <li><Link to="/gallery" className={location.pathname === "/gallery" ? "active" : ""}>Gallery</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
          <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link></li>
        </ul>
      </div>

      {/* ✅ Right Side Buttons */}
      

        {isLoggedIn ? (
          <>

              <div className="nav-buttons">
                <Link to="/booknow" className="book-now-btn">Book Now</Link>
              </div>

              <img
              src={img1}
              alt="Dashboard"
              title="Your Account"
              className="dashboard-icon"
              onClick={handledash}
                ></img>
                
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
    </nav>
  );
}

export default Nav;