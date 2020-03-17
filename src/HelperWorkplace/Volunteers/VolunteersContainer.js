import React, { Component } from "react";
import {
  getTasksAction,
  setSingleTaskIndex,
  removeVolunFromList,
  getVolunteersAction,
  clearVolssList
} from "../../redux/ACTIONCREATORS/HelperReducerAction";
import { registerError } from "../../redux/ACTIONCREATORS/errorActions";
import { connect } from "react-redux";
import { icons } from "../Icons/Icons";
import VolunteersTable from "./VolunteersTable";
import { saveButtonStyle } from "../CommonDiffUiStyles";
import axios from "axios";
class VolunteersContainer extends Component {
  delete = async id => {
    await axios.delete(
      `https://curier-df119.firebaseio.com/volunteers/${id}.json`
    );
    this.props.removeFromListVol(id);
  };
  componentDidMount() {
    const { page, tasks } = this.props.helpersPage;
    const { errors } = this.props;
    this.props.getVolunteers(this.props.errors);
  }
  componentWillUnmount() { }

  render() {
    return (
      <div>
        <VolunteersTable
          state={this.props.helpersPage}
          icons={icons}
          remove={this.delete.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    helpersPage: state.helperPage,
    errors: state.errorsPage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getVolunteers: (page, count) => {
      dispatch(getVolunteersAction(registerError));
    },
    removeFromListVol: id => {
      dispatch(removeVolunFromList(id));
    },
    clearVolunteersTable: () => {
      dispatch(clearVolssList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VolunteersContainer);
