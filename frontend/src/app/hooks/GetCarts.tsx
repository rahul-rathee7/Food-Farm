import React from 'react'
import { useCart } from '../components/useCart';
import axios from 'axios';

const GetCarts = () => {
  const { setCartItems } = useCart();

  const handleGetCarts = async () => {
    const res = await axios.get("http://localhost:5000/api/carts")
    setCartItems(res.data);
  };

  return (
    <div>
      <button onClick={handleGetCarts}>Get Carts</button>
    </div>
  )
}

export default GetCarts
