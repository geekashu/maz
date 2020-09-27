const axios = require('axios');

export const getAuthInstance = () => {
    return axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
