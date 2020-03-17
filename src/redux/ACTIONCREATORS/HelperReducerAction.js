import {
  baseUrl,
  errorManaging,
  makeGetRequestAsync
} from "../../RestAPIHelper";
import { clearError } from "./errorActions";
import axios from "axios";

export const clearTasksList = () => {
  return { type: "CLEAR-TASKS-LIST" };
};
export const clearVolssList = () => {
  return { type: "CLEAR-VOLS-LIST" };
};

export const addTasksToStore = tasks => {
  return { type: "ADD-TASKS-TO-STORE", tasks };
};
export const removeTask = id => {
  return { type: "REMOVE-TASK", id };
};

export const incrementPage = currentPage => {
  return { type: "NEXT-PAGE", currentPage };
};

export const addVolunteersToStore = volunteers => {
  return { type: "ADD-VOLUNTEERS-TO-STORE", volunteers };
};
export const removeVolunFromList = id => {
  {
    return { type: "REMOVE-VOL", id };
  }
};
const getTasksAsync = async () => {
  return await axios.get("https://curier-df119.firebaseio.com/tasks.json");
};
const getVolunteersAsync = async (page, count) => {
  return await makeGetRequestAsync(`${baseUrl}/volunteer/{apiEndpoint}`, {
    page,
    count
  });
};
const getVolunteersFirebase = async () => {
  return await axios.get("https://curier-df119.firebaseio.com/volunteers.json");
};
export const getTasksAction = errorsPage => {
  return dispatch => {
    getTasksAsync().then(result =>
      result.data ? dispatch(addTasksToStore(result.data)) : null
    ); /*.catch(error => errorManaging(error.response.status, dispatch, errorsPage, clearError))*/
  };
};
export const getVolunteersAction = errorsPage => {
  return dispatch => {
    getVolunteersFirebase().then(result =>
      result.data ? dispatch(addVolunteersToStore(result.data)) : null
    ); /*.catch(error => errorManaging(error.response.status, dispatch, errorsPage, clearError))*/
  };
};
export const setSingleTaskIndex = id => {
  return { type: "SET-TASK-INDEX", id };
};
export const setCalendarDate = (date, period) => {
  return { type: "SET-CALENDAR-DATE", date, period };
};
export const setTime = (time, period) => {
  return { type: "SET-TIME", time, period };
};
export const changeTaskName = name => {
  return { type: "CHANGE-TASK-NAME", name };
};
export const addTitleToHeader = title => {
  return { type: "ADD-TITLE", title };
};
