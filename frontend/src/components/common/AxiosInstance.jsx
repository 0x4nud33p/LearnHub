import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',// replace it with your backend URL 
});

export default axiosInstance;