import React from 'react';
import VisibleToursFilterComponent from '../containers/VisibleToursFilter';
import VisibleToursListComponent from '../containers/VisibleToursList';

class ToursTableComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>Поиск туров</h3>
                <VisibleToursFilterComponent />
                <h4>Доступные туры по выбранному направлению</h4>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Дата</th>
                            <th>Название отеля</th>
                            <th>Название номера</th>
                            <th>Название питания</th>
                            <th>Стоимость</th>
                        </tr>
                    </thead>
                    <tbody>
                        <VisibleToursListComponent />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ToursTableComponent;