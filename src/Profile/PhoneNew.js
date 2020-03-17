import React from "react";
import Grid from "@material-ui/core/Grid";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Card, Typography } from "@material-ui/core";
import { style } from "./ContactsUIStyle";
import PhoneIcon from '@material-ui/icons/Phone';
import { styles } from "./profileContactstyles";
const PhoneNew = () => {
    return (
        <Card style={styles}>
            <Grid container justify={"center"} spacing={1} alignItems={"center"}>
                <Grid item >
                    <PhoneIcon />
                </Grid>
                <Grid item >
                    <Typography >
                        89882000000
                </Typography>
                </Grid>

            </Grid>
        </Card>
    )
}
export default PhoneNew