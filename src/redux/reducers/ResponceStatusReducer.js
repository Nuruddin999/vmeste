export const getCleatAction = () => {
    return {type: "CLEAR"}
};
export const registerResponseError=(status,message)=>{
    return {type:"RESPONSE-REG-ERROR",status:status,message:message}
};
let initialState={
  responseCode: 0,
  errorMessage: 0,
    showErrorSnack:false
};

export const ResponseStateReducer= (state=initialState, action)=>{
    switch (action.type) {
        case "FORBIDDEN":
            return {...state, responseCode: 403, errorMessage: "У вас нет полномочий для дальнейших операций"};
        case "UN-AUTHORIZED":
            return {...state, responseCode: 401, errorMessage: "Пожалуйста авторизируйтесь"};
        case "SERVERERROR":
            return {...state, responseCode: 500, errorMessage: "Ошибка на удаленном сервере, пожалуйста, попробуйте позже"};
        case "UNKNOWN":
            return {...state, responseCode: 600, errorMessage: "Что-то пошло не так, попробуйте позже"};
        case "CLEAR":
            return {...state,responseCode:0,errorMessage: 0,  showErrorSnack:false};
        case    "RESPONSE-REG-ERROR":
            return    {...state,
                responseCode:action.status,
                errorMessage: action.message,
                showErrorSnack:true
            };
        default:
            return state
    }
};