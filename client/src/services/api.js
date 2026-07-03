import axios from "axios";

const API = axios.create({
    baseURL: "https://product-crud-1-41wv.onrender.com/api"
});

export default API;