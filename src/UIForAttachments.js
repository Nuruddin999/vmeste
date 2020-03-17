/* eslint-disable react/prop-types */
import React, { useState } from "react";
import image from "./KuratorWorkplace/ApplicationsList/SingleApplicationFromList/Icons/image.png";
import sound from "./KuratorWorkplace/ApplicationsList/SingleApplicationFromList/Icons/sound.png";
import word from "./KuratorWorkplace/ApplicationsList/SingleApplicationFromList/Icons/word.png";
import youtube from "./KuratorWorkplace/ApplicationsList/SingleApplicationFromList/Icons/youtube.png";
import pdfIcon from "./KuratorWorkplace/ApplicationsList/SingleApplicationFromList/Icons/pdfIcon.png";
import sheet from "./KuratorWorkplace/ApplicationsList/SingleApplicationFromList/Icons/google-sheets-logo-70C2B2CA6A-seeklogo.com.png"
import ImageAttachment from "./KuratorWorkplace/ApplicationsList/SingleApplicationFromList/ImageAttachment";
import Grid from "@material-ui/core/Grid";

const AttachmentsUI = ({ deleteAttachment, attachments, period }) => {

      return <Grid container spacing={1} alignItems={"center"}>
            {attachments ? attachments.map(function (doc, index) {
                  if (doc.contentType.includes("image")) {
                        return (
                              <Grid item xs={6} sm={6} md lg={2} xl={2} key={doc.id}>
                                    <ImageAttachment
                                          delete={() => deleteAttachment(doc.id, period, attachments)}
                                          icon={image}
                                          src={doc.url}
                                          name={"заключение"}
                                          index={index}
                                    />
                              </Grid>
                        );
                  }
                  if (doc.contentType.includes("audio")) {
                        return (
                              <Grid item xs={6} sm={6} md lg={2} xl={2} key={doc.id}>
                                    <ImageAttachment
                                          delete={() => deleteAttachment(doc.id, period, attachments)}
                                          icon={sound}
                                          src={doc.url}
                                          name={"заключение"}
                                          index={index}
                                    />
                              </Grid>
                        );
                  }
                  if (doc.contentType.includes("video")) {
                        return (
                              <Grid item xs={6} sm={6} md lg={2} xl={2} key={doc.id}>
                                    <ImageAttachment
                                          delete={() => deleteAttachment(doc.id, period, attachments)}
                                          icon={youtube}
                                          src={doc.url}
                                          name={"заключение"}
                                          index={index}
                                    />
                              </Grid>
                        );
                  }
                  if (doc.contentType.includes("pdf")) {
                        return (
                              <Grid item xs={6} sm={6} md lg={2} xl={2} key={doc.id}>
                                    <ImageAttachment
                                          delete={() => deleteAttachment(doc.id, period, attachments,)}
                                          achment
                                          icon={pdfIcon}
                                          src={doc.url}
                                          name={"заключение"}
                                          index={index}
                                    />
                              </Grid>
                        );
                  }
                  if (
                        doc.contentType.includes("application/msword") ||
                        doc.contentType.includes(
                              "vnd.openxmlformats-officedocument.wordprocessingml.document"
                        )
                  ) {
                        return (
                              <Grid item xs={6} sm={6} md lg={2} xl={2} key={doc.id}>
                                    <ImageAttachment
                                          delete={() => deleteAttachment(doc.id, period, attachments)}
                                          icon={word}
                                          src={doc.url}
                                          name={"заключение"}
                                          index={index}
                                    />
                              </Grid>
                        );
                  }
                  if (
                        doc.contentType.includes("vvnd.ms-excel") ||
                        doc.contentType.includes(
                              "vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        )
                  ) {
                        return (
                              <Grid item xs={6} sm={6} md lg={2} xl={2} key={doc.id}>
                                    <ImageAttachment
                                          delete={() => deleteAttachment(doc.id, period, attachments)}
                                          src={doc.url}
                                          name={"заключение"}
                                          index={index}
                                          icon={sheet}
                                    />
                              </Grid>
                        );
                  }
            }) : ""}


      </Grid>
}
export default AttachmentsUI