
import {addTasksToStore, setSingleTaskIndex} from "./redux/ACTIONCREATORS/HelperReducerAction";
import {helperReducer} from "./redux/reducers/HelperReducer";
import {fetchDataForInfiniteScroll} from "./CommonUtils/Utils";
import {setTaskskTest} from "./testFunctions"

it('adds new task', () => {
  let initialState = {
    tasks: [],
  loadedTasks:[],
    profile: "",
    singleTaskIndex: 0,
    page: 1,
  };
  let action=addTasksToStore([{
    id: 1,
    date: "",
    type: "Задание",
    name: "Доставка коробки",
    descrShort: "Необходимо помочь с продольствием",
    category: "Продовльствие",
    descrDetailed: "",
    address: "Склад Надежда",
    telephone: "89298777777",
    startDate: "Sat Jan 18 2020 16:08:00 GMT+0300 (Москва, стандартное время)",
    endDate: "Sat Jan 28 2020 19:00:00 GMT+0300 (Москва, стандартное время)",
    startAddress: "г Махачкала,ул Синявина,3",
    endAddress: "г Махачкала, ул Пушкина 11",
    taskFlowShort: "забрать продукты со склада, отвезти подопечному",
    taskFlowDetailed: ["Забрать две коробки", "Созвониться с подопечным", "Отвезти подопечному коробки", "Подписать акт"]
  }]);
  let setSingleIndex=setSingleTaskIndex(74);
  let newstate=helperReducer(initialState,setSingleIndex);
  expect(newstate.singleTaskIndex).toBe(74);
});

