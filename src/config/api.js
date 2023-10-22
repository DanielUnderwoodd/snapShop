import axios from "axios";
axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: "https://srv.netbest.tk/api",
});

//https://srv.netbest.tk/api
