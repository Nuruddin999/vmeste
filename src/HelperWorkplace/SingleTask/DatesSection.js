import React from "react";
import { Box, Container, GridList } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { DatePicker, KeyboardTimePicker, MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import rsLocale from "date-fns/locale/ru";
import Typography from "@material-ui/core/Typography";

const DateSection = ({ startPeriod, endPeriod }) => {
    return <Grid container >
        <Grid item xs={12} sm={12} md={4} lg={6} xl={6}>
            <Container style={{ width: "fit-content" }}>
                <Typography style={{ width: "fit-content" }} align={"center"}>Начало</Typography>
                {startPeriod}
            </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={6} xl={6}>
            <Container style={{ width: "fit-content" }}>
                <Typography style={{ width: "fit-content" }} align={"center"}>Окончание</Typography>
                {endPeriod}
            </Container>
        </Grid>
    </Grid>

};
export default DateSection