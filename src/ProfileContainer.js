/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { categories } from './HelperWorkplace/navItemsList';
import Profile from './Profile';
import { titleAction } from "./redux/reducers/HeaderReducer";

function ProfileContainer(props) {
      const urlPath = props.match.url;
      const dispatch = useDispatch();
      useEffect(() => {
            categories.map(category => category.children.map(child => {
                  console.log(child.path)
                  console.log(urlPath)
                  if (urlPath.includes(child.path)) {
                        dispatch(titleAction(child.id))
                  }
            }))
            return () => {
                  dispatch(titleAction(""))
            }
      }, []);
      return (
            <Profile />
      )
}
export default withRouter(ProfileContainer)