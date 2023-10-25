import axios from "axios";

export default axios.create({
  baseURL: "https://places.googleapis.com/v1/",
  withCredentials: false,

  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": "AIzaSyBuPC-JrJ8gg5818O-sTiJShGY35s2OupE",
    "X-Goog-FieldMask": "places.id,places.formattedAddress,places.location",
  },
});
