import { getUserPageLogOutType } from "../redux/reducers/UserReducer";

export const fetchDataForInfiniteScroll = (list, state, action, name) => {
    let oldList = list;
    let data = [...oldList, ...action];
    console.log({ ...state, [name]: data, loads: action });
    return { ...state, [name]: data, loads: action }
};
export function logOut(dispatch) {
    localStorage.clear();
    dispatch(getUserPageLogOutType())
}
export function getFakeDoers() {
    let doers = [];
    for (let i = 0; i < 20; i++) {
        let doer = { id: i + 1, name: `Алиев Али Алиевич  ${i}`, age: `2${i}` + i, phone: `8988255555${i}`, finished: "2" }
        doers.push(doer)
    }
    return doers
}