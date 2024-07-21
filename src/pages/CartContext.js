import React, { createContext, useContext, useReducer } from 'react';

// Initial state of the cart
const initialState = {
  items: [],
};

// Action types
const ADD_TO_CART = 'ADD_TO_CART';

// Reducer function to handle state changes
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

// Context
const CartContext = createContext();

// Custom hook to consume the context
export const useCart = () => {
  return useContext(CartContext);
};

// Cart Provider component
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  // Function to add item to the cart
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
