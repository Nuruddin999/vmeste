import React, { Component } from 'react';
import ApplicationsTable from "./ApplicationsTable";
import ErrorSnackbar from "../../Snackbars/ErrorSnackbar";
import { fetchApplicationsAction } from "../../redux/ACTIONCREATORS/CuratorReducerActnCrtrs";
import { connect } from "react-redux";
import { getSingleApplicationIndex } from "../../redux/reducers/CuratorReducer";


class ApplicationsContainer extends Component {

    componentDidMount() {
        const { page } = this.props.curatorPage;
        // this.props.getApplications(page, 10,  "SendToFoundations")
    }

    render() {
        const { showErrorSnack, errorCode, errorMessage } = this.props.curatorPage.applicationsTable;
        return (
            /*Если при запросе произошла ошибка то выводим оповещение*/
            <div>
                <ErrorSnackbar open={showErrorSnack} message={errorMessage} />
                <ApplicationsTable state={this.props.curatorPage} dispatch={this.props.getSingleApplIndex} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { curatorPage: state.curatorPage };
};
const mapDispatchToProps = dispatch => {
    return {
        getApplications: (page, count, status) => {
            dispatch(fetchApplicationsAction(page, count, status));
        },
        getSingleApplIndex: (id) => dispatch(getSingleApplicationIndex(id))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApplicationsContainer);