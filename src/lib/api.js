import axios from "axios";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Response interceptor to handle data extraction
api.interceptors.response.use(
  (response) => {
    if (response.data && response.data.success) {
      return response.data;
    }
    return response.data;
  },
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export const getEvents = (params) => api.get("/client/events", { params });
export const getAnnouncements = (params) => api.get("/client/announcements", { params });
export const getSermons = (params) => api.get("/client/sermons", { params });
export const getMedia = (params) => api.get("/client/media", { params });
export const getStats = () => api.get("/client/stats");
export const createConvert = (data) => api.post("/client/converts", data);

export const getHeroSlides = () => api.get("/client/hero");

export default api;
