import axios from "axios";

const API_URL = "http://localhost:8000/auth";

export const registerUser = async (data: any) => {
  const res = await axios.post(`${API_URL}/register`, data);
  return res.data;
};

export const loginUser = async (data: any) => {
  const res = await axios.post(`${API_URL}/login`, data);
  return res.data;
};
    