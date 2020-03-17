import Grid from "@material-ui/core/Grid";
import { Card, InputLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

const ApplicationForm = ({ application, onTextChange }) => {
  const onTextFieldsChange = name => ({ target: { value } }) => {
    onTextChange(name, { target: { value } });
  };
  const blankFields = [
    { nameRus: "Создано", nameEng: "createdAt", value: application.createdAt },
    {
      nameRus: "Заявитель",
      nameEng: "applicant",
      value: application.applicant
    },
    { nameRus: "Телефон", nameEng: "tel", value: application.tel },
    {
      nameRus: "Категория проблемы",
      nameEng: "cat",
      value: application.cat
    },
    {
      nameRus: "Краткое описание проблемы",
      nameEng: "descr",
      value: application.descr
    },
    {
      nameRus: "ФИО благополучателя",
      nameEng: "receiverFIO",
      value: application.receiverFIO
    },
    {
      nameRus: "Адрес, по которому зарегистрирована проблема",
      nameEng: "addr",
      value: application.addr
    },
    { nameRus: "Номер телефона благополучателя", nameEng: "receiverTel" },
    {
      nameRus: "Подробное описание проблемы",
      nameEng: "fullDescr"
    },
    { nameRus: "Статус задачи", nameEng: "currentStatus" }
  ];
  const translations = {
    InWork: "В работе",
    Finished: "Завершено",
    Inspection: "Проводится инспекция",
    GivingHelp: "Оказывается помощь",
    HelpGiven: "Помощь оказана",
    SentToFoundations: "Отправлено фондам"
  };
  const translate = phrase => {
    return translations[phrase];
  };
  const returnDate = date => {
    let d = new Date(date);
    if (date===d.toLocaleString()){
      return
    }
    return `${d.toLocaleString()}`;
  };
  return (
<React.Fragment>
      {blankFields.map(field => {
        return (
          <Grid item>
            <Card style={{ padding: 10 }}>
              <InputLabel component="h3">{field.nameRus}</InputLabel>
              {field.nameRus === "Статус задачи" ? (
                <TextField
                  select
                  fullWidth
                  variant={"filled"}
                  onChange={onTextFieldsChange(field.nameEng)}
                >
                  {application.states.map(state => (
                    <MenuItem key={state.id} value={state.status}>
                      {translate(state.status)}
                    </MenuItem>
                  ))}
                </TextField>
              ) : (
                <TextField
                  onChange={onTextFieldsChange(field.nameEng)}
                  required
                  value={
                    field.nameRus === "Создано"
                      ? returnDate(application[`${field.nameEng}`])
                      : application[`${field.nameEng}`]
                  }
                  multiline
                  rowsMax="4"
                  fullWidth
                  id={field.nameEng}
                  variant="filled"
                />
              )}
            </Card>
          </Grid>
        );
      })}
</React.Fragment>
  );
};
export default ApplicationForm;
