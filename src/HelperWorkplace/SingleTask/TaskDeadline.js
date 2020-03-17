import React from "react";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
const StartDate = ({ icons }) => {
    return <div>
        <Grid container alignItems={"center"}>
            <Grid item xs={6} sm={7} md lg={3} xl={1}>
                <TextField label={"дата"} fullWidth variant={"outlined"} />
            </Grid>
            <Grid item xs={2} sm={9} md lg={1} xl={0.2}>
                {icons.calendarIcon}
            </Grid>
        </Grid>
        <Grid container alignItems={"center"}>
            <Grid item xs={6} sm={7} md lg={3} xl={1}>
                <TextField label={"время"} fullWidth variant={"outlined"} />
            </Grid>
            <Grid style={{ marginTop: 15 }} item xs={2} sm={9} md lg={1} xl={0.2}>
                {icons.timeIcon}
            </Grid>
        </Grid>
    </div>
};
export default StartDate