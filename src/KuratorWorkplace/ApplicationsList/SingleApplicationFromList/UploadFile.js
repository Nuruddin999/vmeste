/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./Icons/upload.png"
import "./SingleItem.css"
import upload from "./Icons/upload.png"
import { AddCircleOutline } from "styled-icons/material/"
import Input from "@material-ui/core/Input";
import { Box, InputLabel, Button } from "@material-ui/core";

const UploadFile = ({ explanation, icons }) => {
    const [docNames, setName] = useState([])

    const click = (e) => {
        let list = [...docNames]
        console.log(e.target.files)
        for (const file of e.target.files) {
            list.push(file.name)
        }
        setName(list)
    }
    return <Box style={{ width: "fit-content", margin: "50px auto" }}>
        <InputLabel htmlFor="file" style={{ width: "fit-content", background: "green", border: "1px solid green", borderRadius: "14px", color: "white", padding: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <div>{icons.attachFileIcon}</div>
                <span style={{ fontSize: 17 }}>Загрузить</span>
            </div>
        </InputLabel>
        <Input onChange={click} type="file" name="file" id="file" style={{ margin: "0 auto", width: "1px", height: "21px", display: "none" }} />
        <ul>{docNames.map(name => <li key={name}>{name}</li>)}</ul>
    </Box>
};
export default UploadFile