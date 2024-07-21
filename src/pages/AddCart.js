import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart'; // Import the Cart component

const FloorLength = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [cart, setCart] = useState([]);

  const products = [
    // Your product data array
  ];

  // Function for selecting a size
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  // Function for adding a product to the cart
  const handleAddToCart = (productId) => {
    if (selectedSize !== null) {
      const selectedProduct = products.find(product => product.id === productId);
      const cartItem = {
        id: selectedProduct.id,
        name: selectedProduct.name,
        size: selectedSize,
        price: selectedProduct.discountedPrice ? selectedProduct.discountedPrice : selectedProduct.price
      };
      setCart([...cart, cartItem]);
      console.log(`Product with ID ${selectedProduct.id} and size ${selectedSize} added to cart.`);
    } else {
      alert("Please select a size before adding to cart.");
    }
  };

  return (
    <div className="container">
      {/* Product Display Section */}
      {products.map(product => (
        <div key={product.id} className="square">
          <div className="link">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </Link>
            <p className="category-name">{product.name}</p>
            <div className="price-container">
              {product.discountedPrice && (
                <>
                  <p className="original-price">
                    <span style={{ textDecoration: "line-through" }}>₹{product.originalPrice}</span>
                    <span style={{ marginLeft: "5px" }}>₹{product.discountedPrice}</span>
                  </p>
                  <p className="discount">{`${product.discountPercentage}% off`}</p>
                </>
              )}
              {!product.discountedPrice && (
                <p className="price">{`₹${product.price}`}</p>
              )}
            </div>
            <div>
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeSelection(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
          </div>
        </div>
      ))}

      {/* Cart Section */}
      <Cart cart={cart} /> {/* Use the Cart component here */}
    </div>
  );
};

export default FloorLength;
