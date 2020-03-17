import React, { useState } from "react";

import { Box, GridList, Input, InputLabel, TextareaAutosize, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./chat.css"
import UploadFile from "../../KuratorWorkplace/ApplicationsList/SingleApplicationFromList/UploadFile";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

const Chat = ({ chatState, chatChangeState, icons }) => {
    const messages = [{ pos: "admin", message: ")" }, {
        pos: "volunteer",
        message: "по какому адресу отправить помощь ? тут нет номера дома"
    }, { pos: "admin", message: "ул Мирзабекова 176 б" }, {
        pos: "volunteer",
        message: "."
    }, { pos: "admin", message: ")" }];
    const messageOutcomeStyle = {
        background: "#94C2ED", padding: "2px 20px",
        maxWidth: "80%",
        width: "fit-content",
        lineHeight: "26px",
        borderRadius: "7px",
        marginBottom: "30px",
        marginTop: 20,
        color: "white",
        position: "relative",
        clear: "right",
        "&::after": {
            content: '" "',
            bottom: "100%",
            right: "10px",
            borderLeft: "15px solid transparent",
            borderBottom: "15px solid transparent",
            height: "0",
            width: "0",
            position: "absolute",
            pointerEvents: "none",
            borderBottomColor: "#94C2ED",
            marginLeft: "-10px"
        }
    };
    const messageIncomeStyle = {
        background: "#86BB71", padding: "2px 20px",
        maxWidth: "30%",
        lineHeight: "26px",
        borderRadius: "7px",
        marginBottom: "30px",
        marginTop: 20,
        color: "white",
        position: "relative",
        "&::after": {
            bottom: "100%",
            left: "93%",
            borderLeft: "15px solid transparent",
            borderBottom: "15px solid transparent",
            height: "0",
            width: "0",
            position: "absolute",
            pointerEvents: "none",
            borderBottomColor: "#86BB71",
            marginLeft: "-10px"
        }
    };
    const container = {
        background: "#86BB71", padding: "2px 20px",
        maxWidth: "80%",
        lineHeight: "26px",
        borderRadius: "7px",
        marginBottom: "30px",
        marginTop: 20,
        color: "white",
        position: "relative",
        float: "right",
        "&::after": {
            content: '" "',
            top: "100%",
            left: "30px",
            borderLeft: "15px solid #86BB71",
            borderBottom: "15px solid transparent",
            height: "0",
            width: "0",
            position: "absolute",
            pointerEvents: "none",
            marginLeft: "-10px"
        }
    }
    return <Box css={{ width: "50%", border: "3px solid #006db3", borderRadius: "10px", backgroundColor: "rgba(0,0,0,0.96)" }}>
        <Grid container={true} alignItems={"center"}
            style={{ background: "#009be5", color: "white", padding: 3 }}>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={2}>
                {icons.accauntIcon}
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={9}>
                <Typography>
                    Магомедов Магомед Магомедович <br />
                    Задание №34: Забрать вещи со скалада
                </Typography>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} onClick={() => {
                chatChangeState(chatState)
            }}>
                {icons.closeIcon}
            </Grid>
        </Grid>
        <Box>
            <List style={{ height: "440px", overflow: "hidden", overflowY: "scroll", padding: 10, backgroundColor: "rgba(0,0,0,0.96)" }}>
                {
                    messages.map(message =>
                        message.pos === "admin" ? <ListItemText><Box css={container}>
                            <p style={{ wordWrap: "break-word" }}>
                                {message.message}
                            </p>
                        </Box>
                        </ListItemText> : <ListItemText> <Box css={messageOutcomeStyle}>
                            <p style={{ wordWrap: "break-word" }}>
                                {message.message}
                            </p>
                        </Box>
                            </ListItemText>
                    )
                }
            </List>

        </Box>
        <Grid container={true} alignItems="center"
            style={{ background: "#009be5", color: "white", padding: 1, border: "solid #009be5", borderRadius: "3px" }}>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                <Box>
                    <InputLabel htmlFor="file" style={{ width: "fit-content", color: "white", padding: "2px" }}>
                        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <div>{icons.attachFileIcon}</div>
                        </div>
                    </InputLabel>
                    <Input type="file" name="file" id="file" style={{ margin: "0 auto", width: "1px", height: "0.1px", display: "none" }} />
                </Box>
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                <Input disableUnderline={true} fullWidth={true}
                    style={{ background: "white", fontSize: 16, border: "1px solid", borderRadius: 6 }}
                    multiline={true} />
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                {icons.sendIcon}
            </Grid>
        </Grid>
    </Box>
};
export default Chat
