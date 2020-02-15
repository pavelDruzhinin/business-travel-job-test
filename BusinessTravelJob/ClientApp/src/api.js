import axios from "axios";

export default {
    getFilter() {
        return axios.get('/tours/filter');
    },

    searchTours(filter) {
        return axios.get('/tours/search', { params: filter });
    }
};