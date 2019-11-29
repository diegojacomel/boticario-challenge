// Modules
import axios from 'axios';

// Constants
import { BASE_URL } from 'utils/variables';

class Api {
    static get(uri) {
        return axios.get(`${BASE_URL}${uri}`);
    }

    static post(uri, data) {
        return axios.post(`${BASE_URL}${uri}`, data);
    }

    static put(uri, data) {
        return axios.put(`${BASE_URL}${uri}`, data);
    }

    static patch(uri, data) {
        return axios.patch(`${BASE_URL}${uri}`, data);
    }

    static delete(uri) {
        return axios.delete(`${BASE_URL}${uri}`);
    }

    static getPDF(uri) {
        return axios.get(uri, { responseType: "blob" });
    }
}


export {
    Api,
};