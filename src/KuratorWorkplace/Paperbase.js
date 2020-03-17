import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Navigator from './DashboardUIComponents/Navigator';
import Header from '../Header';
import { Route, Switch } from "react-router-dom";
import ProfileNew from "../Profile/ProfileNew";
import { getUserPageLogOutType } from "../redux/reducers/UserReducer";
import ApplicationsContainer from "./ApplicationsList/ApplicationsContainer";
import TasksContainer from "./TasksList/TasksContainer";
import SingleTask from "./TasksList/SingleTask/SingleTask";
import SingleApplicationContainer from "./ApplicationsList/SingleApplicationFromList/SingleApplicationContainer";
import AddApplicationContainer from "./ApplicationsList/AddApplicationContainer";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

let theme = createMuiTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

theme = {
    ...theme,
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: '#18202c',
            },
        },
        MuiButton: {
            label: {
                textTransform: 'none',
            },
            contained: {
                boxShadow: 'none',
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing(1),
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: 'none',
                margin: '0 16px',
                minWidth: 0,
                padding: 0,
                [theme.breakpoints.up('md')]: {
                    padding: 0,
                    minWidth: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing(1),
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: '#404854',
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
    },
};

const drawerWidth = 256;

const styles = {
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        flex: 1,
        background: '#eaeff1',
    },
    footer: {
        padding: theme.spacing(2),
        background: '#eaeff1',
    },
};

function PaperbaseKurator(props) {

    const { classes, match, dispatch, state } = props;
    const [mobileOpen, setMobileOpen] = React.useState(true);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    function logOut() {
        localStorage.clear();
        dispatch(getUserPageLogOutType())
    };
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <nav className={classes.drawer}>
                    <Hidden smUp implementation="js">
                        <Navigator
                            PaperProps={{ style: { width: drawerWidth } }}
                            variant="temporary"
                            open={mobileOpen}
                            state={state.curatorPage}
                            onClose={handleDrawerToggle}
                        />
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Navigator PaperProps={{ style: { width: drawerWidth } }} />
                    </Hidden>
                </nav>
                <div className={classes.app}>
                    <Header logOut={logOut} sectionName={"Кабинет куратора"} onDrawerToggle={handleDrawerToggle} />
                    <main className={classes.main}>
                        <Switch>
                            <Route path={`${match.url}/profile`} render={() => <ProfileNew />} />
                            <Route path={`${match.url}/applications`} exact render={() => <ApplicationsContainer />} />
                            <Route path={`${match.url}/applications/:id`} render={() => <SingleApplicationContainer />} />
                            <Route path={`${match.url}/tasks`} exact render={() => <TasksContainer dispatch={props.dispatch} state={props.state} />} />
                            <Route path={`${match.url}/tasks/:id`} render={() => <SingleTask state={props.state.curatorPage} />} />
                            <Route path={`${match.url}/addapplication`}
                                render={() => <AddApplicationContainer />} />
                        </Switch>
                    </main>
                    <footer className={classes.footer}>
                        <Copyright />
                    </footer>
                </div>
            </div>
        </ThemeProvider>
    );
}

PaperbaseKurator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperbaseKurator);