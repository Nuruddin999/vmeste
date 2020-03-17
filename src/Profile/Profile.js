import React from "react";
import { Box, Card, Container, GridList, ListItemText, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import BusinessIcon from '@material-ui/icons/Business';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Grid from "@material-ui/core/Grid";
import ContactsUI from "./Name";
import Phone from "../Profile/Phone";
import Name from "../Profile//Name";
import Position from "../Profile//Position";
import List from "@material-ui/core/List";
const Profile = () => {
    return (
        <Box style={{ background: " linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)", width: "100%", height: "100%" }} >
            <Container style={{ width: "fit-content", padding: 9 }}>
                <Avatar style={{ width: 150, height: 150 }}>
                </Avatar>
            </Container>
            <Box display="flex" justifyContent="center" >
                <Name />
                <Position />
                <Phone />
            </Box>
            <Container>
                <Typography align={"center"} color={"inherit"} variant={"h4"}>
                    О фонде
         </Typography>
                <Typography >
                    Оказывает материальную помощь
                    социально не защищенным категориям населения в Дагестане.
                    К ним относятся:
            </Typography>
                <List>
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
                <Typography>
                    Оказывается продуктовая, медицинская и финансовая помощь, а также помощь в   оплате аренды жилья и покупке одежды.
            </Typography>
            </Container>
        </Box>
    )
};
export default Profile