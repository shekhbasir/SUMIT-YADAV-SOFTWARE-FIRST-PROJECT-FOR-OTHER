import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const movementApi = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const joinMovement = async (formData) => {
  const response = await movementApi.post("/movement/join", formData);

  return response.data;
};

export default movementApi;
