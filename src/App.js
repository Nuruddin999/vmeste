import React from "react";
import "./App.css";
import InitialRoute from "./authentication/StartRouting";
import { Route, Redirect } from "react-router-dom";

import WorkplacesContainer from "./workplaces/WorkplacesContainer";
import AuthenticationContainer from "./authentication/AuthenticationContainer";
import Paperbase from "./admin/UIComponents/Paperbase";
import PaperbaseKurator from "./KuratorWorkplace/Paperbase";
import PaperbaseHelper from "./HelperWorkplace/MainUI/Paperbase";
import Chat from "./HelperWorkplace/TasksList/Chat";
import firebase from "./firebaseConfig";

const App = props => {
  // if (localStorage.getItem("access_token") == null) {
  //
  // }
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      return <Redirect to="/helper/tasks" />;
    } else {
      // No user is signed in.
      return <AuthenticationContainer dispatch={props.dispatch} />;
    }
  });
  return (
    <div style={{ height: "100%" }}>
      <Route
        path="/"
        exact
        render={() => <InitialRoute state={props.state} />}
      />
      <Route path="/chat" render={() => <Chat />} />
      <Route
        path="/curator"
        render={prop => <PaperbaseKurator {...prop} {...props} />}
      />
      <Route
        path="/helper"
        render={prop => <PaperbaseHelper {...prop} {...props} />}
      />
      <Route
        path="/workplaces"
        render={() => (
          <WorkplacesContainer state={props.state} dispatch={props.dispatch} />
        )}
      />
      <Route
        path="/login"
        render={() =>
          localStorage.getItem("access_token") == null ? (
            <AuthenticationContainer dispatch={props.dispatch} />
          ) : (
            <Redirect to="/workplaces" />
          )
        }
      />
      <Route
        path="/admin"
        render={prop => <Paperbase {...prop} {...props} />}
      />
    </div>
  );
};

export default App;
