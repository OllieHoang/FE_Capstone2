import axios from 'axios';
const Api_url = 'http://localhost:8000';

export default async function callApi(endpoit = '', method = 'post', body) {
    return await axios({
        baseURL: `${Api_url}/${endpoit}`,
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
    });
}
