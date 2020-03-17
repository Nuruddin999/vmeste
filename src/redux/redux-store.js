import { applyMiddleware, combineReducers, createStore } from "redux";
import { userPageReducer } from "./reducers/UserReducer";
import { adminPageReducer } from "./reducers/AdminReducer";
import { ResponseStateReducer } from "./reducers/ResponceStatusReducer";
import { curatorPageReducer } from "./reducers/CuratorReducer";
import thunk from "redux-thunk";
import { helperReducer } from "./reducers/HelperReducer";
import { errorReducer } from "./reducers/errorReducer";
import { headerReducer } from "./reducers/HeaderReducer"

let reducers = combineReducers({
    userPage: userPageReducer,
    adminPage: adminPageReducer,
    responseStatus: ResponseStateReducer,
    curatorPage: curatorPageReducer,
    helperPage: helperReducer,
    errorsPage: errorReducer,
    header: headerReducer
});
const store = createStore(reducers, applyMiddleware(thunk));
console.log(store.getState());



export default store