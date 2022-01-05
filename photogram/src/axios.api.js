import axios from 'axios';


const getAPI = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,
})

export { getAPI }