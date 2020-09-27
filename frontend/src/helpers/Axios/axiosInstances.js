const axios = require('axios');

export const getAuthInstance = () => {
    return axios.create({
        baseURL: 'http://159.65.157.95',
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
