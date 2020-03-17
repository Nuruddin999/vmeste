import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import {
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow
} from "@material-ui/core";
import { NavLink, Redirect, Switch } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import {
  StyledTableCell,
  StyledTableRow,
  useStyles
} from "../../admin/UserTable/UserTableStyle";
import { getSingleApplicationIndex } from "../../redux/reducers/CuratorReducer";
const TasksList = props => {
  //тестовые данные
  const { curatorPage } = props.state;
  const [redirectToSingle, setState] = useState(false);
  function click(id) {
    props.dispatch(getSingleApplicationIndex(parseInt(id)));
    setState(true);
  }
  const classes = useStyles();
  return (
    <Box style={{ padding: 15 }}>
      <Button
        style={{ position: "relative", top: "10px" }}
        component={NavLink}
        to="addapplication"
        variant="contained"
        color="primary"
      >
        Добавить задание
      </Button>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead align="center">
            <TableRow>
              <StyledTableCell>№</StyledTableCell>
              <StyledTableCell>Краткое описание</StyledTableCell>
              <StyledTableCell>Категория</StyledTableCell>
              <StyledTableCell>Адрес</StyledTableCell>
              <StyledTableCell>Контактный телефон</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {curatorPage.tasks.map(task => {
              return (
                <StyledTableRow
                  hover={true}
                  key={task.id}
                  onClick={() => click(task.id)}
                >
                  <StyledTableCell hover={true} contentEditable={false}>
                    {task.id}
                  </StyledTableCell>
                  <StyledTableCell>{task.descr}</StyledTableCell>
                  <StyledTableCell>{task.cat}</StyledTableCell>
                  <StyledTableCell>{task.addr}</StyledTableCell>
                  <StyledTableCell>{task.tel}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
        <Switch></Switch>
      </Paper>
      {redirectToSingle ? (
        <Redirect to={`tasks/${curatorPage.singleApplicationIndex}`} />
      ) : null}
    </Box>
  );
};
export default TasksList;
