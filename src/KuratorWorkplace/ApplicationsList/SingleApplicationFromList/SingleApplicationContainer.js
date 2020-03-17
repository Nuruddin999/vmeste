import React, {Component} from 'react';
import SingleApplication from "./SingleApplicationFromList";
import {baseUrl, makePostRequestAsync} from "../../../RestAPIHelper";
import {
    EditApplicationAction,
} from "../../../redux/ACTIONCREATORS/CuratorReducerActnCrtrs"
import ApplicationForm from "./ApplicationFrom";
import {connect} from "react-redux";
class SingleApplicationContainer extends Component {
    editCurrentApplicationStatusAsync = async (applicationId, currentStatus) => {
        const config = {
            headers: {
                RequestId: `${applicationId}`,
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                'content-type': 'application/json'
            }
        };
        const res = makePostRequestAsync(`${baseUrl}/requests/${applicationId}/status?status=${currentStatus}`, null, config);
        return res
    };
    deleteAttachmentAsync = async (applicationIndex) => {
        /** здесь должно быть рест апи для удаления **/
        console.log(applicationIndex)
    };

    render() {
        const {singleApplicationIndex,applications,applicationsTable,editCurrentStatus}=this.props.state;
        const application=applications[singleApplicationIndex];
        const applForm = <ApplicationForm
            application={application}
            onTextChange={this.props.onTextChange}
        />;
        return (
            <SingleApplication applForm={applForm}
                               editCurrentStatus={this.editCurrentApplicationStatusAsync.bind(this)}
                               dispatch={this.props.dispatch}
                               deleteAttachment={this.deleteAttachmentAsync.bind(this)}
                               applications={applications}
                               editCurrentStatus={editCurrentStatus}
                               singleApplicationIndex={singleApplicationIndex}
                               applicationsTable={applicationsTable}

            />
        );
    }
}
const mapStateToProps = state => {
    return {state: state.curatorPage};
};
const mapDispatchToProps = dispatch => {
    return {
        onTextChange: (name, {target: {value}}) => {
            dispatch(EditApplicationAction(name, {target: {value}}));
        }
    };
};
export  default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleApplicationContainer);