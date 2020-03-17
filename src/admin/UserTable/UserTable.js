import React from "react";
import { StyledTableCell, StyledTableRow, useStyles } from "./UserTableStyle";
import Paper from "@material-ui/core/Paper";
import { Button, Table, TableBody, TableHead, TableRow, Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import { Switch } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroller';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const UserTable = (props) => {
    const classes = useStyles();
    const { accounts, loadedAccounts } = props.state;
    const page = props.state.page;
    let arr = [];

    arr = accounts.map(user => {
        const link = `users/${user.id}`;
        return <StyledTableRow key={user.id}>
            <StyledTableCell>
                <NavLink to={link}>
                    {user.id}
                </NavLink>
            </StyledTableCell>
            <StyledTableCell>
                <NavLink to={link}>
                    {user.firstname} {user.middlename} {user.lastname}
                </NavLink>
            </StyledTableCell>
            <StyledTableCell>
                <NavLink to={link}>
                    {user.speciality}
                </NavLink>
            </StyledTableCell>
            <StyledTableCell>
                <NavLink to={link}>
                    {user.foundation == null ? "" : user.foundation.name}
                </NavLink>
            </StyledTableCell>
            <StyledTableCell>
                <NavLink to={link}>
                    {user.phoneNumber}
                </NavLink>
            </StyledTableCell>
            <StyledTableCell>
                <Grid container spacing={2}>
                    <Grid item>
                        <NavLink to={link}>
                            <EditIcon />
                        </NavLink>
                    </Grid>
                    <Grid item>  <NavLink to={link}>
                        <DeleteForeverIcon color={"secondary"} />
                    </NavLink> </Grid>
                </Grid>
            </StyledTableCell>
        </StyledTableRow>;
    });
    return (
        <Box css={{ padding: "0 8px" }}>
            <Button
                style={{ position: "relative", top: "12px" }}
                component={NavLink}
                to="adduser"
                variant="contained"
                color="primary"
            >
                Добавить пользователя
            </Button>
            <Paper className={classes.root}>
                <InfiniteScroll
                    pageStart={page}
                    initialLoad={false}
                    loadMore={props.fetch}
                    hasMore={loadedAccounts.length >= 10}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    <Table className={classes.table}>
                        <TableHead align="center">
                            <TableRow>
                                <StyledTableCell>№</StyledTableCell>
                                <StyledTableCell>ФИО</StyledTableCell>
                                <StyledTableCell>Основная роль</StyledTableCell>
                                <StyledTableCell>Основное место работы</StyledTableCell>
                                <StyledTableCell>Телефон</StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {arr}
                        </TableBody>
                    </Table>
                    <Switch>
                    </Switch>
                </InfiniteScroll>
            </Paper>
        </Box>
    )
};
export default UserTable