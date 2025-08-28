import axios from "axios";

export const getCart = async () => {
  const res = await axios.get("http://localhost:5000/api/carts");
  return res.data;
};

export const saveCart = async (cartItems) => {
  await axios.post("http://localhost:5000/api/carts", cartItems);
};
