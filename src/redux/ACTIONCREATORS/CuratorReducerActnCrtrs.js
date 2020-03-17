import {baseUrl, errorManaging, makeGetRequestAsync, makePostRequestAsync} from "../../RestAPIHelper";

export const EditApplicationAction = (name, {target: {value}}) => {
    return {type: "EDIT-APPLICATION", name: name, value: value};
};
export const getApplicationsAction = () => {
    return {type: "GET-APPLICATIONS"};
};

export const onChangeFieldNewAppl = (name, {target: {value}}) => {
    return {type: "NEW-APPLICATION-CHANGEFILED", name: name, value: value};
};
export const ChangeFlag = (index, isOpened) => {
    return {type: "CHANGE-FLAG", index: index, isOpened: isOpened};
};
export const setFlagsForOpen = () => {
    return {type: "SET-FLAGS-FOR-OPEN"};
};
export const registerApplContainerError = (status, message) => {
    return {type: "APPLCONTAINER-REG-ERROR", status: status, message: message};
};
export const clearApplContainerError = (status, message) => {
    return {
        type: "APPLCONTAINER-CLEAR-ERROR",
        status: status,
        message: message
    };
};

/** так как нет возможности добавить заявления (нет апи), то и изменить их статус не получаетмся поэтому данные методы пока не применяется**/
export const fetchApplicationsAction = (page, count, status) => {
    return (dispatch) => {
        getApplicationsAsync(page, count, status).catch(error => {
            errorManaging(error.response.status, dispatch, registerApplContainerError, clearApplContainerError)
        });
        dispatch(setFlagsForOpen());
    }
};
const getApplicationsAsync = async (page, count,status) => {
    return await makeGetRequestAsync(`http://5.101.49.35:5005/api/curator/requests`,{page,count,status})
};
