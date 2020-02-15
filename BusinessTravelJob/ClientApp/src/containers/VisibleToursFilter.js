import ToursFilter from "../components/ToursFilter";
import Actions from "../actions";

import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    const { departureCities, countries, country, departureCity, dateTo, dateFrom } = state.tours;
    return {
        departureCities,
        countries,
        country,
        departureCity,
        dateFrom,
        dateTo
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setFilter: () => {
            dispatch(Actions.setFilter());
        },
        setFilterCity: (city) => {
            dispatch(Actions.setFilterCity(city));
        },
        setFilterCountry: (country) => {
            dispatch(Actions.setFilterCountry(country));
        },
        setFilterDateFrom: (dateFrom) => {
            dispatch(Actions.setFilterDateFrom(dateFrom));
        },
        setFilterDateTo: (dateTo) => {
            dispatch(Actions.setFilterDateTo(dateTo));
        },
        onFilter: (filter) => {
            dispatch(Actions.searchTours(filter))
        }
    }
}

const VisibleToursFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToursFilter);

export default VisibleToursFilter;