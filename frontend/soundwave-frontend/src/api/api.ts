import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api', // Adjust this based on your backend URL and port
});

export default API;