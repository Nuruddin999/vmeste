/* eslint-disable react/prop-types */
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import UploadFile from "../../KuratorWorkplace/ApplicationsList/SingleApplicationFromList/UploadFile";
import ImageAttachment from "../../KuratorWorkplace/ApplicationsList/SingleApplicationFromList/ImageAttachment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import "./styles.css";
import { icons } from "../../HelperWorkplace/Icons/Icons";
import PropTypes from "prop-types";

const TaskPlaces = ({
  state,
  icons,
  onTextChange,
  period,
  attachmentSection
}) => {
  const [docNamesStart, setNameStart] = useState([]);
  const [docNamesEnd, setNameEnd] = useState([]);
  const roles = ["Работник фонда", "Подопечный"];
  const changeDocNames = e => {
    let list = [];
    const namePer =
      period === "start"
        ? (list = [...docNamesStart])
        : (list = [...docNamesEnd]);
    console.log(e.target.files);
    for (const file of e.target.files) {
      list.push(file.name);
    }
    period === "start" ? setNameStart(list) : setNameEnd(list);
  };
  const deleteDoc = value => {
    let list = [];
    period === "start"
      ? (list = docNamesStart.filter(val => val !== value))
      : (list = docNamesEnd.filter(val => val !== value));
    period === "start" ? setNameStart(list) : setNameEnd(list);
  };
  const name =
    period === "start"
      ? {
          address: state.startAddress,
          attachment: state.startAttachments,
          contactsData: [
            { name: "startContactPerson", value: "Контактное лицо" },
            { name: "startContactName", value: "ФИО" },
            { name: "startContactPhone", value: "Телефон" }
          ]
        }
      : {
          address: state.endAddress,
          attachment: state.endAttachments,
          contactsData: [
            { name: "endContactPerson", value: "Контактное лицо" },
            { name: "endContactName", value: "ФИО" },
            { name: "endContactPhone", value: "Телефон" }
          ]
        };

  const handleChange = text => ({ target: { value } }) => {
    onTextChange(text, { target: { value } });
  };
  return (
    <Grid style={{ marginTop: 5 }} container spacing={1} alignItems={"center"}>
      <Grid style={{ width: "100%" }} item xs={11} md={11} lg={11} xl={11}>
        <TextField
          label={"Адрес"}
          value={name.address}
          required
          fullWidth={"true"}
          variant={"outlined"}
          onChange={handleChange(
            period === "start" ? "startAddress" : "endAddress"
          )}
        />
      </Grid>
      <Grid style={{ width: "100%" }} item xs={1} md={1} lg={1} xl={1}>
        {icons.placeIcon}
      </Grid>
      {name.contactsData.map(data => (
        <Grid
          style={{ width: "100%" }}
          key={data.name}
          item
          xs={12}
          sm={12}
          md={12}
          lg={11}
          xl={11}
        >
          {data.name === "startContactPerson" ||
          data.name === "endContactPerson" ? (
            <TextField
              select
              label="Контактное лицо"
              onChange={handleChange(data.name)}
              fullWidth={true}
              variant={"outlined"}
              value={
                period === "start"
                  ? state.startContactPerson
                  : state.endContactPerson
              }
            >
              {roles.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          ) : (
            <TextField
              label={data.value}
              required={true}
              value={state[data.name]}
              fullWidth={"true"}
              variant={"outlined"}
              onChange={handleChange(data.name)}
            />
          )}
        </Grid>
      ))}
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        {attachmentSection}
      </Grid>

      {/*    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
           <Grid container spacing={1} alignItems={"center"}>
                <Grid item xs={6} sm={6} md lg={2} xl={2}>
                    <UploadFile
                        icons={icons}
                        explanation={"загрузить файл"}
                        upload={uploadFile.bind(this)}
                    />
                </Grid>
                {application.attachments.map(function (doc, index) {
                    if (doc.mimeType.includes("image")) {
                        return (
                            <Grid item xs={6} sm={6} md lg={2} xl={2} key={doc.id}>
                                <ImageAttachment
                                    delete={deleteAttachment}
                                    icon={image}
                                    src={doc.src}
                                    name={"заключение"}
                                    index={index}
                                />
                            </Grid>
                        );
                    }
                    if (doc.mimeType.includes("audio")) {
                        return (
                            <Grid item xs={6} sm={6} md lg={2} xl={2} key={doc.id}>
                                <ImageAttachment
                                    delete={deleteAttachment}
                                    icon={sound}
                                    src={doc.src}
                                    name={"заключение"}
                                    index={index}
                                />
                            </Grid>
                        );
                    }
                    if (doc.mimeType.includes("video")) {
                        return (
                            <Grid item xs={6} sm={6} md lg={2} xl={2} key={doc.id}>
                                <ImageAttachment
                                    delete={deleteAttachment}
                                    icon={youtube}
                                    src={doc.src}
                                    name={"заключение"}
                                    index={index}
                                />
                            </Grid>
                        );
                    }
                    if (doc.mimeType.includes("pdf")) {
                        return (
                            <Grid item xs={6} sm={6} md lg={2} xl={2} key={doc.id}>
                                <ImageAttachment
                                    delete={deleteAttachment}
                                    achment
                                    icon={pdfIcon}
                                    src={doc.src}
                                    name={"заключение"}
                                    index={index}
                                />
                            </Grid>
                        );
                    }
                    if (
                        doc.mimeType.includes("application/msword") ||
                        doc.mimeType.includes(
                            "vnd.openxmlformats-officedocument.wordprocessingml.document"
                        )
                    ) {
                        return (
                            <Grid item xs={6} sm={6} md lg={2} xl={2} key={doc.id}>
                                <ImageAttachment
                                    delete={deleteAttachment}
                                    icon={word}
                                    src={doc.src}
                                    name={"заключение"}
                                    index={index}
                                />
                            </Grid>
                        );
                    }
                    if (
                        doc.mimeType.includes("vvnd.ms-excel") ||
                        doc.mimeType.includes(
                            "vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        )
                    ) {
                        return (
                            <Grid item xs={6} sm={6} md lg={2} xl={2} key={doc.id}>
                                <ImageAttachment
                                    delete={deleteAttachment}
                                    src={doc.src}
                                    name={"заключение"}
                                    index={index}
                                />
                            </Grid>
                        );
                    }
                })}
            </Grid>
            </Grid> */}
    </Grid>
  );
};
TaskPlaces.propTypes = {
  period: PropTypes.string.isRequired
};
export default TaskPlaces;
