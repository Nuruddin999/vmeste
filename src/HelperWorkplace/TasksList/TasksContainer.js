import React, { Component, PureComponent } from "react";
import {
  addTasksToStore,
  getTasksAction,
  setSingleTaskIndex,
  incrementPage,
  clearTasksList,
  removeTask
} from "../../redux/ACTIONCREATORS/HelperReducerAction";
import { connect } from "react-redux";
import ErrorSnackbar from "../../Snackbars/ErrorSnackbar";
import TasksTable from "./TasksTable";
import { registerError } from "../../redux/ACTIONCREATORS/errorActions";
import { icons } from "../Icons/Icons";
import Chat from "./Chat";
import { setTasksTest, getTasksTest } from "../../testFunctions";
import axios from "axios";

class TasksContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      chatOpen: "none",
      page: 1
    };
    this.chatState = this.chatState.bind(this);
    this.incrementPage = this.incrementPage.bind(this);
    this.delete = this.delete.bind(this);
  }
  delete = async id => {
    await axios.delete(`https://curier-df119.firebaseio.com/tasks/${id}.json`);
    this.props.removeFromList(id);
  };
  chatState = chatState => {
    let prevState = this.state;
    if (chatState === "none") {
      this.setState({
        ...prevState,
        chatOpen: "block"
      });
    } else {
      this.setState({
        ...prevState,
        chatOpen: "none"
      });
    }
  };
  incrementPage = page => {
    let prevState = this.state;
    this.setState({
      ...prevState,
      page: ++page
    });
  };
  getFakeTasks = page => {
    let tasksList = getTasksTest(page);
    this.props.fakeTasks(tasksList);
  };
  componentDidMount() {
    const { page, tasks } = this.props.helpersPage;
    const { errors } = this.props;
    this.props.getTasks(this.props.errors);
  }
  componentWillUnmount() {}

  render() {
    const { showErrorSnack, errorMessage } = this.props.errors;

    return (
      <div>
        <ErrorSnackbar open={showErrorSnack} message={errorMessage} />
        <TasksTable
          chatState={this.state.chatOpen}
          chatChangeState={this.chatState}
          icons={icons}
          state={this.props.helpersPage}
          currentPage={this.state.page}
          incr={this.incrementPage.bind(this)}
          remove={this.delete}
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
    getTasks: (page, count) => {
      dispatch(getTasksAction(page, count, registerError));
    },
    increment: page => dispatch(incrementPage(page)),
    fakeTasks: tasks => dispatch(addTasksToStore(tasks)),
    clearTasksTable: () => dispatch(clearTasksList()),
    removeFromList: id => dispatch(removeTask(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);
