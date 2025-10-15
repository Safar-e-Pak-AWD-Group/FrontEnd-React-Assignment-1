import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services">
      <div className="content">
        <h2>Our Services</h2>
        <p>
          We provide the following services to make your trip a fun-loving and
          memorable journey.
        </p>
        <hr className="para" />

        <div className="services-content">
          {/* 1 - Trip Packages */}
          <div className="services-card">
            <div className="icon">
              <i className="fa-solid fa-box-open"></i>
            </div>
            <h3>Trip Packages</h3>
            <p>
              We arrange the best travel and stay packages at great prices for
              your comfort.
            </p>
          </div>

          {/* 2 - Transportation */}
          <div className="services-card">
            <div className="icon">
              <i className="fa-solid fa-plane"></i>
            </div>
            <h3>Transportation</h3>
            <p>
              Reliable transportation including car rentals and private transfers
              for smooth travel.
            </p>
          </div>

          {/* 3 - Tour Guide */}
          <div className="services-card">
            <div className="icon">
              <i className="fa-solid fa-suitcase"></i>
            </div>
            <h3>Tour Guide</h3>
            <p>
              Experienced local guides to help you explore destinations like a
              true insider.
            </p>
          </div>

          {/* 4 - Travel Budget Calculator */}
          <div className="services-card">
            <div className="icon">
              <i className="fa-solid fa-calculator"></i>
            </div>
            <h3>Travel Budget Calculator</h3>
            <p>
              Plan your trip expenses easily with our smart travel budget
              calculator tool.
            </p>
          </div>

          {/* 5 - Journey Recorder */}
          <div className="services-card">
            <div className="icon">
              <i className="fa-solid fa-route"></i>
            </div>
            <h3>Journey Recorder</h3>
            <p>
              Save your trip steps and get personalized suggestions for your next
              adventure.
            </p>
          </div>

          {/* 6 - Route Condition Info */}
          <div className="services-card">
            <div className="icon">
              <i className="fa-solid fa-map-location-dot"></i>
            </div>
            <h3>Route Condition Info</h3>
            <p>
              Stay informed about real-time route conditions using GPS tracking
              and updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
