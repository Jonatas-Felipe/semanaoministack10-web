import axios from 'axios';

const api = axios.create({
    baseURL: "https://semanaoministack10-backend.herokuapp.com"
});

export default api;