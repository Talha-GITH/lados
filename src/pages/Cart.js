import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <p>Cart contains:</p>
          <ul>
            {cart.map(item => (
              <li key={item.id}>{item.name} - Size: {item.size}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
