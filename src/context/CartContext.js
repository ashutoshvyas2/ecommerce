import { createContext, useContext, useEffect, useState } from "react";

// NOTE: We assume these utility functions exist in this path
// import {
//  saveCartToLocalStorage,
//  getCartFromLocalStorage,
//  clearCartFromLocalStorage
// } from "../utils/localStorageUtils";

// --- Mock Local Storage Functions (if utils don't exist) ---
// Using mocks so the file is runnable
const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem("react_ecommerce_cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Failed to save cart to local storage", e);
  }
};
const getCartFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem("react_ecommerce_cart");
    return cart ? JSON.parse(cart) : [];
  } catch (e) {
    console.error("Failed to get cart from local storage", e);
    return [];
  }
};
const clearCartFromLocalStorage = () => {
  try {
    localStorage.removeItem("react_ecommerce_cart");
  } catch (e) {
    console.error("Failed to clear cart from local storage", e);
  }
};
// --- End Mock Local Storage ---


const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(getCartFromLocalStorage());

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    clearCartFromLocalStorage();
  };

  // ==========================================================
  // 1. THIS FUNCTION WAS LIKELY MISSING OR INCOMPLETE
  // ==========================================================
  const updateQuantity = (id, newQty) => {
    setCart((prevCart) => {
      // If quantity is 0 or less, remove the item
      if (newQty <= 0) {
        return prevCart.filter((item) => item.id !== id);
      }
      // Otherwise, update the quantity for the matching item
      return prevCart.map((item) =>
        item.id === id ? { ...item, qty: newQty } : item
      );
    });
  };


  return (
    // ==========================================================
    // 2. THE `updateQuantity` FUNCTION WAS LIKELY MISSING HERE
    // ==========================================================
    <CartContext.Provider 
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
