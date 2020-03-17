import React, {Component} from 'react';
import UserTable from "./UserTable";
import {baseUrl, errorManaging, makeGetRequestAsync} from "../../RestAPIHelper";
import {clearAccountsList, getAccountsType, UserTableNextPage} from "../../redux/reducers/AdminReducer";
import {getCleatAction, registerResponseError} from "../../redux/reducers/ResponceStatusReducer";
import ErrorSnackbar from "../../Snackbars/ErrorSnackbar";


class UserTableContainer extends Component {

    dispatch = this.props.dispatch.bind(this.props);
    page = this.props.state.page;

    getUsersForAdminPanel = async (page, count) => {
        return await makeGetRequestAsync(`${baseUrl}/admin/accounts`, {page: page, count: 10});
    };

    fetchAccounts = (page) => {

        this.getUsersForAdminPanel(page, 10)
            .then(response => {
                this.dispatch(getAccountsType(response));
                 this.dispatch(UserTableNextPage(this.page))
            })
            .catch(error => {
              errorManaging(error.response.status, this.dispatch,registerResponseError)
            });
    };

    componentDidMount() {

        //очистка списка
        this.dispatch(clearAccountsList());

        //первоначальная загрузка
        this.getUsersForAdminPanel(this.page, 10)
            .then(response => {
                this.dispatch(getAccountsType(response));
            })
            .catch(error => {
                errorManaging(error.response.status, this.dispatch,registerResponseError,getCleatAction)
            });
    };


    render() {
        const {state} = this.props;
        const {dispatch} = this.props;
        return (
           <div>
                <ErrorSnackbar open={ this.props.responseStatus.showErrorSnack} message={this.props.responseStatus.errorMessage} />
                    <UserTable fetch={this.fetchAccounts.bind(this)} getUsers={this.getUsersForAdminPanel.bind(this)}
                               state={state}
                               dispatch={this.props.dispatch}/>
                </div>
        );

    }
}

export default UserTableContainer;