import 'date-fns';
import React from 'react';
import rsLocale from "date-fns/locale/ru"
import Grid from '@material-ui/core/Grid';
import format from "date-fns/format";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {Box} from "@material-ui/core";

 const Datepicker=({setSelectedDate})=> {

const selectedDate=new Date();
    const handleDateChange = date => {
       setSelectedDate(date);
    };

    return <Grid  style={{marginTop:5,padding:10}} container >
            <Grid item xs={12} md={6} lg={6} xl={4}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={rsLocale}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="d MMM yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Дата"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
        <Grid item xs={12} md={6} lg={6} xl={4}>
            <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
            />
        </Grid>
        </Grid>
    }