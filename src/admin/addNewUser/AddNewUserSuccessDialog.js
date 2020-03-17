import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {Typography} from "@material-ui/core";
import {Redirect} from "react-router-dom";

const AddNewUserSuccessDialog=(props) => {

    return <Card style={{
        backgroundColor: "rgba(60,179,12,0.96)",
        width:"fit-content",
        padding: 30,
        position: "relative",
        alignSelf:"center"
    }}>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <CheckCircleIcon style={{color: "#ffffff"}}/>
            </Grid>
            <Grid item xs={9}>
                <Typography style={{color: "#ffffff"}}>Пользователь <br/> добавлен !</Typography>
            </Grid>
        </Grid>
        <Redirect to={`users/${props.id}`}/>
    </Card>
};
export default AddNewUserSuccessDialog