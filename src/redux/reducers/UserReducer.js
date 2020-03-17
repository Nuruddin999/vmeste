let initialState = {
    workplaces: [],
    page: 1
};
export const nextPage = (currentPage) => {
    return {type: "NEXT-PAGE", currentPage: currentPage}
};
export const nextPageList = (pageList) => {
    return {type: "NEXT-PAGELIST", currentPageList: pageList}
};
export const getUserPageAddUserType = () => {
    return {type: "ADD-USER"}
};
export const getUserPageSubmitType = (oAuth) => {
    return {type: "SUBMIT"}
};
export const getUserPageLogOutType = () => {
    return {type: "LOGOUT"}
};
export const getUserPageGetWorkplacesType = (workplaces,page) => {
    return {type: "GET-WORKPLACES", workplaces: workplaces,page:page}
};
export const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-USER":
            return state;
        case "SUBMIT":
            return state;
        case "LOGOUT":
            return {...state, isUserLoggedIn: false};
        case "GET-WORKPLACES":
            return {...state, workplaces: action.workplaces};
        case "NEXT-PAGE":
            return {...state, page: ++action.currentPage};
            default:
            return state
    }
};
