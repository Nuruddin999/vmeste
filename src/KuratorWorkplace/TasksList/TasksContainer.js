import React, {Component} from 'react'
import {makeGetRequestAsync} from "../../RestAPIHelper";
import WarningComponent from "../../admin/UserTable/WarningComponent";
import ApplicationsTable from "../ApplicationsList/ApplicationsTable";
import TasksList from "./TasksList";

class TasksContainer extends Component {
    getTasksFromServerAsync = async (page, count, accessToken) => {
        return await makeGetRequestAsync(`http://5.101.49.35:5005/api/curator/requests?page=1&count=10&cityIds=1,2`, accessToken)
    };
    componentDidMount() {
        const {page}=this.props.state.curatorPage;
        const {dispatch}=this.props;
        /*
    this.getApplicationsAsync(page,10,localStorage.getItem("access_token")).then(result=>{
            dispatch(getApplicationsAction())
        }).catch(error => {
            errorManaging(error, dispatch)
        });*/ /** пока тут приходят пустые данные поэтому не запускаем **/

    }

    render() {
        return (
            /*Если при запросе произошла ошибка то выводим оповещение*/
            this.props.state.responseStatus.responseCode != 0 ?
                <WarningComponent errorMessage={this.props.state.responseStatus.errorMessage} dispatch={this.props.dispatch} goto={"/curator"}/>:
                <div>
                    <TasksList state={this.props.state} dispatch={this.props.dispatch}/>
                </div>
        );
    }
}

export default TasksContainer;