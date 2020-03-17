import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Container} from "@material-ui/core";
const SingleUser = (props) => {
  const name = props.id;

  function save() {

  }
  return (
      <div>
            <form Validate onSubmit={save}>
                <Grid
                    container
                    direction="column"
                    spacing={1}
                    justify="center"
                   >
                    <Grid item> <TextField required label={"Фамилия"} variant={"filled"} fullWidth></TextField></Grid>
                    <Grid item><TextField  required label={"Имя"} fullWidth variant={"filled"}></TextField></Grid>
                    <Grid item>  <TextField  required label={"Отчество"} fullWidth variant={"filled"}></TextField></Grid>
                    <Grid item> <TextField  required select label={"Специальности"}fullWidth variant={"filled"}></TextField></Grid>
                    <Grid item><TextField required label={"Телефон"} fullWidth variant={"filled"}></TextField></Grid>
                    <Grid item>  <TextField label={"Email"} fullWidth variant={"filled"}></TextField></Grid>
                    <Grid item>       <TextField  label={"Год рождения"} fullWidth  variant={"filled"}></TextField></Grid>
                    <Grid item>  <TextField label={"Серия паспорта"} fullWidth variant={"filled"}></TextField></Grid>
                    <Grid item>  <TextField label={"Номер паспорта"} fullWidth variant={"filled"}> </TextField></Grid>
                    <Grid item>  <TextField label={"СНИЛС"}fullWidth variant={"filled"}></TextField></Grid>
                    <Grid item>         <TextField label={"Номер страхового свидетельства"} fullWidth variant={"filled"}></TextField></Grid>
                    <Grid item><TextField fullWidth variant={"filled"}></TextField></Grid>
                    <Grid item> <TextField fullWidth variant={"filled"}></TextField></Grid>
                    <Grid item> <Container>
                        <Button style={{background:"green",color:"white"}}>
                            Сохранить
                        </Button>
                    </Container></Grid>
                </Grid>


            </form>

      </div>
  )

};
export default SingleUser