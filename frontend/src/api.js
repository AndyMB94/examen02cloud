import axios from 'axios';

const API = axios.create({
  baseURL: 'http://18.227.161.218:8000/api',
});

export default API;