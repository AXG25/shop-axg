import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(init);

  const agregarAlCarrito = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const totalCart = () => {
    return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const cartCount = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  console.log(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        isInCart,
        emptyCart,
        totalCart,
        removeItem,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
