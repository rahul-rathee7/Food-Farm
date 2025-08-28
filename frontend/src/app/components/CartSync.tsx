'use client'

import { useEffect } from "react";
import { useCart } from "./useCart";
import { saveCart, getCart } from "../api/cartApi";

let timeout: NodeJS.Timeout;

const CartSync = () => {
  const { cartItems, setCartItems } = useCart();

  useEffect(() => {
  getCart()
    .then((data) => {
      console.log("Cart API response:", data);
      if (Array.isArray(data)) {
        setCartItems(data);
      } else if (Array.isArray(data?.products)) {
        setCartItems(data.products);  
      } else {
        setCartItems([]); 
      }
    })
    .catch((err) => console.error("Failed to fetch cart:", err));
}, []);


  useEffect(() => {
    clearTimeout(timeout);
    if (cartItems.length > 0) {
      timeout = setTimeout(() => {
        saveCart(cartItems).catch((err) => console.error(err));
      }, 500); // wait 500ms after last change
    }
  }, [cartItems]);

  return null;
};

export default CartSync;
