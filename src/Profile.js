/* eslint-disable react/jsx-key */
import React from "react";
import { icons } from "./HelperWorkplace/Icons/Icons";
import { Grid, Card } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

export default function Profile() {
  const avaStyle = { width: "256px", height: "256px", margin: "0 auto" };
  const list = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  };
  const contactsField = {
    display: "flex",
    alignItems: "center",
    marginTop: 10
  };
  const contactsItem = { display: "flex", alignItems: "center" };
  const aboutFund = {
    display: "table",
    margin: "60px auto",
    fontSize: 20,
    fontFamily: "Consolas",
    padding: 40
  };
  const contacts = [
    { icon: icons.accauntIcon, name: "Алиева М А" },
    { icon: icons.phone, name: "456436546" },
    { icon: icons.position, name: "волонтер" },
    { icon: icons.placeIcon, name: "г Москва ул Первая 48" },
    { icon: icons.web, name: <a href="#">zakyat.ru</a> }
  ];
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <Card style={{ margin: 50 }}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ marginTop: 20 }}
        >
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Avatar
              style={avaStyle}
              src="https://mongoose-os.com/images/generic_user.png"
              width="256px"
              height="256px"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div style={list}>
              {contacts.map(contact => (
                <div style={contactsField}>
                  <div style={contactsItem}>{contact.icon}</div>
                  <div style={{ marginLeft: 20, fontSize: 20 }}>
                    {contact.name}
                  </div>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
        <h1 style={{ textAlign: "center", marginTop: 30 }}>О Фонде</h1>
        <section style={aboutFund}>
          <span style={{ display: "block", margin: "0 auto" }}>
            Оказывает материальную помощь социально не защищенным категориям
            населения в Дагестане. <br />
          </span>
          К ним относятся:
          <ul style={{ magrgin: "0 auto" }}>
            <li> матери-одиночки</li>
            <li> инвалиды</li>
            <li> одинокие старики</li>
            <li> малоимущие и малообеспеченные семьи</li>
            <li> многодетные семьи</li>
          </ul>
          <span>
            {" "}
            Оказывается продуктовая, медицинская и финансовая помощь, а также
            помощь в оплате аренды жилья и покупке одежды.
          </span>
        </section>
      </Card>
    </div>
  );
}
