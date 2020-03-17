import React from "react";
import Grid from "@material-ui/core/Grid";
import { DatePicker, MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import rsLocale from "date-fns/locale/ru";
import Box from "@material-ui/core/Box";


const DateandTime = ({ period, state, onDateChange }) => {
    let date;
    period === "start" ? date = new Date(state.startDate) : date = new Date(state.endDate);
    const time = date.getTime();
    const handleDateChange = val => {
        onDateChange(val, period)
    };
    const handleTimeChange = time => {
        date.setTime(time);
        onDateChange(date, period);
    };
    return <Box css={{ width: "fit-content", padding: 10 }} border={1} borderColor="grey.500" borderRadius={16}>
        <Grid container justify={"space-around"} alignItems={"center"} spacing={1}>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={rsLocale}>
                    <DatePicker
                        label={"Дата"}
                        format="dd/MM/yyyy"
                        value={date}
                        onChange={handleDateChange}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={rsLocale}>
                    <TimePicker
                        clearable
                        ampm={false}
                        label="Время"
                        value={time}
                        onChange={handleTimeChange} />
                </MuiPickersUtilsProvider>
            </Grid>
        </Grid>
    </Box>


};
export default DateandTime