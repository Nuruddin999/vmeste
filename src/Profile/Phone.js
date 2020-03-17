import React from "react";
import Grid from "@material-ui/core/Grid";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Card, Typography} from "@material-ui/core";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PhoneIcon from '@material-ui/icons/Phone';
import {style} from "./ContactsUIStyle";
const Phone=()=>{
    return(
        <Card style={style}>
            <Grid style={{padding:"1px 10px",}} container spacing={2} direction={"row"}  alignItems={"center"}>
                <Grid item >
                   <PhoneIcon/>
                </Grid>
                <Grid item >
                    <Typography>
                       +79882000000
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    )
}
export default Phone