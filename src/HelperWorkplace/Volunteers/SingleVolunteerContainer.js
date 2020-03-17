import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import SingleVolunteer from "./SingleVolunteer";
import { titleAction } from "../../redux/reducers/HeaderReducer";
import { saveButtonStyle } from "../CommonDiffUiStyles";
import axios from "axios";

const SingleVolunteerContainer = props => {
  const styles = {
    buttonStyle: saveButtonStyle
  };

  const urlPath = props.match.url;
  const dispatch = useDispatch();
  const index = parseInt(props.match.params.id) - 1;
  const volunteers = useSelector(state => state.helperPage.volunteers);
  console.log(volunteers);
  const volunteer = urlPath.includes("newvolunteer") ? {} : volunteers[index];
  const save = async value => {
    /** здесь должно быть api **/
    let prevVols = await axios.get(
      "https://curier-df119.firebaseio.com/volunteers.json"
    );
    if (prevVols.data !== null) {
      let vol = { ...value, id: prevVols.data.length + 1 };
      axios.put("https://curier-df119.firebaseio.com/volunteers.json", [
        ...prevVols.data,
        vol
      ]);
    } else {
      let vol = { ...value, id: 1 };
      axios.put("https://curier-df119.firebaseio.com/volunteers.json", [vol]);
    }
  };
  const update = async value => {
    let url = `https://curier-df119.firebaseio.com/volunteers/${index}.json`;
    console.log(url);

    axios.patch(url, value);
  };
  useEffect(() => {
    if (urlPath.includes("newvolunteer")) {
      dispatch(titleAction("Новый волонтер"));
    }
    return () => {
      dispatch(titleAction(""));
    };
  }, []);
  return (
    <SingleVolunteer
      volunteer={volunteer}
      isNewVol={urlPath.includes("newvolunteer")}
      urlPath={urlPath}
      styles={styles}
      save={save}
      update={update}
    />
  );
};

export default withRouter(SingleVolunteerContainer);
