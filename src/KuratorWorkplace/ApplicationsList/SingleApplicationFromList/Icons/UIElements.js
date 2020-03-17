import styled from "styled-components";
import { Delete } from "@styled-icons/material";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import React from "react";

export const StyleDelete = styled(Delete)`
color:red;
`
export const DeleteSection = (props) => {
    return <Grid container direction={"row"} alignItems={"center"}>
        <Grid item>
            <Typography style={{ padding: 7 }}>{props.name}</Typography>
        </Grid>
        <Grid item>
            <StyleDelete onClick={() => props.delete()} size="23" />
        </Grid>
    </Grid>
};

