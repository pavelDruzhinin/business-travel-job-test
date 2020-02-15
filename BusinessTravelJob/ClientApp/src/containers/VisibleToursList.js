import ToursList from "../components/ToursList";
import Actions from "../actions";

import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.tours.isLoading,
        tours: state.tours.tours
    };
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
}

const VisibleToursList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToursList);

export default VisibleToursList;