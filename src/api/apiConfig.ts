import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.J3hYtanfhMZhpRG6kCYCUURED1xtnb_dfX88zFQ5jPa9oboKFehbbh5EtWVq',
  },
});
