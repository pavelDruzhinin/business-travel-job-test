import React from 'react';
import PropTypes from 'prop-types';

class ToursListComponent extends React.Component {
    static propTypes = {
        tours: PropTypes.array,
        isLoading: PropTypes.bool.isRequired
    }

    render() {
        if (this.props.isLoading)
            return (<tr><td colSpan="5">Загрузка...</td></tr>);

        const tours = this.props.tours;
        return !tours ? <tr><td colSpan="5">Нет туров по выбранному диапазону</td></tr> : tours.map(tour => (
            <tr key={tour.hash}>
                <td>{tour.tour.date}</td>
                <td>{tour.hotels[0].name}</td>
                <td>{tour.hotels[0].room.name}</td>
                <td>{tour.hotels[0].mealType.name}</td>
                <td>{tour.price.value} {tour.price.currencyCode}</td>
            </tr>
        ));
    }
}

export default ToursListComponent;