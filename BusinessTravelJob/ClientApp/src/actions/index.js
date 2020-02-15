import api from "../api";

const SET_FILTER = "SET_FILTER";
const setFilter = (links, dictionaries) => ({
    type: SET_FILTER,
    links,
    dictionaries
});

function setFilterThunk() {
    return function (dispatch) {
        return api.getFilter()
            .then((response) => {
                const data = response.data.data;

                const links = data.links;
                const dictionaries = data.dictionaries;

                return dispatch(setFilter(links, dictionaries));
            });
    }
}

const SET_FILTER_CITY = "SET_FILTER_CITY";
const setFilterCity = (city) => ({
    type: SET_FILTER_CITY,
    city: city
});

const SET_FILTER_COUNTRY = "SET_FILTER_COUNTRY";
const setFilterCountry = (country) => ({
    type: SET_FILTER_COUNTRY,
    country: country
});

const SET_FILTER_DATE_FROM = "SET_FILTER_DATE_FROM";
const setFilterDateFrom = (dateFrom) => ({
    type: SET_FILTER_DATE_FROM,
    dateFrom: dateFrom
});

const SET_FILTER_DATE_TO = "SET_FILTER_DATE_TO";
const setFilterDateTo = (dateTo) => ({
    type: SET_FILTER_DATE_TO,
    dateTo: dateTo
});

const TOURS_LOADED = "TOURS_LOADED";
const toursLoaded = (tours) => ({ type: TOURS_LOADED, tours: tours });

const TOURS_LOADING = "TOURS_LOADING";
const toursLoading = () => ({ type: TOURS_LOADING });

const TOURS_LOAD_ERROR = "TOURS_LOAD_ERROR";
const toursLoadError = () => ({ type: TOURS_LOAD_ERROR });

function searchToursThunk(filter) {
    return function (dispatch) {
        dispatch(toursLoading());

        return api.searchTours(filter)
            .then((response) => dispatch(toursLoaded(response.data.data.items)))
            .catch((error) => dispatch(toursLoadError(error)));
    };
}

export default {
    //filter
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

    //tours
    TOURS_LOADED,
    toursLoaded,

    TOURS_LOADING,
    toursLoading,

    TOURS_LOAD_ERROR,
    toursLoadError,

    //thunks
    setFilterThunk,
    searchToursThunk
}