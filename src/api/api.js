import axios from "axios";

const API = axios.create({
  baseURL: "https://tours-travels-backend-production.up.railway.app",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// ================= AUTH APIs =================

// Register
export const register = async (userData) => {
  const res = await API.post("/api/auth/register", userData);
  return res.data;
};

// Login
export const login = async (credentials) => {
  const res = await API.post("/api/auth/login", credentials);
  return res.data;
};

export const getProfile = async () => {
  const res = await API.get("/api/auth/profile");
  return res.data;
};

export default API;