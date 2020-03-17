import React from "react";
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
import Grid from "@material-ui/core/Grid";
import Chat from "./Chat";
import Badge from "@material-ui/core/Badge";
import InfiniteScroll from "react-infinite-scroller";

const TasksTable = ({
  chatState,
  chatChangeState,
  icons,
  state,
  currentPage,
  inct,
  loadMore,
  remove
}) => {
  const classes = useStyles();
  //тестовые данные
  const tableRowNames = [
    "№",
    "краткое описание",
    "Тип задания",
    "Адрес",
    "Контактный телефон",
    "Статус",
    "Чат",
    ""
  ];
  const scrollArea = React.createRef();
  const handleScroll = () => {
    console.log("scroll");
  };
  const removeClick = index => {
    remove(index);
  };
  const statuses = [
    { name: "Ожидание отклика", color: "#2196f3" },
    { name: "Выбрать откликнувшегося", color: "#ff9800" },
    { name: "В работе", color: "#4caf50" },
    { name: "Подтвердить выполнение", color: "#f44336" },
    { name: "Черновик", color: "#f44336" }
  ];
  return (
    <Box css={{ padding: "0 8px" }}>
      <Box
        css={{
          position: "fixed",
          width: "50%",
          display: chatState,
          top: "40%",
          left: "70%",
          cursor: "pointer",
          zIndex: "3"
        }}
      >
        <Chat
          chatState={chatState}
          chatChangeState={chatChangeState}
          icons={icons}
        />
      </Box>

      <Button
        style={{ position: "relative", top: "2px" }}
        component={NavLink}
        to="newtask"
        variant="contained"
        color="primary"
      >
        Добавить задание
      </Button>
      <Paper className={classes.root}>
        <InfiniteScroll
          pageStart={currentPage}
          initialLoad={false}
          loadMore={loadMore}
          hasMore={state.loads.length > 10}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          <Table className={classes.table}>
            <TableHead align="center">
              <TableRow>
                {tableRowNames.map(name => (
                  <StyledTableCell>{name}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {state.tasks.map(function(apl, index) {
                let color = "";

                statuses.forEach(status =>
                  status.name === apl.currentStatus
                    ? (color = status.color)
                    : ""
                );
                const link = `tasks/${apl.id}`;
                return (
                  <StyledTableRow hover={true} key={apl.id}>
                    <StyledTableCell
                      hover={true}
                      contentEditable={false}
                      component={NavLink}
                      to={link}
                    >
                      {apl.id}
                    </StyledTableCell>
                    <StyledTableCell
                      hover={true}
                      contentEditable={false}
                      component={NavLink}
                      to={link}
                    >
                      {apl.taskFlowShort}
                    </StyledTableCell>
                    <StyledTableCell
                      hover={true}
                      contentEditable={false}
                      component={NavLink}
                      to={link}
                    >
                      {apl.type}
                    </StyledTableCell>
                    <StyledTableCell
                      hover={true}
                      contentEditable={false}
                      component={NavLink}
                      to={link}
                    >
                      {apl.endAddress}
                    </StyledTableCell>
                    <StyledTableCell
                      hover={true}
                      contentEditable={false}
                      component={NavLink}
                      to={link}
                    >
                      {apl.endContactPhone}
                    </StyledTableCell>
                    <StyledTableCell
                      hover={true}
                      contentEditable={false}
                      component={NavLink}
                      to={link}
                    >
                      {" "}
                      <span style={{ color: color }}>{apl.currentStatus}</span>
                    </StyledTableCell>
                    <StyledTableCell hover={true} contentEditable={false}>
                      <Grid container spacing={1} alignContent={"center"}>
                        <Grid item onClick={() => chatChangeState(chatState)}>
                          <Badge badgeContent={4} color={"secondary"}>
                            {icons.chatIcon}
                          </Badge>
                        </Grid>
                      </Grid>
                    </StyledTableCell>
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
        </InfiniteScroll>
      </Paper>
    </Box>
  );
};
export default TasksTable;
