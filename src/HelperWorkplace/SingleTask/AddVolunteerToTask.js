/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import {
  Box,
  Card,
  Container,
  createMuiTheme,
  InputLabel,
  Paper,
  TextField,
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  Grid
} from "@material-ui/core";
import {
  StyledTableCell,
  StyledTableRow,
  useStyles
} from "../../admin/UserTable/UserTableStyle";
import { textStyle } from "./commonStyles";
import "./styles.css";

const AddVolunteerToTask = ({
  icons,
  addButtonPressed,
  setPress,
  doers,
  removeFromList
}) => {
  const addButtonClick = () => {
    setPress(!addButtonPressed);
  };
  const remove = id => {
    const vol = doers.find(v => v.id === id);
    removeFromList(vol, doers, "doers");
  };
  return (
    <div style={{ margin: 30 }}>
      <Table style={{ padding: 30 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>№</StyledTableCell>
            <StyledTableCell>ФИО волонтера</StyledTableCell>
            <StyledTableCell>Возраст</StyledTableCell>
            <StyledTableCell>Телефон</StyledTableCell>
            <StyledTableCell>Выполнил</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doers
            ? doers.map((v, index) => (
                <StyledTableRow>
                  <StyledTableCell>{v.id}</StyledTableCell>
                  <StyledTableCell>{v.name}</StyledTableCell>
                  <StyledTableCell>{v.age}</StyledTableCell>
                  <StyledTableCell>{v.phone}</StyledTableCell>
                  <StyledTableCell>{v.finished}</StyledTableCell>
                  <StyledTableCell onClick={() => remove(v.id)}>
                    {icons.deleteIcon}
                  </StyledTableCell>
                </StyledTableRow>
              ))
            : ""}
        </TableBody>
      </Table>
      <div style={{ display: "table" }} onClick={addButtonClick}>
        {icons.addIcon}
      </div>
    </div>
  );
};
export default AddVolunteerToTask;
