import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddCart from './AddCart';

const FloorLength = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      image: "https://www.libas.in/cdn/shop/products/pink-printed-crepe-straight-kurta-libas-2_540x.jpg?v=1705689135",
      name: "T-Shirts",
      price: 100,
      discount: 30,
      sizes: ["S", "M", "L" ,"XL"]
    },
    {
      id: 2,
      image: "https://www.libas.in/cdn/shop/products/pink-printed-crepe-straight-kurta-libas-2_540x.jpg?v=1705689135",
      name: "Product 2",
      price: 50,
      discount: 20,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 3,
      image: "https://www.libas.in/cdn/shop/products/pink-printed-crepe-straight-kurta-libas-2_540x.jpg?v=1705689135",
      name: "Plain Classic Fit T-Shirt",
      discountedPrice: 499,
      originalPrice: 999,
      discountPercentage: 50,
      lowestPrice: "Lowest price in last 30 days",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 4,
      image: "https://www.libas.in/cdn/shop/products/pink-printed-crepe-straight-kurta-libas-2_540x.jpg?v=1705689135",
      name: "Plain Classic Fit T-Shirt",
      originalPrice: 999,
      discountedPrice: 499,
      discountPercentage: 50,
      lowestPrice: "Lowest price in last 30 days",
      sizes: ["S", "M", "L", "XL"]
    }
  ];

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

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
    </div>
  );
};

export default FloorLength;
