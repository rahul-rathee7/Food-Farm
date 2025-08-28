import axios from "axios";

export const getUser = async () => {
    const res = await axios.get("http://localhost:5000/api/users");
    return res.data;
};

export const saveUser = async (user) => {
    await axios.post("http://localhost:5000/api/users", user);
};

export const updateUser = async (user) => {
    await axios.put(`http://localhost:5000/api/users/${user.id}`, user);
};

export const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
};

export const getUserById = async (id) => {
    const res = await axios.get(`http://localhost:5000/api/users/${id}`);
    return res.data;
};