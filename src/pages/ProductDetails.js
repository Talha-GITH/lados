import React, { useState } from 'react';

const ProductDetails = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    // Implement your logic to add the selected product with the chosen size to the cart
    console.log(`Added ${product.name} to cart with size ${selectedSize}`);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Select Size:</p>
      <div>
        <button onClick={() => handleSizeSelection('S')} disabled={selectedSize === 'S'}>S</button>
        <button onClick={() => handleSizeSelection('M')} disabled={selectedSize === 'M'}>M</button>
        <button onClick={() => handleSizeSelection('L')} disabled={selectedSize === 'L'}>L</button>
        <button onClick={() => handleSizeSelection('XL')} disabled={selectedSize === 'XL'}>XL</button>
      </div>
      <button onClick={handleAddToCart} disabled={!selectedSize}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
