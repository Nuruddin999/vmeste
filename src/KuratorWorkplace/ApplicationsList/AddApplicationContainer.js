import React from "react";
import {useDispatch, useSelector, connect} from "react-redux";
import SingleApplicationContainer from "./SingleApplicationFromList/SingleApplicationContainer";
import {} from "../../redux/reducers/CuratorReducer";
import ApplicationForm from "./SingleApplicationFromList/ApplicationFrom";
import {Component} from "react";
import {onChangeFieldNewAppl} from "../../redux/ACTIONCREATORS/CuratorReducerActnCrtrs";
import AddNewAppl from "./AddNewAppl";

class AddApplicationContainer extends Component {
  render() {
      const applForm = <ApplicationForm
          application={this.props.newApplication}
          onTextChange={this.props.onTextChange}
      />;
        return (
            <AddNewAppl
                applForm={applForm}
                        application={this.props.newApplication}
                        onTextChange={this.props.onTextChange}/>
        );
    }
}

const mapStateToProps = state => {
    return {newApplication: state.curatorPage.newApplication};
};
const mapDispatchToProps = dispatch => {
    return {
        onTextChange: (name, {target: {value}}) => {
            dispatch(onChangeFieldNewAppl(name, {target: {value}}));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddApplicationContainer);
