import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

// Import your product list or fetch from backend
import { products } from "../data/data"; // your product data

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems.map(({ id, quantity }) => ({ id, quantity }))),
    );
  }, [cartItems]);

  const getCartDetails = () =>
    cartItems
      .map((item) => {
        const product = products.find((p) => p.id === item.id);
        if (!product) return null;
        return { ...product, quantity: item.quantity };
      })
      .filter(Boolean);

  const addToCart = (id) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { id, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return getCartDetails().reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const getCartCount = () => cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems: getCartDetails(), // now includes full product info for display
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
