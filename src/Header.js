import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import HelpIcon from "@material-ui/icons/Help";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import firebase from "./firebaseConfig";
import { Redirect } from "react-router-dom";

const lightColor = "rgba(255, 255, 255, 0.7)";

const styles = theme => ({
  secondaryBar: {
    zIndex: 0
  },
  menuButton: {
    marginLeft: -theme.spacing(1)
  },
  iconButtonAvatar: {
    padding: 4
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white
    }
  },
  button: {
    borderColor: lightColor,
    background: "#006db3",
    color: "#fff"
  },
  menuIcon: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

function Header(props) {
  const { classes, onDrawerToggle, sectionName, title } = props;
  const [signedOut, setSignedOut] = useState(false);
  function exit() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        setSignedOut(true);
      })
      .catch(function(error) {
        // An error happened.
      });
  }
  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid className={classes.menuIcon} item xs={0.5} md lg xl>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs md lg xl>
              <Grid container>
                <Grid item xs={11.5} md lg={12} xl={12}>
                  <AppBar
                    component="div"
                    className={classes.secondaryBar}
                    color="primary"
                    position="static"
                    elevation={0}
                  >
                    <Toolbar>
                      <Grid container alignItems="center">
                        <Grid item xs={10} md lg={5} xl={5}>
                          <Typography color="inherit" variant={"h6"}>
                            {sectionName}
                          </Typography>
                        </Grid>
                        <Grid item xs={10} md lg={5} xl={5}>
                          <Typography color="inherit" variant={"h6"}>
                            {title ? title : null}
                          </Typography>
                        </Grid>
                        <Grid item xs={4} md lg={0.5} xl={0.5}>
                          <IconButton
                            color="inherit"
                            className={classes.iconButtonAvatar}
                          >
                            <Avatar
                              src="/static/images/avatar/1.jpg"
                              alt="My Avatar"
                            />
                          </IconButton>
                        </Grid>
                        <Grid item xs={4} md lg={0.5} xl={0.5}>
                          <Tooltip title="Help">
                            <IconButton color="inherit">
                              <HelpIcon />
                            </IconButton>
                          </Tooltip>
                        </Grid>
                        <Grid item xs={4} md lg={0.5} xl={0.5}>
                          <Button
                            className={classes.button}
                            variant="contained"
                            onClick={exit}
                          >
                            Выход
                          </Button>
                        </Grid>
                      </Grid>
                    </Toolbar>
                  </AppBar>
                </Grid>
              </Grid>
            </Grid>
            {signedOut ? <Redirect to="/" /> : ""}
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired
};

export default withStyles(styles)(Header);
