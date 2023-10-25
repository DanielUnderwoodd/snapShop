import axios from "axios";
axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: "https://my-project-snap-group.ew.r.appspot.com/api",
});

//https://srv.netbest.tk/api
