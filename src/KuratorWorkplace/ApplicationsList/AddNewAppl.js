import React from "react";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ApplicationForm from "./SingleApplicationFromList/ApplicationFrom";
const AddNewAppl=({onTextChange,application,applForm})=>{
    const saveButtonStyle = {
        backgroundColor: "#36b420",
        color: "#ffffff",
        width: "400px",
        margin: 13
    };
    const editButtonStyle = {
        backgroundColor: "#1664b4",
        color: "#ffffff",
        width: "400px",
        margin: 13
    };
    return <Grid container direction={"column"} >
        <Grid item xs lg>
            {applForm}
        </Grid>
        <Grid item xs lg>
            <Container style={{ width: "fit-content" }}>
                <Button
                    variant="contained"
                    style={saveButtonStyle}
                >
                    Добавить
                </Button>
            </Container>
        </Grid>
    </Grid>
};
export default AddNewAppl