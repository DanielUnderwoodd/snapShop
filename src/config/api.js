import axios from "axios";
axios.defaults.withCredentials = true;
export default axios.create({
  baseURL: "https://snap-api.onrender.com/api/",
  "Access-Control-Allow-Origin": "*",
});
