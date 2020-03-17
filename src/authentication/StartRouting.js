import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import AuthenticationContainer from "./AuthenticationContainer";
import firebase from "../firebaseConfig";

const InitialRoute = props => {
  /* return localStorage.getItem("access_token") == null ? (
    <Redirect to="/login" />
  ) : (
    <Redirect to="/helper" />
  );*/
  const [state, setstate] = useState(false);
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      setstate(true);
    } else {
      // No user is signed in.
      return <AuthenticationContainer dispatch={props.dispatch} />;
    }
  });
  return state ? (
    <Redirect to="/helper/tasks" />
  ) : (
    <AuthenticationContainer dispatch={props.dispatch} />
  );
};

export default InitialRoute;
