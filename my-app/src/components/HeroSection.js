import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Welcome to EmporifyX</h1>
        <p>Your one-stop shop for the best products online.</p>
        <button className="hero-btn">Shop Now</button>
      </div>
      <div className="hero-image">
        <img src="https://via.placeholder.com/600" alt="Shopping" />
      </div>
    </section>
  );
};

export default HeroSection;
