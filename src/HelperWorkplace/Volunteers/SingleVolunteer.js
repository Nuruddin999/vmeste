import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Formik } from "formik";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const SingleVolunteer = ({
  volunteer,
  urlPath,
  styles,
  save,
  isNewVol,
  update
}) => {
  const formFields = [
    { key: "midName", val: "Фамилия" },
    { key: "name", val: "Имя" },
    {
      key: "lastName",
      val: "Отчество"
    },
    { key: "phone", val: "Телефон" },
    { key: "address", val: "Адрес" }
  ];

  if (typeof volunteer === "undefined") {
    return <Redirect to={"/helper/volunteers"} />;
  }

  return (
    <div>
      <Formik
        initialValues={{
          name: volunteer.name,
          midName: volunteer.midName,
          lastName: volunteer.lastName,
          phone: volunteer.phone,
          address: volunteer.address
        }}
        onSubmit={values => {
          if (values.password !== values.confPassword) {
            return;
          }
          isNewVol ? save(values) : update(values);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container direction={"column"}>
              {formFields.map(field => (
                <Grid
                  style={{ margin: "13px auto 0", width: "70%" }}
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={4}
                >
                  <TextField
                    name={field.key}
                    fullWidth={true}
                    variant={"outlined"}
                    label={field.val}
                    required={"true"}
                    value={values[field.key]}
                    onChange={handleChange}
                  />
                </Grid>
              ))}
              {urlPath.includes("newvolunteer") ? (
                <div>
                  <Grid
                    style={{ margin: "13px auto 0", width: "70%" }}
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={4}
                  >
                    <TextField
                      name={"password"}
                      fullWidth={true}
                      variant={"outlined"}
                      label={"Пароль"}
                      required={"true"}
                      value={values.password}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid
                    style={{ margin: "13px auto 0", width: "70%" }}
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={4}
                  >
                    <TextField
                      error={values.confPassword !== values.password}
                      name={"confPassword"}
                      fullWidth={true}
                      variant={"outlined"}
                      label={"Повторите пароль"}
                      required={"true"}
                      value={values.confPassword}
                      onChange={handleChange}
                      helperText={
                        values.confPassword !== values.password
                          ? "Пароль и подтверждение пароля не совпадают"
                          : ""
                      }
                    />
                  </Grid>
                </div>
              ) : null}
              <Grid
                style={{ margin: "13px auto 0" }}
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
              >
                <Button
                  style={styles.buttonStyle}
                  fullWidth={true}
                  variant={"contained"}
                  type="submit"
                >
                  {isNewVol ? "Добавить" : "Сохранить"}
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default withRouter(SingleVolunteer);
