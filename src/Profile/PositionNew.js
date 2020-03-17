import React from "react";
import Grid from "@material-ui/core/Grid";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Card, Typography } from "@material-ui/core";
import { style } from "./ContactsUIStyle";
import BusinessIcon from '@material-ui/icons/Business';
import { styles } from "./profileContactstyles";
const PositionNew = () => {
    return (
        <Card style={styles}>
            <Grid container spacing={2} justify={"center"} direction={"row"} alignItems={"center"}>
                <Grid item >
                    <BusinessIcon />
                </Grid>
                <Grid item >
                    <Typography>
                        Куратор БФ "Надежда"
                </Typography>
                </Grid>
            </Grid>
        </Card>
    )
}
export default PositionNew