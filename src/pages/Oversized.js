import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './oversized.css';

function App() {
  const [tshirts, setTshirts] = useState([]);
  const [newTshirt, setNewTshirt] = useState({ name: '', price: 0, color: '', imageUrl: '' });

  useEffect(() => {
    fetchTshirts();
  }, []);

  const fetchTshirts = async () => {
    try {
      const response = await axios.get(' http://localhost:3000/api/tshirts');
      setTshirts(response.data);
    } catch (error) {
      console.error('Error fetching T-shirts:', error);
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewTshirt({ ...newTshirt, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await axios.post(' http://192.168.1.2:3000/api/tshirts', newTshirt);
      setNewTshirt({ name: '', price: 0, color: '', imageUrl: '' });
      fetchTshirts(); // Refresh the T-shirt list after adding a new one
    } catch (error) {
      console.error('Error creating T-shirt:', error);
    }
  };

  return (
    <div className="App">
      <h1>T-shirt Store</h1>
      <div className="tshirt-list">
        {tshirts.map(tshirt => (
          <div key={tshirt._id} className="tshirt">
            <h3>{tshirt.name}</h3>
            <img src={tshirt.imageUrl} alt={tshirt.name} style={{ maxWidth: '200px' }} />
            <p>Price: ${tshirt.price}</p>
            <p>Color: {tshirt.color}</p>
          </div>
        ))}
      </div>
      <h2>Add New T-shirt</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={newTshirt.name} onChange={handleInputChange} required />
        <input type="number" name="price" placeholder="Price" value={newTshirt.price} onChange={handleInputChange} required />
        <input type="text" name="color" placeholder="Color" value={newTshirt.color} onChange={handleInputChange} required />
        <input type="text" name="imageUrl" placeholder="Image URL" value={newTshirt.imageUrl} onChange={handleInputChange} required />
        <button type="submit">Add T-shirt</button>
      </form>
    </div>
  );
}

export default App;
