import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css'; // Import the CSS file for additional styles
import LandedPage from './LandedPage';
import Men from './Men';
import Women from './Women';
import Kurti from './Kurti';




function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000 // Adjust the speed as needed
  };

  return (
    <div className="homepage-slider">
      <Slider {...settings}>
        <div>
          <a href="Printed">
            <img src="https://nobero.com/cdn/shop/files/67_3.webp?v=1707987705" alt="Image 1" />
          </a>
        </div>
        <div>
          <a href="your_link_url_here">
            <img src="https://nobero.com/cdn/shop/files/Homepage_Banner_4.png?v=1708003939" alt="Image 2" />
          </a>
        </div>
        <div>
          <a href="your_link_url_here">
            <img src="https://nobero.com/cdn/shop/files/72_4.webp?v=1707987706" alt="Image 3" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="https://nobero.com/cdn/shop/files/69.webp?v=1707987706" alt="Image 4" />
          </a>
        </div>
        {/* Add more images here */}
      </Slider>
      <LandedPage/>
      <Men/>
      <Women/>
      <Kurti/>
     
    </div>

    
  );
}

export default HomePage;
