import React, { useState, createContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };


  const removeFromCart = (product) => {
    const updateCart = cart.filter((item) => item !== product);
    setCart(updateCart);
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