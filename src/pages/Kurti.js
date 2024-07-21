import React from 'react';
import { Link } from 'react-router-dom';
const Kurti = () => {
  return (
    <div className="products-container">
      <h1>Shop For Kurti</h1>
      <div className="product-links">
        {/* Link for Printed Kurti */}
        <Link to="/kurti/Printed" className="product-link">
          <div className="product-container">
            <div className="circle">
              <img
                src="https://www.houseofchikankari.in/cdn/shop/files/web_highlights_c58d8418-1856-4774-8cb6-5d5fa5a4e5a5.png?v=1706161468"
                alt="Printed Kurti"
                className="product-image"
              />
            </div>
            <p className="category-name">Printed Kurti</p>
          </div>
        </Link>

        {/* Link for Floor Length Kurti */}
        <Link to="/kurti/floor-length" className="<Printed>">
          <div className="product-container">
            <div className="circle">
              <img
                src="https://www.houseofchikankari.in/cdn/shop/files/2_b5bb1409-eee0-42c7-9b89-5a5dc62a2ff1.png?v=1705666576"
                alt="Floor Length Kurti"
                className="product-image"
              />
            </div>
            <p className="category-name">Floor Length Kurti</p>
          </div>
        </Link>

        {/* Link for Oversized Kurti */}
        <Link to="/kurti/oversized" className="product-link">
          <div className="product-container">
            <div className="circle">
              <img
                src="https://www.houseofchikankari.in/cdn/shop/files/web_highlights_d9b1b1d8-9373-4e15-8f38-127ce501c622.png?v=1698821724"
                alt="Oversized Kurti"
                className="product-image"
              />
            </div>
            <p className="category-name">Oversized Kurti</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Kurti;
