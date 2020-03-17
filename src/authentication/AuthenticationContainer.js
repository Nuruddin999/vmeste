import React, { Component } from 'react';
import { baseUrl, makePostRequestAsync } from "../RestAPIHelper";
import Authentication from "./Authentication";
import { getUserPageSubmitType } from "../redux/reducers/UserReducer";


class AuthenticationContainer extends Component {
    postAccountData = async (login, password) => {
        const res = await makePostRequestAsync(`${baseUrl}/signin`, {
            username: login,
            password: password
        });

        return res;

    };
    logIn = (oAuth) => {
        const { access_token, expires_in, refresh_token, created_at } = oAuth;
        localStorage.setItem("oauth", JSON.stringify(oAuth));
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("expires_in", expires_in);
        localStorage.setItem("refresh_token", refresh_token);
        localStorage.setItem("created_at", created_at);
        this.props.dispatch(getUserPageSubmitType())
    };
    render() {
        return (
            <Authentication sendData={this.postAccountData} logIn={this.logIn.bind(this)} dispatch={this.props.dispatch} />
        );
    }
}

export default AuthenticationContainer;