import axios from "axios";
axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: "http://localhost:4000/api",
});
