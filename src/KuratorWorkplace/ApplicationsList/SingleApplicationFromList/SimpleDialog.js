import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Image from "material-ui-image/lib/components/Image/Image";
import {Box, Container} from "@material-ui/core";
function SimpleDialog(props) {

    const { onClose, open } = props;
    const handleClose = () => {
        onClose();
    };

    return (
        <Container onClick={open}>
            <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
            <Image  src="http://www.sarprok.ru/sites/default/files/zakl/1529_001_0.jpg"
                   style={{width: "100%",height:"100%"}}/>
        </Container>
    );
}
export default SimpleDialog