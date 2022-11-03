import env from "./env";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

const axiosInstance = axios.create({
  baseURL: env.API_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : null,
  },
});

export default axiosInstance;
