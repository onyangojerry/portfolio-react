import React from "react";
import { Button } from "react-bootstrap";

const HeroSection: React.FC = () => (
  <div className="hero-section">
    {/* Banner */}
    <div className="hero-banner">
      <img
        src="https://via.placeholder.com/1200x300"
        alt="Banner"
        className="banner-img"
      />
    </div>

    {/* Profile Details */}
    <div className="hero-content text-left mt-5">
      {/* Profile Picture */}
      <div className="profile-picture">
        <img
          src="https://via.placeholder.com/300"
          alt="Profile"
          className="rounded-circle"
        />
      </div>

      {/* Text Content */}
      <div className="profile-info ms-3">
        <h1> Badong Badong</h1>
        <h4>Full-Stack Developer | React </h4>
        <p>
          Passionate developer specializing in web applications and cutting-edge
          technologies.
        </p>
        <div className="hero-buttons mt-2">
          <Button variant="primary" className="me-2">
            Download Resume
          </Button>
          <Button variant="outline-secondary">Message</Button>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
