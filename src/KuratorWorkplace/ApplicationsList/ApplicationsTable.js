import React, { useState } from "react";
import {
  StyledTableCell,
  StyledTableRow,
  useStyles
} from "../../admin/UserTable/UserTableStyle";
import {
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";
import { NavLink, Redirect, Switch } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const ApplicationsTable = props => {

  const classes = useStyles();
  //тестовые данные
  const { applications } = props.state;
  const [redirectToSingle, setState] = useState(false);
  const tableRowNames=["№","краткое описание","Категория","Адрес","Контактный телефон","Дата создания"];
  const returnDate = date => {
    let d = new Date(date);
    return `${d.toLocaleString()}`;
  };
  function click(id) {
    props.dispatch(parseInt(id));
    setState(true);
  }

  return (
    <Box style={{ padding: 15 }}>
      <Button
        style={{ position: "relative", top: "10px" }}
        component={NavLink}
        to="addapplication"
        variant="contained"
        color="primary"
      >
        Добавить заявление
      </Button>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead align="center">
            <TableRow>
              {tableRowNames.map(name=><StyledTableCell>{name}</StyledTableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {applications.map(function(apl, index) {
              const link = `applications/${apl.id}`;
              return (
                <StyledTableRow
                  hover={true}
                  key={apl.id}
                  onClick={() => click(index)}
                >
                  <StyledTableCell hover={true} contentEditable={false}>
                    {apl.id}
                  </StyledTableCell>
                  <StyledTableCell>{apl.descr}</StyledTableCell>
                  <StyledTableCell>{apl.cat}</StyledTableCell>
                  <StyledTableCell>{apl.addr}</StyledTableCell>
                  <StyledTableCell>{apl.tel}</StyledTableCell>
                  <StyledTableCell>{returnDate(apl.createdAt)}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
        <Switch></Switch>
      </Paper>
      {redirectToSingle ? (
        <Redirect
          to={`applications/${
            applications[props.state.singleApplicationIndex].id
          }`}
        />
      ) : null}
    </Box>
  );
};
export default ApplicationsTable;
