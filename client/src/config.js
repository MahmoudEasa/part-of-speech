import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://part-of-speetch.herokuapp.com/",
  // baseURL: "http://localhost:5000/",
});
