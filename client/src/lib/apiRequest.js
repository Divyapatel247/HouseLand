import axios from "axios";
const token = localStorage.getItem("token");
const apiRequest = axios.create({
  baseURL: "http://localhost:8800/api",
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
});

export default apiRequest;
