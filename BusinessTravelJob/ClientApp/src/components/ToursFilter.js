import React from 'react';
import PropTypes from "prop-types";

import Select from 'react-select';
import Datepicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

class ToursFilterComponent extends React.Component {
    static propTypes = {
        departureCities: PropTypes.array.isRequired,
        countries: PropTypes.array.isRequired,

        //filter
        departureCity: PropTypes.object.isRequired,
        country: PropTypes.object.isRequired,
        dateFrom: PropTypes.object.isRequired,
        dateTo: PropTypes.object.isRequired,

        onFilter: PropTypes.func
    }

    componentDidMount() {
        this.props.setFilter();
    }

    render() {
        return (
            <div className="d-flex mb-3 tours-filter">
                <div className="mr-2">
                    <label>Город вылета</label>
                    <Select
                        className="tours-filter-select"
                        value={this.props.departureCity}
                        onChange={this.props.setFilterCity}
                        options={this.props.departureCities}
                    />
                </div>
                <div className="mr-2">
                    <label>Страна</label>
                    <Select
                        className="tours-filter-select"
                        value={this.props.country}
                        onChange={this.props.setFilterCountry}
                        options={this.props.countries}
                    />
                </div>
                <div className="mr-2">
                    <label>Дата с</label>
                    <div>
                        <Datepicker
                            className="form-control"
                            selected={this.props.dateFrom}
                            onChange={this.props.setFilterDateFrom}
                            dateFormat="dd.MM.yyyy"
                        />
                    </div>
                </div>
                <div className="mr-2">
                    <label>Дата по</label>
                    <div>
                        <Datepicker
                            className="form-control"
                            selected={this.props.dateTo}
                            onChange={this.props.setFilterDateTo}
                            dateFormat="dd.MM.yyyy"
                        />
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-end">
                    <button type="button" className="btn btn-primary" onClick={() => this.props.onFilter(this._getFilter())}>Поиск</button>
                </div>
            </div>
        );
    }

    _getFilter() {
        const { departureCity, country, dateFrom, dateTo } = this.props;
        return {
            departureCities: [departureCity.value],
            countries: [country.value],
            dateFrom,
            dateTo,
            nights: [6, 7, 8, 9, 10]
        };
    }
}

export default ToursFilterComponent;