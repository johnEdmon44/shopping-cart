import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };


  const removeFromCart = (product) => {
    setCart(prev => prev.filter(item => item !== product))
  }

  const clearCart = () => {
    setCart([]);
  }


  return (
    <CartContext.Provider value={{ cart, removeFromCart, clearCart, addToCart }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContext;