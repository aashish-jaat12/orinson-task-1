import React from 'react';

const Products = () => {
  return (
    <section id="products" className="products-section">
      <h2>Our Products</h2>
      <div className="products-grid">
        <div className="product-card">
          <img src="https://via.placeholder.com/300" alt="Product 1" />
          <h3>Product 1</h3>
          <p>$29.99</p>
        </div>
        <div className="product-card">
          <img src="https://via.placeholder.com/300" alt="Product 2" />
          <h3>Product 2</h3>
          <p>$39.99</p>
        </div>
        <div className="product-card">
          <img src="https://via.placeholder.com/300" alt="Product 3" />
          <h3>Product 3</h3>
          <p>$49.99</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
