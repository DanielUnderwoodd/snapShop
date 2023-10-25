import axios from "axios";
axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: "https://snapshop-api-production.up.railway.app/api",
});

//https://srv.netbest.tk/api
