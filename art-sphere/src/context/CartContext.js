
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <CartContext.Provider value={{ cartItems, totalAmount, setCartItems, setTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
