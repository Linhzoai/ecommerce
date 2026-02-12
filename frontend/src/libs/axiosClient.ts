import axios from "axios";

const BaseURL = import.meta.env.MODE === "development" ? "http://localhost:8080/api" : import.meta.env.VITE_API_URL;
const api = axios.create({
    baseURL: BaseURL,
    validateStatus: status => status >=200 && status < 300,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});


export default api;