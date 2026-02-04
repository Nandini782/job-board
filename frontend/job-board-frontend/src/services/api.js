import axios from "axios";

const api = axios.create({
  baseURL: "/api", // 👈 THIS IS CRITICAL
});

export default api;
