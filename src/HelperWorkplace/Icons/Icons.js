import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { green } from "@material-ui/core/colors";
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PlaceIcon from '@material-ui/icons/Place';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CancelIcon from '@material-ui/icons/Cancel';
import SendIcon from '@material-ui/icons/Send';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import LanguageIcon from '@material-ui/icons/Language';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
const profileSection = {
    color: "#4caf50", margin: "0 auto", display: "block", fontSize: "40px"
}
export const icons = {
    editIcon: <EditIcon style={{ color: "green", fontSize: 30 }} />,
    removeIcon: <DeleteForeverIcon color={"secondary"} style={{ fontSize: 30 }} />,
    calendarIcon: <EventIcon style={{ color: "#009be5", fontSize: 48, position: "relative", top: "5px" }} />,
    timeIcon: <ScheduleIcon style={{ color: "#009be5", fontSize: 48, position: "relative", top: "5px" }} />,
    placeIcon: <PlaceIcon style={profileSection} />,
    deleteIcon: <RemoveCircleIcon color={"secondary"} />,
    checkIcon: <CheckCircleIcon style={{ color: "green", fontSize: 25 }} />,
    chatIcon: <ChatBubbleOutlineIcon style={{ color: "#009be5", fontSize: 30 }} />,
    closeIcon: <CancelIcon />,
    accauntIcon: <AccountCircleIcon style={profileSection} />,
    attachFileIcon: <AttachFileIcon style={{ fontSize: 25, color: "white" }} />,
    sendIcon: <SendIcon style={{ width: "100%", marginTop: "3px" }} />,
    exit: <ExitToAppIcon style={{ display: "table", margin: "auto 0", fontSize: 40, color: "#006db3" }} />,
    phone: <PhoneIcon style={profileSection} />,
    position: <BusinessIcon style={profileSection} />,
    web: <LanguageIcon style={profileSection} />,
    addIcon: <AddCircleOutlineIcon />
};