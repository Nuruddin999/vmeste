import React from "react";
import { fetchDataForInfiniteScroll } from "../../CommonUtils/Utils";

let initialState = {
  tasks: [],
  loadedTasks: [],
  volunteers: [],
  loadedVolunteers: [],
  profile: "",
  singleTaskIndex: 0,
  page: 1,
  loads: [],
  statuses: [
    { name: "Ожидание отклика", color: "#2196f3" },
    { name: "Выбрать откликнувшегося", color: "#ff9800" },
    { name: "В работе", color: "#4caf50" },
    { name: "Подтвердить выполнение", color: "#f44336" },
    { name: "Черновик", color: "#f44336" }
  ],
  singleTask: {
    date: "",
    type: "",
    name: "",
    descrShort: "",
    category: "",
    descrDetailed: "",
    address: "",
    telephone: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    startAddress: "",
    startContactPerson: "",
    startContactName: "",
    startContactMidNAme: "",
    startContactLastName: "",
    startContactPhone: "",
    startAttachments: [{}],
    endAddress: "",
    endContactPerson: "",
    endContactName: "",
    endContactMidNAme: "",
    endContactLastName: "",
    endContactPhone: "",
    endAttachments: [],
    taskFlowShort: [""],
    taskFlowDetailed: [""],
    currentStatus: "",
    statusColor: "",
    doers: []
  }
};

export const helperReducer = (state = initialState, action) => {
  let prevTask = state.tasks[state.singleTaskIndex];
  let period = action.period == "start" ? "startDate" : "endDate";
  switch (action.type) {
    case "CHANGE-HELPER-PAGE":
      return { ...state, ...action.field }
    case "ADD-TASKS-TO-STORE":
      let prevTasks = state.tasks;

      return {
        ...state,
        tasks: [...action.tasks],
        loads: [...action.tasks]
      };
    case "ADD-VOLUNTEERS-TO-STORE":
      let prevVols = state.volunteers;
      return { ...state, volunteers: [...action.volunteers] };
    case "REMOVE-TASK":
      let tasks = state.tasks.filter(task => task.id !== action.id);
      return { ...state, tasks: [...tasks] };
    case "REMOVE-VOL":
      let volunteers = state.volunteers.filter(vol => vol.id !== action.id);
      return { ...state, volunteers: [...volunteers] };
    case "CLEAR-TASKS-LIST":
      const emptyList = [];
      return { ...state, tasks: emptyList };
    case "CLEAR-VOLS-LIST":
      return { ...state, volunteers: [] };
    case "SET-TASK-INDEX":
      return { ...state, singleTaskIndex: action.id };
    case "CHANGE-TASK-NAME":
      let prevSingleTask = state.singleTask;
      return { ...state, singleTask: { ...prevSingleTask, name: action.name } };
    case "SET-CALENDAR-DATE":
      period = action.period == "start" ? "startDate" : "endDate";
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === state.tasks[state.singleTaskIndex].id
            ? {
              ...prevTask,
              [period]: new Date(action.date)
            }
            : task
        )
      };

    case "SET-TIME":
      period = action.period == "start" ? "startDate" : "endDate";
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === state.tasks[state.singleTaskIndex].id
            ? {
              ...prevTask,
              [period]: action.time
            }
            : task
        )
      };
    case "SET-STATUS":
      let task = state.singleTask;
      let status = "";
      let color = "";
      for (let i = 0; i < state.statuses.length; i++) {
        if (state.statuses[i].name === action.name) {
          status = action.name;
          color = state.statuses[i].color;
        }
      }
      //case "Move-to-singletask":
      return {
        ...state,
        singleTask: { ...task, currentStatus: status, statusColor: color }
      };
    case "NEXT-PAGE":
      return { ...state, page: ++action.currentPage };
    default:
      return { ...state };
  }
};
