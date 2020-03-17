import React from "react";
import Box from "@material-ui/core/Box";
import {
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import {
  StyledTableCell,
  StyledTableRow,
  useStyles
} from "../../admin/UserTable/UserTableStyle";
import Grid from "@material-ui/core/Grid";

const VolunteersTable = ({ icons, state, remove }) => {
  const classes = useStyles();
  const categories = [
    "№",
    "ФИО",
    "Номер телефона",
    "Адреса",
    "Выполненные задания",
    ""
  ];
  const removeClick = index => {
    remove(index);
  };
  return (
    <Box css={{ padding: "0 8px" }}>
      <Button
        style={{ position: "relative", top: "10px" }}
        component={NavLink}
        to="newvolunteer"
        variant="contained"
        color="primary"
      >
        Добавить воллонтера
      </Button>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead align="center">
            <TableRow>
              {categories.map(name => (
                <StyledTableCell>{name}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {state.volunteers.map(function(apl, index) {
              const link = `volunteers/${apl.id}`;
              return (
                <StyledTableRow hover={true} key={apl.id}>
                  <StyledTableCell hover={true} contentEditable={false}>
                    {apl.id}
                  </StyledTableCell>
                  <StyledTableCell>
                    {" "}
                    {apl.name} {apl.midName} {apl.lastName}
                  </StyledTableCell>
                  <StyledTableCell>{apl.phone}</StyledTableCell>
                  <StyledTableCell>{apl.address}</StyledTableCell>
                  <StyledTableCell>{apl.finishedtasks}</StyledTableCell>
                  <StyledTableCell>
                    <Grid container spacing={2}>
                      <Grid item>
                        <NavLink to={link}>{icons.editIcon}</NavLink>
                      </Grid>
                      <Grid item onClick={() => removeClick(index)}>
                        {icons.removeIcon}
                      </Grid>
                    </Grid>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};
export default VolunteersTable;
