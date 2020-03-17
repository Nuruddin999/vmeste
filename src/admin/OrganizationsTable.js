import { StyledTableCell, StyledTableRow, useStyles } from "./UserTable/UserTableStyle";
import React from "react";
import Paper from "@material-ui/core/Paper";
import { Table, TableBody, TableHead, TableRow, Box, Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { Switch } from "react-router-dom";
import { NavLink } from "react-router-dom"
import InfiniteScroll from 'react-infinite-scroller';

const OrganizationsTable = (props) => {
    const classes = useStyles();
    function click() {
        console.log("user clicked!")
    }
    return (
        <Box css={{ padding: "0 8px" }}>
            <Button
                style={{ position: "relative", top: "12px" }}
                component={NavLink}
                to="#"
                variant="contained"
                color="primary"
            >
                Добавить организацию
            </Button>
            <Paper className={classes.root}>
                <InfiniteScroll
                    pageStart={1} /**Добавить страницу из пропсов */
                    initialLoad={false}
                    /*    loadMore={props.fetch}  */
                    /* hasMore={loadedAccounts.length >= 10} заполнить когда будут апи и данные */
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
                            <StyledTableRow onClick={click}>
                                <StyledTableCell>{props.fund.id}</StyledTableCell>
                                <StyledTableCell><Avatar className={classes.bigAvatar} src={props.fund.logo} /></StyledTableCell>
                                <StyledTableCell>{props.fund.name}</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                    <Switch>
                    </Switch>
                </InfiniteScroll>
            </Paper>
        </Box>

    )

};
export default OrganizationsTable