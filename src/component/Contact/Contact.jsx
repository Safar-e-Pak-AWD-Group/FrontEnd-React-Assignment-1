import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        {/* Heading */}
        <div className="contact-header">
          <h2>Get in Touch</h2>
          <p>
            Have questions, suggestions, or need support? We’d love to hear from you.
            Fill out the form below and we’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>📍 Address: Lahore, Pakistan</p>
            <p>📞 Phone: +92 300 1234567</p>
            <p>📧 Email: support@safarpak.com</p>

            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="6" required></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
