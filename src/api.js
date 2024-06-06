import axios from 'axios';
import getToken from './spotify';

let token;

const searchMusic = async (query, type) => {
    if (!token) {
        token = await getToken();
    }

    const response = await axios.get(`https://api.spotify.com/v1/search`, {
        headers: {
            'Authorization': 'Bearer ' + token
        },
        params: {
            q: query,
            type: type,
            limit: 10
        }
    });

    return response.data;
};

export default searchMusic;
