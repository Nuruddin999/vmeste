import React from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { lightGreen} from '@material-ui/core/colors';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles1 = makeStyles(theme => ({
    success: {
        backgroundColor: lightGreen[600],
    },
}));
const SuccessSnackbar = (props) => {
    const classes = useStyles1();
    const {open, message, close} = props;
    return <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        open={open}
        autoHideDuration={1500}
    >
        <SnackbarContent
            className={classes.success}
            aria-describedby="client-snackbar"
            message={
                <Grid container direction={"row"} spacing={3} alignItems={"center"}>
                    <Grid item>
                        <CheckCircleIcon/>
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
export default SuccessSnackbar