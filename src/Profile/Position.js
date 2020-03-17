import React from "react";
import Grid from "@material-ui/core/Grid";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Card, Typography} from "@material-ui/core";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import BusinessIcon from '@material-ui/icons/Business';
import {style} from "./ContactsUIStyle";
const Position=()=>{
    return(
        <Card style={style}>
            <Grid  style={{padding:"1px 10px",}} container spacing={2} direction={"row"}  alignItems={"center"}>
                <Grid item >
                    <BusinessIcon/>
                </Grid>
                <Grid item >
                    <Typography >
                        Куратор БФ "Надежда"
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    )
}
export default Position