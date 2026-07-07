// import axios from "axios";

// const API = axios.create({
//     baseURL: "https://product-crud-1-41wv.onrender.com/api"
// });

// export default API;
import axios from "axios";

const API = axios.create({
  // baseURL: "https://product-crud-1-41wv.onrender.com/api",
baseURL:"http://localhost:5000/api",
});

// Attach JWT token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;