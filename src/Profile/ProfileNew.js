import React from "react";
import { Box, Card, Container, GridList, ListItemText, Typography, InputLabel, Input } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from '@material-ui/icons/Add';
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import NameNew from "../Profile/NameNew";
import PositionNew from "../Profile/PositionNew";
import PhoneNew from "../Profile/PhoneNew";
import UploadFile from "../KuratorWorkplace/ApplicationsList/SingleApplicationFromList/UploadFile";
import styled from "styled-components";
const ProfileNew = () => {
    return (<div>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div style={{ position: "relative", width: "fit-content", margin: "15px auto" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmAIbB7TPNsDohPlhy0FMRG2hQ3CT-A0DhLohnIzDBC6sm7slC" width="256px" height="256px" />
                <label htmlFor="file" style={{ width: "fit-content", position: "absolute", right: -30 }}>
                    <AddIcon />
                </label>
                <Input type="file" name="file" id="file" style={{ margin: "0 auto", width: "1px", height: "0.1px", display: "none" }} />
            </div>

        </Grid>
        <div >
            <Grid container justify="center">
                <Grid item xs={12} sm={12} md lg={3} xl={3}>
                    <NameNew />
                </Grid>
                <Grid item xs={12} sm={12} md lg={3} xl={3}>
                    <PositionNew />
                </Grid>
                <Grid item xs={12} sm={12} md lg={3} xl={3}>
                    <PhoneNew />
                </Grid>
            </Grid>
        </div>
        <Grid container justify="center">
            <Grid item xs={12} sm={12} md={6} lg={8} xl={9}>
                <Container style={{ marginTop: 12 }}>
                    <Card style={{ background: "#8d32d4", color: "#ffffff" }}>
                        <Typography style={{ fontSize: 38, paddingTop: 20 }} align={"center"} color={"inherit"} variant={"h4"}>
                            О фонде
                </Typography>
                        <p></p>
                        <Typography style={{ paddingLeft: 50, fontFamily: "Roboto" }} >
                            Оказывает материальную помощь
                    социально не защищенным категориям населения в Дагестане. <p>
                                К ним относятся:
                </p>
                        </Typography>
                        <List style={{ paddingLeft: 50 }} >
                            <ListItemText>
                                <Typography>
                                    - матери-одиночки
                        </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography>
                                    - инвалиды
                        </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography>
                                    - одинокие старики
                        </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography>
                                    - малоимущие и малообеспеченные семьи
                        </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography>
                                    - многодетные семьи
                        </Typography>
                            </ListItemText>
                        </List>
                        <Typography style={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 20 }} >
                            Оказывается продуктовая, медицинская и финансовая помощь, а также помощь в   оплате аренды жилья и покупке одежды.

                </Typography>
                    </Card>
                </Container>
            </Grid>
        </Grid>

    </div >

    )
};
export default ProfileNew