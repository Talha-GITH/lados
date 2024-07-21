import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LandedPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000 // Adjust the speed as needed
  };

  // Calculate the discounted price and percentage
  const calculateDiscount = (originalPrice, discountPercentage) => {
    const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
    const discountAmount = originalPrice - discountedPrice;
    return { discountedPrice, discountAmount };
  };

  return (
    <div style={{ textAlign: 'center', fontSize: '0.7em' }}>
      <h1>Just Landed</h1>
      <p>Explore Latest Drops</p>
      <Slider {...settings} style={styles.slider}>
        <div style={styles.imageContainer}>
          <div>
            <a href="Printed">
              <img style={styles.image} src="https://nobero.com/cdn/shop/files/Just_Landed_12.png?v=1708003938&width=2000" alt="Image 3" />
            </a>
            <p style={styles.productName}>Product Name 1</p>
            <p style={styles.productPrice}>
              <span style={styles.originalPrice}>$100</span> 
              <span style={styles.discount}>$88</span> 
              <span style={styles.discountPercentage}>(18% off)</span>
            </p>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <div>
            <a href="your_link_url_here">
              <img style={styles.image} src="https://nobero.com/cdn/shop/files/black_a119e840-d49e-4a9c-b623-9579f5c5a984.jpg?v=1705410025&width=360" alt="Image 3" />
            </a>
            <p style={styles.productName}>Product Name 2</p>
            <p style={styles.productPrice}>
              <span style={styles.originalPrice}>$120</span> 
              <span style={styles.discount}>$100</span> 
              <span style={styles.discountPercentage}>(20% off)</span>
            </p>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <div>
            <a href="https://shorturl.at/euvZ7">
              <img style={styles.image} src="https://shorturl.at/stuFG" alt="Image 3" />
            </a>
            <p style={styles.productName}>Product Name 3</p>
            <p style={styles.productPrice}>
              <span style={styles.originalPrice}>$80</span> 
              <span style={styles.discount}>$60</span> 
              <span style={styles.discountPercentage}>(25% off)</span>
            </p>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <div>
            <a href="https://shorturl.at/euvZ7">
              <img style={styles.image} src="https://shorturl.at/rtBP6" alt="Image 3" />
            </a>
            <p style={styles.productName}>Product Name 3</p>
            <p style={styles.productPrice}>
              <span style={styles.originalPrice}>$80</span> 
              <span style={styles.discount}>$60</span> 
              <span style={styles.discountPercentage}>(25% off)</span>
            </p>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <div>
            <a href="https://shorturl.at/euvZ7">
              <img style={styles.image} src="https://nobero.com/cdn/shop/files/T-shirt_Mockup_2.jpg?v=1708506254&width=360" alt="Image 3" />
            </a>
            <p style={styles.productName}>Product Name 3</p>
            <p style={styles.productPrice}>
              <span style={styles.originalPrice}>$80</span> 
              <span style={styles.discount}>$60</span> 
              <span style={styles.discountPercentage}>(25% off)</span>
            </p>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <div>
            <a href="https://shorturl.at/euvZ7">
              <img style={styles.image} src="https://shorturl.at/jmxY4" alt="Image 3" />
            </a>
            <p style={styles.productName}>Product Name 3</p>
            <p style={styles.productPrice}>
              <span style={styles.originalPrice}>$80</span> 
              <span style={styles.discount}>$60</span> 
              <span style={styles.discountPercentage}>(25% off)</span>
            </p>
          </div>
        </div>
          <div style={styles.imageContainer}>
          <div>
            <a href="https://shorturl.at/euvZ7">
              <img style={styles.image} src="https://shorturl.at/foG01" alt="Image 3" />
            </a>
            <p style={styles.productName}>Product Name 3</p>
            <p style={styles.productPrice}>
              <span style={styles.originalPrice}>$80</span> 
              <span style={styles.discount}>$60</span> 
              <span style={styles.discountPercentage}>(25% off)</span>
            </p>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <div>
            <a href="https://shorturl.at/euvZ7">
              <img style={styles.image} src="https://shorturl.at/uDJW3" alt="Image 3" />
            </a>
            <p style={styles.productName}>Product Name 3</p>
            <p style={styles.productPrice}>
              <span style={styles.originalPrice}>$80</span> 
              <span style={styles.discount}>$60</span> 
              <span style={styles.discountPercentage}>(25% off)</span>
            </p>
          </div>
        </div>
        {/* Add more images here */}
      </Slider>
    </div>
  );
}

const styles = {
  slider: {
    margin: '0 auto', // Center the slider
  },
  imageContainer: {
    margin: '0 10px', // Add space between images
  },
  image: {
    width: '90%',
    height: 'auto',
  },
  productName: {
    fontSize: '1em',
    fontWeight: 'bold',
    margin: '5px 0',
  },
  productPrice: {
    fontSize: '0.8em',
    margin: '5px 0',
  },
  originalPrice: {
    textDecoration: 'line-through',
    marginRight: '5px',
  },
  discount: {
    fontWeight: 'bold',
    marginRight: '5px',
  },
  discountPercentage: {
    color: 'green',
  }
};

export default LandedPage;

