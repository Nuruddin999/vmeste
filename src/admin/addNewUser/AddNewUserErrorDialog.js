import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import ErrorOutlineIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';

const AddNewUserError=(props) => {
const {dispatch}=props;

    return <Card style={{
        backgroundColor: "#f50057",
        width:"fit-content",
        padding: 30,
    }}>
        <Grid container spacing={1}>
                <ErrorOutlineIcon style={{color: "#ffffff"}}/>

            <Grid item xs={9}>
                <Typography style={{color: "#ffffff", fontSize: "18px"}}>{props.errorMessage}</Typography>
            </Grid>


        </Grid>


    </Card>
};
export default AddNewUserError