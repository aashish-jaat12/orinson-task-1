import React from 'react';

const Features = () => {
  return (
    <section id="features" className="features-section">
      <h2>Our Features</h2>
      <div className="features-cards">
        <div className="feature-card">
          <i className="fas fa-truck"></i>
          <h3>Fast Delivery</h3>
          <p>Get your orders delivered fast and on time.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-undo"></i>
          <h3>Easy Returns</h3>
          <p>Hassle-free returns on all purchases.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-lock"></i>
          <h3>Secure Payment</h3>
          <p>100% secure payment options for peace of mind.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
