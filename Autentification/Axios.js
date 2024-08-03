// axios.config.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3003/app',
  headers: {
    'Content-Type': 'application/json',
    // Vous pouvez ajouter d'autres en-têtes ici, comme un token d'authentification par exemple
  },
});

export default axiosInstance;