import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

let errorCount = 0;
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error);
    ++errorCount;
    if (errorCount === 3) {
      axiosInstance.defaults.baseURL = process.env.API_SECONDARY_BASE_URL;
      errorCount = 0;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
