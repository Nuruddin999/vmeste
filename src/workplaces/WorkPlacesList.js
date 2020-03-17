import React, {useState} from 'react';
import {Card, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Header from "../Header";
import InfiniteScroll from 'react-infinite-scroller';
import {NavLink} from "react-router-dom";


const WorkPlacesList = (props) => {
    const {workplaces}=props.userPage;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <div>
            <Header sectionName={"Ваши рабочие места"} logOut={props.logOut} onDrawerToggle={handleDrawerToggle}/>
            <InfiniteScroll
                pageStart = {props.userPage.page}
                loadMore = {props.getWorkPlaces}
                loader={<div className="loader" key={0}>Загрузка ...</div>}
                hasMore = {workplaces.length >= 10} //проверяет
                useWindow={false}>
                <Grid container style={{position:"relative",top:"50px"}} spacing={1} justify={"center"}>
                {
                    workplaces.map(workPlace =>
                        <Grid item  key={workPlace.id} >
                            <Card  style={{
                                background: "#1976d2",
                                color: "white",
                                height: 100,
                                minWidth: 274,
                                maxWidth: 400,
                                padding: 32,
                                marginLeft: 0,
                                textAlign: "center"
                            }}>
                                <Typography component={NavLink} to={`/${workPlace.position}`} color="inherit"
                                            style={{fontSize: 27}}>{workPlace.foundation.name}</Typography>
                                <Typography color="initial">{workPlace.position}</Typography>
                            </Card>
                        </Grid>
                    )
                }
                </Grid>
            </InfiniteScroll>
        </div>
    );

};

export default WorkPlacesList;