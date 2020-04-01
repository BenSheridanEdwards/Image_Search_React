import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID nxizvN0EQ5CSyOP4rQGgYV03c28f0LNGIRRSlEojTj8'
  }
});