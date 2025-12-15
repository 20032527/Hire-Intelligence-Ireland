import axios from "axios";

// Creating a reusable Axios instance with a base API URL

const instance = axios.create({

  // API base URL for local development

  //baseURL: "https://hire-intelligence-ireland-2.onrender.com/v1",
  baseURL: "http://localhost:5001/v1",
});

// Adds logic before every request is sent
// Ref: https://axios-http.com/docs/interceptors
instance.interceptors.request.use((config) => {

  // Retrieves auth token stored in the browser
  // Ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

  const token = localStorage.getItem("token");

  // Attaches token to request headers if available
  // Ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization

  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
