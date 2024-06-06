import axios from 'axios';

const CLIENT_ID = '945c8dc9110644f8a104ae5fd7565a2e';
const CLIENT_SECRET = 'cb6353cb6dd14e8f909bed04adedd46c';

const getToken = async () => {
    const response = await axios('https://accounts.spotify.com/api/token', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
    });

    return response.data.access_token;
};

export default getToken;
