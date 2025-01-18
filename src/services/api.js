import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', 
  timeout: 5000, 
});

// // Caso queira usar o token no cabeçalho - verificar se há necessidade de manter
// const token = localStorage.getItem('token');
// if (token) {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }

export default api;