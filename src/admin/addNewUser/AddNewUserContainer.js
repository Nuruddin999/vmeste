import React, {Component} from 'react';
import {baseUrl, clearPreviousErrorData, getFoundationsAsync, makeGetRequestAsync} from "../../RestAPIHelper";
import WarningComponent from "../UserTable/WarningComponent";
import AddNewUser from "./AddNewUser";
import {
    getAddNewUserForbiddenType, getAddNewUserOnServerType,
    getAddNewUserUnAuthType, getAddNewUserUnknownType,
    getFoundationsType
} from "../../redux/reducers/AdminReducer";

class AddNewUserContainer extends Component {
     getFoundationsAsync = async (page, count,accessToken) => {
        return await makeGetRequestAsync(`${baseUrl}/foundations?page=${page}&count=${count}`, accessToken)

    };
    componentDidMount() {
        const {dispatch} = this.props;
        const {responseCode} = this.props.state.responseStatus;

        clearPreviousErrorData(responseCode,dispatch);

        this.getFoundationsAsync(1, 10,localStorage.getItem("access_token"))
            .then(response => dispatch(getFoundationsType(response)))
            .catch(error => {
                if (error.response.status === 401) {
                    //unauthorized
                    console.log(`error status: ${error.response.status}`);
                    dispatch(getAddNewUserUnAuthType());
                    return;
                }
                if (error.response.status === 403) {
                    //forbidden
                    dispatch(getAddNewUserForbiddenType());
                    return;
                    //show dialog
                }
                if (error.response.status === 500) {
                    dispatch(getAddNewUserOnServerType());
                    return;
                    //server error
                }

                dispatch(getAddNewUserUnknownType())
            });
    }

    render() {
      const {responseCode, errorMessage} = this.props.state.responseStatus;
      const  {adminPage}=this.props.state;

        return (
           responseCode != 0 ? <WarningComponent errorMessage={errorMessage} goto={"adduser"} /> : <div>
            <AddNewUser adminPage={adminPage} foundations={adminPage.foundations}  dispatch={this.props.dispatch}/>
            </div>
        );
    }
}

export default AddNewUserContainer;