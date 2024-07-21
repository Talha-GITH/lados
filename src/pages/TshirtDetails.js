import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TshirtDetails = () => {
  const [tshirt, setTshirt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchTshirtDetails = async () => {
      try {
        setLoading(true); // Set loading to true before making the request
        const response = await axios.get(`http://192.168.1.2:3000/api/tshirts/${id}`);
        setTshirt(response.data);
      } catch (error) {
        console.error('Error fetching T-shirt details:', error);
      } finally {
        setLoading(false); // Set loading to false after the request is completed
      }
    };

    fetchTshirtDetails();
  }, [id]);

  const addToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }

    const itemToAdd = { tshirtId: tshirt._id, size: selectedSize, color: selectedColor };
    axios.post('/api/cart/add', itemToAdd)
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        console.error('Error adding to cart:', error);
        alert('Failed to add to cart. Please try again later.');
      });
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while waiting for response
  }

  if (!tshirt) {
    return <div>T-shirt not found</div>;
  }

  return (
    <div>
      <h2>{tshirt.name}</h2>
      <p>{tshirt.shortDescription}</p>
      <p>{tshirt.price}</p>
      <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
        <option value="">Select Size</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <div>
        {tshirt.colors.map((color) => (
          <div
            key={color}
            style={{
              backgroundColor: color,
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              display: 'inline-block',
              margin: '0 5px',
              cursor: 'pointer',
              border: selectedColor === color ? '2px solid black' : 'none'
            }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default TshirtDetails;
