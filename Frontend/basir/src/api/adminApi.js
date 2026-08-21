import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const adminApi = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const adminLogin = async (username, password) => {
  const response = await adminApi.post("/auth/admin/login", {
    username,
    password,
  });

  return response.data;
};

export const getCurrentAdmin = async () => {
  const response = await adminApi.get("/auth/admin/me");

  return response.data;
};

export const adminLogout = async () => {
  const response = await adminApi.post("/auth/admin/logout");

  return response.data;
};

export const getDashboard = async () => {
  const response = await adminApi.get("/admin/dashboard");

  return response.data;
};

export const getMembers = async (params = {}) => {
  const response = await adminApi.get("/admin/members", {
    params,
  });

  return response.data;
};

export const getMember = async (id) => {
  const response = await adminApi.get(`/admin/members/${id}`);

  return response.data;
};

export default adminApi;
