import React from "react";
import ProfileDetails from "./ProfileDetails";

const HeroSection: React.FC = () => (
  <section className="hero-section">
    <div className="hero-banner">
      <img
        src="https://via.placeholder.com/1200x300"
        alt="Banner"
        className="banner-img"
      />
      <div className="profile-picture">
        <img src="https://via.placeholder.com/300" alt="Profile" />
      </div>
    </div>
    {/* Include ProfileDetails within Hero */}
    <ProfileDetails />
  </section>
);

export default HeroSection;
