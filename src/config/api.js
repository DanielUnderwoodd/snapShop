import axios from "axios";

const api = axios.create({
  baseURL: "https://srv.netbest.tk/api",
  withCredentials: true,
});

//https://srv.netbest.tk/api

// api.interceptors.request.use(
//   (config) => {
//     config.metadata = { startTime: new Date() }; // Add a startTime property to the request config
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor
// api.interceptors.response.use(
//   (response) => {
//     // Calculate the delay

//     const endTime = new Date();
//     const startTime = response.config.metadata.startTime;
//     const delay = endTime - startTime;

//     // Display the delay to the user (you can customize this part)

//     // Check if the delay exceeds 2 seconds and throw an error
//     if (delay > 10000) {
//       throw new Error(`Request took too long, please try again `);
//     }

//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default api;
