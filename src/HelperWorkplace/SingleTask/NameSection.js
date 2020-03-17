/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Box,
  Card,
  Container,
  TextField,
  Table,
  TableRow,
  TableHead,
  TableBody,
  SnackbarContent
} from "@material-ui/core";
import {
  StyledTableCell,
  StyledTableRow,
  useStyles
} from "../../admin/UserTable/UserTableStyle";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { saveButtonStyle, updateButtonStyle } from "../CommonDiffUiStyles";
import { icons } from "../Icons/Icons";
import { textStyle } from "./commonStyles";
import AddVolunteerToTask from "./AddVolunteerToTask";
import { getFakeDoers } from "../../CommonUtils/Utils";
import { getTasksTest } from "../../testFunctions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { NavLink, Redirect } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import firebase from "../../firebaseConfig";

const NameSection = ({
  state,
  dateSection,
  taskPlacesStart,
  taskPlacesEnd,
  onTextChange,
  tasksFlowDetailed,
  returnDefault,
  save,
  isNewTask,
  icons,
  addValueToList,
  doers,
  removeFromList,
  update,
  remove,
  tasksInStore,
  updateFiles
}) => {
  const ref = firebase.storage().ref()
  const sectionsMargin = { margin: 15, backgroundColor: "#fafafa" };
  const volToTask = getFakeDoers();
  const [addButtonPressed, setPress] = useState(false);
  const [volunteersToTask, setResult] = useState(getFakeDoers());
  const [filteredList, setFilteredList] = useState(volunteersToTask);
  const [typingTimeOut, setTimeOut] = useState(0);
  const [docNamesStart, setNameStart] = useState([]);
  const [autohide, setAutohide] = useState(2000)
  const [docNamesEnd, setNameEnd] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("Загружается")
  const [stateSnack, setStateSnack] = useState(false);

  const [stateSnackUpload, setStateSnackUpload] = useState(false)

  const uploadToServer = (type) => {
    setStateSnackUpload(true)
    let period = type === "start" ? "startAttachments" : "endAttachments"
    let filesList = type === "start" ? [...docNamesStart] : [...docNamesEnd]
    filesList.forEach(file => {
      const name = (+new Date()) + '-' + file.name;
      const metadata = {
        contentType: file.type
      };
      var uploadTask = ref.child(name).put(file, metadata)
      uploadTask.on('state_changed', function (snapshot) {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;


        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function (error) {
        // Handle unsuccessful uploads
      }, function () {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...

        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          let contentType = uploadTask.snapshot.metadata.contentType
          let showUrl = ref.child(name).fullPath
          let url = downloadURL
          let file = { name, contentType, url, showUrl }
          updateFiles(file, period).then((r) => {
            period === "startAttachments" ? setNameStart([]) : setNameEnd([])
            setUploadStatus("Загружено")
            setTimeOut(() => setStateSnackUpload(false), 2000)
          })

        });
      });
    })

  };
  const handleClose = () => {
    setStateSnack(false);
  };
  const handleCloseUploadStatus = () => {
    setStateSnackUpload(false)
  }
  const [goToList, setRedirect] = useState(false);
  const textField = { padding: "0 13px" };
  const changeDocNamesStart = e => {
    let list = [];
    list = [...docNamesStart];

    for (const file of e.target.files) {
      list.push(file);
    }
    setNameStart(list);

  };
  const deleteDocStart = value => {
    let list = [];
    list = docNamesStart.filter(val => val !== value);
    setNameStart(list);
  };
  const changeDocNamesEnd = e => {
    let list = [];
    list = [...docNamesEnd];
    console.log(docNamesEnd);
    for (const file of e.target.files) {
      list.push(file);
    }
    setNameEnd(list);
  };
  const deleteDocEnd = value => {
    let list = [];
    list = docNamesEnd.filter(val => val !== value);
    setNameEnd(list);
  };
  const closeModal = () => {
    setPress(!addButtonPressed);
  };
  const addDoer = index => {
    const vol = volToTask.find(v => v.id === index + 1);
    doers
      ? addValueToList(vol, doers, "doers")
      : addValueToList(vol, [], "doers");
  };
  const handleChange = name => ({ target: { value } }) => {
    onTextChange(name, { target: { value } });
  };
  const toDefault = () => {
    returnDefault();
  };
  const saveClick = () => {
    save();
    setUploadStatus("Добавлено")
    setStateSnack(true);
  };
  const updateClick = () => {
    update();
    setUploadStatus("Сохранено")
    setStateSnack(true);
  };
  const removeClick = () => {
    remove();
    setStateSnack(true);
  };
  const searchDoer = e => {
    if (e.target.value !== "") {
      let result = volunteersToTask.filter(
        vol =>
          vol.age.includes(e.target.value) ||
          vol.name.includes(e.target.value) ||
          vol.phone.includes(e.target.value)
      );
      result.length > 0 ? setFilteredList(result) : setFilteredList([]);
    } else {
      setFilteredList(volunteersToTask);
    }
  };
  if (tasksInStore.length === 0) {
    return <Redirect to={"/helper/tasks"} />;
  }
  return (
    <Box css={{ position: "relative" }}>
      {addButtonPressed ? (
        <div className="modalWrapper">
          <Card className="modalContent">
            <div className="title">
              <div onClick={closeModal}>{icons.closeIcon}</div>
              <Typography style={{ ...textStyle }} align={"center"}>
                Выбор волонтеров
              </Typography>
            </div>

            <TextField
              fullWidth={true}
              id="name"
              label="Поиск"
              variant={"outlined"}
              style={{ margin: "10px 0" }}
              onChange={searchDoer}
            />
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>№</StyledTableCell>
                  <StyledTableCell>ФИО волонтера</StyledTableCell>
                  <StyledTableCell>Возраст</StyledTableCell>
                  <StyledTableCell>Телефон</StyledTableCell>
                  <StyledTableCell>Выполнил</StyledTableCell>
                  <StyledTableCell>Добавить</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredList.map((v, index) => (
                  <StyledTableRow>
                    <StyledTableCell>{v.id}</StyledTableCell>
                    <StyledTableCell>{v.name}</StyledTableCell>
                    <StyledTableCell>{v.age}</StyledTableCell>
                    <StyledTableCell>{v.phone}</StyledTableCell>
                    <StyledTableCell>{v.finished}</StyledTableCell>
                    <StyledTableCell onClick={() => addDoer(index)}>
                      {icons.checkIcon}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      ) : (
          ""
        )}
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={5} xl={6}>
          <Card style={{ paddingBottom: 5, ...sectionsMargin }}>
            <Container>
              <Grid style={{ marginTop: 5, padding: 10 }} container spacing={1}>
                <Grid
                  style={{ width: "100%" }}
                  item
                  xs={12}
                  md={6}
                  lg={12}
                  xl={12}
                >
                  <TextField
                    value={state.type}
                    label={"тип задания"}
                    required
                    fullWidth="true"
                    variant={"outlined"}
                    onChange={handleChange("type")}
                  />
                </Grid>
                <Grid style={{ width: "100%" }} item xs md={6} lg={12} xl={12}>
                  <TextField
                    value={state.name}
                    label={"Название"}
                    required
                    fullWidth
                    variant={"outlined"}
                    onChange={handleChange("name")}
                  />
                </Grid>
              </Grid>
            </Container>
          </Card>

          <Card style={{ paddingBottom: 5, ...sectionsMargin }}>
            <Typography style={{ ...textStyle }} align={"center"}>
              Сроки выполнения
            </Typography>
            {dateSection}
          </Card>
          <Card style={{ paddingBottom: 12, ...sectionsMargin }}>
            <Typography style={{ ...textStyle }} align={"center"}>
              Места выполнения
            </Typography>
            <Container>
              <Grid style={{ marginTop: 5 }} container spacing={1}>
                <Grid
                  style={{ width: "100%" }}
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Typography align={"center"}>Начало</Typography>
                  {taskPlacesStart}
                  <div style={{ display: "flex", flexWrap: "wrap" }}
                  >    <div class="common-row">
                      <input
                        type="file"
                        id="file1"
                        onChange={changeDocNamesStart}
                        multiple
                      />
                      <label class="common-label" for="file1">
                        <span>Выбрать</span>
                      </label>
                    </div>
                    {isNewTask || docNamesStart.length == 0 ? "" : <button style={{ marginLeft: 30 }} onClick={() => uploadToServer("start")}>Загрузить</button>}
                  </div>


                  <List>
                    {docNamesStart.map(value => (
                      <ListItem key={value} role={undefined} dense button>
                        <ListItemText primary={value.name + 1} />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="comments"
                            onClick={() => deleteDocStart(value)}
                          >
                            {icons.deleteIcon}
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid
                  style={{ width: "100%" }}
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Typography align={"center"}>Конец</Typography>
                  {taskPlacesEnd}
                  <div style={{ display: "flex", flexWrap: "wrap" }}
                  >    <div class="common-row">
                      <input
                        type="file"
                        id="file2"
                        onChange={changeDocNamesEnd}
                        multiple
                      />
                      <label class="common-label" for="file2">
                        <span>Выбрать</span>
                      </label>
                    </div>
                    {isNewTask || docNamesEnd.length == 0 ? "" : <button style={{ marginLeft: 30 }} onClick={() => uploadToServer("start")}>Загрузить</button>}
                  </div>
                  <List>
                    {docNamesEnd.map(value => (
                      <ListItem key={value} role={undefined} dense>
                        <ListItemText primary={value.name + 1} />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="comments"
                            onClick={() => deleteDocEnd(value)}
                          >
                            {icons.deleteIcon}
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Container>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7} xl={6}>
          <Card style={{ paddingBottom: 12, ...sectionsMargin }}>
            <Typography style={{ ...textStyle }} align={"center"}>
              Назначить исполнителя
            </Typography>
            <AddVolunteerToTask
              icons={icons}
              addButtonPressed={addButtonPressed}
              setPress={setPress}
              doers={doers}
              removeFromList={removeFromList}
            />
          </Card>
        </Grid>
      </Grid>

      <Card style={{ paddingBottom: 12, ...sectionsMargin }}>
        <Typography style={{ ...textStyle }} align={"center"}>
          Алгоритм выполнения
        </Typography>
        <Grid style={{ marginTop: 5 }} container spacing={1}>
          <Grid style={{ width: "100%" }} item xs={12} md={6} lg={6} xl={6}>
            <Typography align={"center"} style={{ marginLeft: 12 }}>
              Краткий
            </Typography>
            <TextField
              style={{ ...textField }}
              variant={"outlined"}
              value={state.taskFlowShort}
              fullWidth
              multiline
              onChange={handleChange("taskFlowShort")}
            />
          </Grid>
          <Grid style={{ width: "100%" }} item xs md={6} lg={6} xl={6}>
            <Typography align={"center"} style={{ marginLeft: 12 }}>
              Подробный
            </Typography>
            {tasksFlowDetailed}
          </Grid>
        </Grid>
      </Card>

      <Container style={{ padding: 30 }}>
        {isNewTask ? (
          <Grid style={{ marginTop: 5 }} container spacing={1}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={6}>
              <Button
                style={{ backgroundColor: "#9a0036", color: "white" }}
                fullWidth="true"
                variant={"contained"}
                component={NavLink}
                to="/helper/tasks"
              >
                {" "}
                Закрыть окно
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={6}>
              <Button
                style={updateButtonStyle}
                type="submit"
                fullWidth={true}
                variant={"contained"}
                onClick={saveClick}
              >
                {" "}
                Добавить
              </Button>
            </Grid>
          </Grid>
        ) : (
            <Grid style={{ marginTop: 5 }} container spacing={1}>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={6}>
                <Button
                  style={{ backgroundColor: "#9a0036", color: "white" }}
                  fullWidth="true"
                  variant={"contained"}
                  component={NavLink}
                  to="/helper/tasks"
                >
                  {" "}
                Закрыть окно
              </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={6}>
                <Button
                  style={updateButtonStyle}
                  type="submit"
                  fullWidth={true}
                  variant={"contained"}
                  onClick={updateClick}
                >
                  {" "}
                Сохранить
              </Button>
              </Grid>
            </Grid>
          )}
        <Snackbar
          open={stateSnack}
          autoHideDuration={autohide}
          onClose={handleClose}
        >
          <SnackbarContent
            style={{
              backgroundColor: "green"
            }}
            message={<span id="client-snackbar">Сохранено</span>}
          />
        </Snackbar>
        <Snackbar
          open={stateSnackUpload}

          onClose={handleClose}

        >
          <SnackbarContent
            style={{
              backgroundColor: "green"
            }}
            message={<span id="client-snackbar">{uploadStatus}</span>} action={
              <React.Fragment>

                <IconButton
                  aria-label="close"
                  color="inherit"
                  onClick={handleCloseUploadStatus}
                >
                  {icons.closeIcon}
                </IconButton>
              </React.Fragment>
            }
          />
        </Snackbar>

      </Container>
    </Box>
  );
};
export default NameSection;
