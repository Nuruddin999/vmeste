import React from "react";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { red} from '@material-ui/core/colors';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles1 = makeStyles(theme => ({
    success: {
        backgroundColor: red["A400"],
    },
}));
const ErrorSnackbar = (props) => {
    const classes = useStyles1();
    const {open, message} = props;
    return <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        open={open}
        autoHideDuration={3500}
    >
        <SnackbarContent
            className={classes.success}
            aria-describedby="client-snackbar"
            message={
                <Grid container direction={"row"} spacing={3} alignItems={"center"}>
                    <Grid item>
                        <ErrorOutlineIcon/>
                    </Grid>
                    <Grid item>
                                  <span id="client-snackbar" className={classes.message}>
                    {message}
        </span>
                    </Grid>
                </Grid>
            }
        />
    </Snackbar>
};
export default ErrorSnackbar