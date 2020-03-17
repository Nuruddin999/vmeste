import React from "react";
import "./Authentication.css";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { getUserPageSubmitType } from "../redux/reducers/UserReducer";
import firebase from "../firebaseConfig";

const Authentication = props => {
  function handleSubmit(event) {
    event.preventDefault();
    const credentials = new FormData(event.target);

    /*   props.sendData(credentials.get("username"), credentials.get("password")).then(result=>{
           props.logIn(result.data)

       })*/
    firebase
      .auth()
      .signInWithEmailAndPassword(
        credentials.get("email"),
        credentials.get("password")
      )
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
      component="main"
      maxWidth="xs"
    >
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Вход в систему
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            name="email"
            label="e-mail"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="пароль"
            type="password"
            id="password"
          />

          <Button type="submit" fullWidth variant="contained" color="primary">
            Войти
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Authentication;
