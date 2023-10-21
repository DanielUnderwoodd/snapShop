import axios from "axios";
axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: "https://places.googleapis.com/v1/",
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": process.env.GOOGLE_MAP_API_KEY,
    "X-Goog-FieldMask": "places.id,places.formattedAddress,places.location",
  },
});
