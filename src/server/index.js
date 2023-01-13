import axios from 'axios';

const HTTPClient = axios.create({
    baseURL: 'http://localhost:2020/',
});

export default HTTPClient