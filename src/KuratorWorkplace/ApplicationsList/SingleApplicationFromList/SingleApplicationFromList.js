/* eslint-disable react/prop-types */
import React from "react";
import {
    Box,
    Card,
    Container,
    Input,
    InputLabel,
    Typography
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./SingleItem.css";
import MenuItem from "@material-ui/core/MenuItem";
import SuccessSnackbar from "../../../Snackbars/SuccessSnackbar";
import ErrorSnackbar from "../../../Snackbars/ErrorSnackbar";
import image from "./Icons/image.png";
import ImageAttachment from "./ImageAttachment";
import sound from "./Icons/sound.png";
import UploadFile from "./UploadFile";
import word from "./Icons/word.png";
import youtube from "./Icons/youtube.png";
import pdfIcon from "./Icons/pdfIcon.png";
import ApplicationForm from "./ApplicationFrom";
import { icons } from "../../../HelperWorkplace/Icons/Icons";

const saveButtonStyle = {
    backgroundColor: "#36b420",
    color: "#ffffff",
    width: "400px",
    margin: 13
};
const editButtonStyle = {
    backgroundColor: "#1664b4",
    color: "#ffffff",
    width: "400px",
    margin: 13
};
const SingleApplication = ({ applications, applicationsTable, singleApplicationIndex, editCurrentStatus, applForm, deleteAttachment, dispatch }) => {

    const application = applications[singleApplicationIndex];
    const [openSnack, setOpenSnack] = React.useState(false);
    const saveButtonOnClick = () => {
        /**здесь апи для сохранения изменений заявления **/
    };
    const handleClickOpenSnack = () => {
        editCurrentStatus(application.id, application.currentStatus)
            .then(result => {
                console.log(result);
                setOpenSnack(true);
                setTimeout(() => setOpenSnack(false), 1500);
            });
    };
    const uploadFile = () => {
        //dispatch(uploadFileAction())
    };
    return (
        <Box style={{ height: "fit-content" }}>
            <Typography align={"center"} variant={"h5"}>
                Заявление № {application.id}
            </Typography>
            <form
                style={{ flex: "50%", margin: 20 }}
                validate="true"
                onSubmit={handleClickOpenSnack}
            >
                <Grid container direction={"column"} spacing={1}>
                    {applForm}
                    <Grid item>
                        <Container>
                            <Card className={"Item"}>
                                <Typography
                                    align={"center"}
                                    variant={"h5"}
                                    color={"primary"}
                                    style={{ padding: 14 }}
                                >
                                    Документы
                                </Typography>
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
                            </Card>
                        </Container>
                    </Grid>
                    <Grid item>
                        <Container style={{ width: "fit-content" }}>
                            <Button
                                onClick={saveButtonOnClick}
                                variant="contained"
                                style={saveButtonStyle}
                            >
                                Сохранить
                            </Button>
                        </Container>
                    </Grid>
                </Grid>
            </form>
            <SuccessSnackbar open={openSnack} message={"Статус изменен"} />
            <ErrorSnackbar
                open={applicationsTable.showErrorSnack}
                message={applicationsTable.errorMessage}
            />
        </Box>
    );
};
export default SingleApplication;
