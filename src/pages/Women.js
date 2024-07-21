import React from 'react'
import { Link } from 'react-router-dom';

const Women = () => {
  return (
    <div className="products-container">
    <h1>Shop For Women</h1>
    <div className="product-links">
      <Link to="/tshirts" className="product-link">
        <div className="product-container">
          <div className="circle">
            <img
              src="https://nobero.com/cdn/shop/files/28_1e5761c4-54df-4cab-a1d2-7593732f4c6f.png?v=1696595253"
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
              src="https://nobero.com/cdn/shop/files/24_2166fb9a-0935-4df7-aaf7-9ba95c99e89f.png?v=1696595316"
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
              src="https://nobero.com/cdn/shop/files/gol-gol_website_4.png?v=1707396441"
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


export default Women