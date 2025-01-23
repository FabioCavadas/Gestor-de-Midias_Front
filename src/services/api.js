import axios from 'axios';
import { getAuthToken } from './auth';  


const api = axios.create({
  baseURL: 'http://localhost:8000/api',  
  timeout: 5000, 
});


api.interceptors.request.use(
  (config) => {    
    if (config.noAuth) {
      return config;  
    }
    
    const token = getAuthToken();

    if (token) {     
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
