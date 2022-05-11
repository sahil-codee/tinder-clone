import axios from 'axios';

const instance = axios.create({
    baseURL: "https://itstinder-backend.herokuapp.com/",
})

export default instance;