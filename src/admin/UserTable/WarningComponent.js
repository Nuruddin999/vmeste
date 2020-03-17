import React from "react";
import Card from "@material-ui/core/Card";
import {Icon, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const WarningComponent = (props) => {
    const click = () => props.dispatch({type: "CLEAR"});
    return <Card style={{
        backgroundColor: "#f50057",
        width: "fit-content",
        padding: 30,
        position: "relative",
        top: "30%",
        left: "35%"
    }}>
        <Grid container spacing={2} direction={"row"}  alignItems={"center"}>
            <Grid item>
                <ErrorOutlineIcon style={{color: "#ffffff"}}/>
            </Grid>
            <Grid item>
                <Typography style={{color: "#ffffff", fontSize: "18px"}}>{props.errorMessage}</Typography>
            </Grid>
            <Grid item>
                <IconButton component={NavLink} to={props.goto} onClick={click}>
                    <CloseIcon style={{color: "#ffffff"}}/>
                </IconButton>
            </Grid>

        </Grid>


    </Card>
};
export default WarningComponent