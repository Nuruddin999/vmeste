import React from "react";
import Grid from "@material-ui/core/Grid";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Card, Typography } from "@material-ui/core";
import { styles } from "./profileContactstyles";
const NameNew = () => {
    return (
        <Card style={styles}>
            <Grid container justify={"center"} spacing={2} alignItems={"center"}>
                <Grid item >
                    <AccountBoxIcon />
                </Grid>
                <Grid item >
                    <Typography align="center">
                        Алиева М.А
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    )
}
export default NameNew