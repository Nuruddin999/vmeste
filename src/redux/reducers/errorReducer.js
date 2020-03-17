import state from "../state";

let initialState = {
    errorCode: 0,
    errorMessage: "",
    showErrorSnack: false
};
export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REG-ERROR":
            return {
                ...state,
                errorCode: action.status,
                errorMessage: action.message,
                showErrorSnack: true
            };
        case "CLEAR-ERROR":
            return {
                ...state,
                errorCode: 0,
                errorMessage: "",
                showErrorSnack: false

            };
        default:
            return {...state}
    }
};