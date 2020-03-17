import React from "react";
import Grid from "@material-ui/core/Grid";
import Image from 'material-ui-image';
import {DeleteSection} from "./Icons/UIElements";
const ImageAttachment = (props) => {
    return <Grid container spacing={2} direction={"column"}
                 alignItems={"center"}>
        <Grid item>
            <a href={props.src} target="_blank">
                <Image src={props.icon} style={{width: 100, height: 100}}/>
            </a>
        </Grid>
        <Grid item>
      <DeleteSection index={props.index} name={props.name} delete={props.delete}/>
        </Grid>
    </Grid>
};
export default ImageAttachment