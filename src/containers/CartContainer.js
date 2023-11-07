import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";

function useCart() {
  const initialData = localStorage.getItem("cart");
  const [cart, setCart] = useState(initialData ? JSON.parse(initialData) : []);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  function removeFromCart(item_name) {
    const index = cart.findIndex((item) => item.name === item_name);
    if (index >= 0) {
      cart.splice(index, 1);
    }
    setCart([...cart]);
  }

  function clearCart() {
    setCart([]);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    clearCart,
  };
}

export const CartContainer = createContainer(useCart);
