import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

// Mengatur interceptors untuk menangani error
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 403) {
      localStorage.removeItem("token");
      // Redirect ke halaman login
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
