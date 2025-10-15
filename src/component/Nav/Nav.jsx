import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(){
    return(
      <div>
        <nav>
      <a className="logo" href="index.html">
        <span className="logo-text">Safar-e-Pak</span>
      </a>

      <div className="nav-links">
        <ul>
          <li><Link to="/" className="active">HOME</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/destinations">DESTINATIONS</Link></li>
          <li><Link to="/gallery" >GALLERY</Link></li>
          <li><Link to="/about" >ABOUT</Link></li>
          <li><Link to="/contact" >CONTACTUS</Link></li>

          {/* <li><Link to="/contact">CONTACT</Link></li> */}
          <Link to="/booknow" className="book-now-btn">Book Now</Link>

        </ul>
      </div>
    </nav>
      </div>
    )
}
export default Nav;