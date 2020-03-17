/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Box, TextField } from "@material-ui/core";
const TasksFlowDetailed = ({ flowDetailed, icons, addValueToList, removeFlow }) => {

    const textField = { padding: "2 13px" };
    const newFlow = React.createRef();
    const currentFlow = React.createRef();

    const add = () => {
        flowDetailed ? addValueToList(newFlow.current.value, flowDetailed, "taskFlowDetailed") : addValueToList(newFlow.current.value, [], "taskFlowDetailed")
        newFlow.current.value = ""
    };
    const deleteFlow = (flow) => {
        removeFlow(flow);
    };
    return <div>
        <ul>
            {flowDetailed ? flowDetailed.map(flow => <Grid container spacing={1} alignItems={"center"}>
                <Grid item xs={10} sm={10} md={11} lg={11} xl={11} key={flow}>
                    <TextField style={{ ...textField, marginBottom: 2 }} inputRef={currentFlow} value={flow} variant={"outlined"} fullWidth multiline />
                </Grid>
                <Grid item xs={10} sm={2} md={1} lg={1} xl={1} onClick={() => deleteFlow(flow)}>
                    {icons.deleteIcon}
                </Grid>
            </Grid>) : ""}
            <Grid container alignItems={"center"} spacing={1}>
                <Grid item xs={10} sm={10} md={11} lg={11} xl={11}>
                    <TextField style={{ ...textField, marginBottom: 2 }} inputRef={newFlow} label={"Добавить алгоритм"} variant={"outlined"} fullWidth multiline />
                </Grid>
                <Grid item xs={10} sm={2} md={1} lg={1} xl={1} onClick={add}>
                    <Box>{icons.checkIcon}</Box>
                </Grid>
            </Grid>
        </ul>
    </div>

};
export default TasksFlowDetailed