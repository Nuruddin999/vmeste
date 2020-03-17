let initialState = {
    loadedAccounts: [],
    accounts: [],
    foundations: [],
    singleUserId: 0,
    addNewUserPage: {
        addedSuccessfully: false,
        error: false,
        redirect: false
    },
    foundationId: 0,
    page: 1,
    count: 10
};
export const UserTableNextPage = (currentPage) => {
    return {type: "NEXT-PAGE", currentPage: ++currentPage}
};
//получение списка пользователей
export const getAccountsType = (accounts) => {

    return {type: "APPEND-ACCOUNTS", accounts}
};
// получение списка организаций
export const getFoundationsType = (foundations) => {
    return {type: "GET-FOUNDATIONS", foundations: foundations}
};
//показ положит диалог окна в случае успешного добавления пользователя
export const getSuccessAddedType = (singleUserID) => {
    return {type: "SUCCESS-ADDED", singleUserID: singleUserID}
};
// перенаправление на редактирование
export const getRedirectAfterAddedType = () => {
    return {type: "REDIRECT-AFTER-ADDED"}
};
export const getSetSingleUserIdType = (singleUserId) => {
    return {type: "SET-SINGLEUSERID", singleUserID: singleUserId}
};
export const getAddNewUserUnAuthType = () => {
    return {type: "ADD-NEW-USER-UNAUTHOR"}
};
export const getAddNewUserForbiddenType = () => {
    return {type: "ADD-NEW-USER-FORBIDDEN"}
};
export const getAddNewUserOnServerType = () => {
    return {type: "ADD-NEW-USER-ONSERVER"}
};
export const getAddNewUserUnknownType = (message) => {
    return {type: "ADD-NEW-USER-UNKNOWN", message: message}
};
export const getAddNewUserClearType = () => {
    return {type: "ADD-NEW-USER-CLEAR"}
};
export const clearAccountsList = () => {
    return {type: "CLEAR-ACCOUNT-LIST"}
};


export const adminPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case "CLEAR-ACCOUNT-LIST":
            return {...state, page: 1, accounts: [], loadedAccounts: []};

        case "NEXT-PAGE":
            return {...state, page: ++action.currentPage};

        case "APPEND-ACCOUNTS":
            let oldAccount = state.accounts;
            return {...state, accounts: [...oldAccount, ...action.accounts], loadedAccounts: action.accounts};

        case "GET-FOUNDATIONS":
            return {...state, foundations: action.foundations};

        case "SUCCESS-ADDED":
            return {
                ...state,
                singleUserId: action.singleUserID,
                addNewUserPage: {
                    redirect: true,
                    error: {
                        code: 0,
                    }
                }
            };
        case "ADD-NEW-USER-UNAUTHOR":
            return {
                ...state, addNewUserPage: {
                    redirect: false,
                    error: {
                        code: 401,
                        message: "Пожалуйста авторизируйтесь"
                    }
                }
            };
        case "ADD-NEW-USER-FORBIDDEN":
            return {
                ...state, addNewUserPage: {
                    redirect: false,
                    error: {
                        code: 403,
                        message: "У вас нет полномочий для дальнейших операций"
                    }
                }
            };
        case "ADD-NEW-USER-ONSERVER":
            return {
                ...state, addNewUserPage: {
                    redirect: false,
                    error: {
                        code: 500,
                        message: "Ошибка на удаленном сервере, пожалуйста, попробуйте позже"
                    }
                }
            };
        case  "ADD-NEW-USER-UNKNOWN":
            return {
                ...state, addNewUserPage: {
                    redirect: false,
                    error: {
                        code: 600,
                        message: action.message
                    }
                }
            };
        case "SET-SINGLEUSERID":
            return {...state, singleUserId: action.singleUserId};
        case  "ADD-NEW-USER-CLEAR":
            return {
                ...state, addNewUserPage: {
                    error: {
                        code: 0,
                        message: ""
                    }
                }
            };
        default:
            return state
    }
};
