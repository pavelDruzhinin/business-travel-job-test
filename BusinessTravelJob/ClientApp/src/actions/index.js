import api from "../api";

const SET_FILTER = "SET_FILTER";
function setFilter() {
    return function (dispatch) {
        return api.getFilter()
            .then((response) => {
                const data = response.data.data;

                const links = data.links;
                const dictionaries = data.dictionaries;

                return dispatch({ type: SET_FILTER, links, dictionaries })
            });
    }
}

const SET_FILTER_CITY = "SET_FILTER_CITY";
function setFilterCity(city) {
    return { type: SET_FILTER_CITY, city: city };
}

const SET_FILTER_COUNTRY = "SET_FILTER_COUNTRY";
function setFilterCountry(country) {
    return { type: SET_FILTER_COUNTRY, country: country };
}

const SET_FILTER_DATE_FROM = "SET_FILTER_DATE_FROM";
function setFilterDateFrom(dateFrom) {
    return { type: SET_FILTER_DATE_FROM, dateFrom: dateFrom };
}

const SET_FILTER_DATE_TO = "SET_FILTER_DATE_TO";
function setFilterDateTo(dateTo) {
    return { type: SET_FILTER_DATE_TO, dateTo: dateTo };
}

const TOURS_LOADED = "TOURS_LOADED";
function searchTours(filter) {

    return function (dispatch) {
        dispatch({ type: TOURS_LOADING });

        return api.searchTours(filter)
            .then((response) => {
                return dispatch({ type: TOURS_LOADED, tours: response.data.data.items });
            });
    };
}

const TOURS_LOADING = "TOURS_LOADING";
function toggleLoading(isLoading) {
    return { type: TOURS_LOADING, isLoading: isLoading };
}

export default {
    SET_FILTER,
    setFilter,

    SET_FILTER_CITY,
    setFilterCity,

    SET_FILTER_COUNTRY,
    setFilterCountry,

    SET_FILTER_DATE_FROM,
    setFilterDateFrom,

    SET_FILTER_DATE_TO,
    setFilterDateTo,

    TOURS_LOADED,
    searchTours,

    TOURS_LOADING,
    toggleLoading
}