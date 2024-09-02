import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>"Great products and excellent service!"</p>
          <h4>- John Doe</h4>
        </div>
        <div className="testimonial-card">
          <p>"I love shopping here. Fast delivery every time!"</p>
          <h4>- Jane Smith</h4>
        </div>
        <div className="testimonial-card">
          <p>"Best online shopping experience I've had."</p>
          <h4>- Chris Johnson</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
