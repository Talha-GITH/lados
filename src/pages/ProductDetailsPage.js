import React, { useState } from 'react';
import { useCart } from './CartContext'; // Import the useCart hook

const ProductDetailsPage = () => {
  const { addToCart } = useCart(); // Access addToCart function from CartContext
  const [selectedColor, setSelectedColor] = useState('Olive Green');
  const [selectedSize, setSelectedSize] = useState('S');

  // Function to add the item to the cart
  const handleAddToCart = () => {
    const item = {
      name: 'T-Shirts',
      price: 50,
      color: selectedColor,
      size: selectedSize,
    };
    addToCart(item);
  };

  return (
    <div>
      {/* Add color selection dropdown */}
      <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
        <option value="Olive Green">Olive Green</option>
        {/* Add more color options */}
      </select>

      {/* Add size selection dropdown */}
      <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
        <option value="S">S</option>
        {/* Add more size options */}
      </select>

      {/* Add to cart button */}
      <button onClick={handleAddToCart}>Add to Cart</button>

      {/* Key Highlights */}
      {/* Assuming other code remains the same as before */}
    </div>
  );
};

export default ProductDetailsPage;
