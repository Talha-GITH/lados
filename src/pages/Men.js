import React from 'react';
import { Link } from 'react-router-dom';

const ShopForMens = () => {
  return (
    <div className="products-container">
      <h1>Shop For Men</h1>
      <div className="product-links">
        <Link to="/tshirts" className="product-link">
          <div className="product-container">
            <div className="circle">
              <img
                src="https://nobero.com/cdn/shop/files/Shorts_2.png?v=1696586115&width=360"
                alt="T-Shirts"
                className="product-image"
              />
              <p className="category-name">T-Shirts</p>
            </div>
          </div>
        </Link>
        <Link to="/comfortshorts" className="product-link">
          <div className="product-container">
            <div className="circle">
              <img
                src="https://nobero.com/cdn/shop/collections/8.jpg?v=1679917719"
                alt="Comfort Shorts"
                className="product-image"
              />
              <p className="category-name">Comfort Shorts</p>
            </div>
          </div>
        </Link>
        <Link to="/oversizedtshirts" className="product-link">
          <div className="product-container">
            <div className="circle">
              <img
                src="https://nobero.com/cdn/shop/files/O._Tees_1.png?v=1696574893&width=360"
                alt="Oversized T-Shirts"
                className="product-image"
              />
              <p className="category-name">Oversized T-Shirts</p>
            </div>
          </div>
        </Link>
        {/* Add more product links here */}
      </div>
    </div>
  );
}

export default ShopForMens;
