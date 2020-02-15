import addMonths from 'date-fns/addMonths';
import addDays from 'date-fns/addDays';
import Actions from "../actions";

const dateFrom = addMonths(new Date(), 1);

function sortOptions(a, b) {
    if (a.label > b.label)
        return 1;

    if (a.label < b.label)
        return -1;

    return 0;
}

function getCountriesByCity(links, dictionaries, city) {
    const cityCountries = links
        .filter(el => el.departureCityId == city.value)
        .map(x => x.countryId);

    return dictionaries.countries
        .filter(el => cityCountries.includes(el.id))
        .map(el => ({ label: el.name, value: el.id }))
        .sort(sortOptions);
}

const initialState = {
    links: [],
    dictionaries: [],

    departureCities: [],
    countries: [],

    departureCity: { value: 0 },
    country: { value: 0 },
    dateFrom: dateFrom,
    dateTo: addDays(dateFrom, 14),

    tours: [],
    isLoading: false
};

const tours = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_FILTER: {
            const departureCities = action.dictionaries.departureCities
                .map((el) => ({ value: el.id, label: el.name.trim() }))
                .sort(sortOptions);

            const defaultCity = departureCities.filter((el) => el.label == 'Москва')[0];
            const countries = getCountriesByCity(action.links, action.dictionaries, defaultCity);

            const defaultCountry = countries.filter((el) => el.label == 'Греция')[0];

            return { ...state, links: action.links, dictionaries: action.dictionaries, departureCities, countries, departureCity: defaultCity, country: defaultCountry };
        }
        case Actions.SET_FILTER_CITY: {
            const countries = getCountriesByCity(state.links, state.dictionaries, action.city);
            const country = countries[0];

            return { ...state, departureCity: action.city, countries, country };
        }
        case Actions.SET_FILTER_COUNTRY:
            return { ...state, country: action.country };
        case Actions.SET_FILTER_DATE_FROM:
            return { ...state, dateFrom: action.dateFrom };
        case Actions.SET_FILTER_DATE_TO:
            return { ...state, dateTo: action.dateTo };

        case Actions.TOURS_LOADED:
            return { ...state, isLoading: false, tours: action.tours };
        case Actions.TOURS_LOADING:
            return { ...state, isLoading: true };
        default:
            return state;
    }
}

export default tours;