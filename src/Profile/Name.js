import React from "react";
import Grid from "@material-ui/core/Grid";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Card, Typography} from "@material-ui/core";
import {style} from "./ContactsUIStyle";
const Name=()=>{
    return(
        <Card style={style}>
        <Grid style={{padding:"1px 10px",}} container spacing={2} direction={"row"}  alignItems={"center"}>
            <Grid item >
                <AccountBoxIcon/>
            </Grid>
            <Grid item >
               <Typography>
                   Алиева М.А
               </Typography>
            </Grid>
        </Grid>
        </Card>
    )
}
export default Name