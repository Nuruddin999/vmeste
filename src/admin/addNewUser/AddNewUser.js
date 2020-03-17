import React from "react";
import {useStyles} from "../../authentication/SignIn";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import {addNewUser} from "../../RestAPIHelper";
import AddNewUserSuccessDialog from "./AddNewUserSuccessDialog";
import Grid from "@material-ui/core/Grid";
import {
    getAddNewUserClearType,
    getAddNewUserUnknownType,
    getSuccessAddedType,
} from "../../redux/reducers/AdminReducer";
import {Redirect} from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
const AddNewUser = (props) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const {foundations, adminPage, dispatch} = props;
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(getAddNewUserClearType());
        setOpen(false);
    };
    let fundId = 0;
    function handleComboBoxChange(event) {
        fundId = event.target.value;
        console.log(fundId)
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const credentials = new FormData(event.target);
        const user = {
            Username: `${credentials.get("username")}`,
            Lastname: `${credentials.get("lastname")}`,
            Password: `${credentials.get("password")}`,
            ConfirmPassword: `${credentials.get("ConfirmPassword")}`,
            Phone: `${credentials.get("phone")}`,
            Email: `${credentials.get("email")}`,
            FoundationId: parseInt(fundId)
        };
        addNewUser(user, fundId, localStorage.getItem("access_token")).then(result => {
            dispatch(getSuccessAddedType(result.data.id));
            /*   dispatch(getSuccessDialogType());
            setTimeout(() => {
                dispatch(getAddNewUserClearType())
            }, 1000);
            dispatch(getRedirectAfterAddedType())*/
        }).catch(error => {
            setOpen(true);
            dispatch(getAddNewUserUnknownType(error.response.data.Message));
        })
    }

    return (
        <div>
            <Snackbar
                style={{backgroundColor:"green"}}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
                message={<span id="message-id">{adminPage.addNewUserPage.error.message}</span>}
                action={[
                    <Button key="undo" color="secondary" size="small" onClick={handleClose}>
                      Вернуться
                    </Button>,
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        className={classes.close}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
            <form className={classes.form} Validate onSubmit={handleSubmit}>
                <TextField
                    required
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="username"
                    id="username"
                    label="Имя пользователя"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Пароль"
                    id="password"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="ConfirmPassword"
                    label="Подтвердите пароль"
                    id="ConfirmPassword"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Телефон"
                    id="phone"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    label="e-mail"
                    id="email"
                    type="email"
                />
                <TextField required select label={"Специальности"} fullWidth variant={"outlined"} onChange={handleComboBoxChange}>
                    {foundations.map(option => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
                <Grid
                    spacing={5}
                    direction={"column"}
                    alignItems={"center"}
                >
                    <Grid item xs="6">
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Добавить пользователя
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >
                {adminPage.addNewUserPage.redirect ?   <Redirect to={`users/${adminPage.singleUserId}`}/>: null}
                {adminPage.addNewUserPage.showDialogSuccess ? <AddNewUserSuccessDialog id={adminPage.singleUserId}/> : null}
            </Grid>
        </div>


    )
};
export default AddNewUser