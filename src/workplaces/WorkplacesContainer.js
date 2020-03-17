import React, {Component} from 'react';
import WorkPlacesList from "./WorkPlacesList";
import {baseUrl, makeGetRequestAsync} from "../RestAPIHelper";
import {getUserPageGetWorkplacesType, getUserPageLogOutType, nextPage} from "../redux/reducers/UserReducer";


class WorkplacesContainer extends Component {

    getWorkPlacesAsync = async (page, count, accessToken) => {
        return await makeGetRequestAsync(`${baseUrl}/workplaces?page=${page}&count=${count}`)
    };
    logOut = () => {
        localStorage.clear();
        this.props.dispatch(getUserPageLogOutType())
    };
    componentDidMount() {
        const{page}=this.props.state.userPage;
        const{dispatch}=this.props;
      this.getWorkPlacesAsync(page,10,localStorage.getItem("access_token")).then(result=>{
          dispatch(getUserPageGetWorkplacesType(result));
        //  dispatch(nextPage(page));
      })
    }
    render() {
        const {userPage} = this.props.state;
        const {dispatch} = this.props;
        return (
            <div>
                <WorkPlacesList  getWorkPlaces={this.getWorkPlacesAsync} dispatch={dispatch} userPage={userPage} logOut={this.logOut}/>
            </div>
        );
    }
}

export default WorkplacesContainer;


