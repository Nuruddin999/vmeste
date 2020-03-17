import  axios from "axios";
export let baseUrl = "http://5.101.49.35:5000/api";
export let baseUrlForVmeste = "http://5.101.49.35:5005/api";

export async function addNewUser(data, foundationId,accessToken) {
   const config={
       headers: {
           FoundationId:`${foundationId}`,
           Authorization: `Bearer ${accessToken}`,
           'content-type': 'application/json'
       }
   };
   const res=makePostRequestAsync(`${baseUrl}/foundations/${foundationId}/employees`,data,config);
    return res
}

/**
 * Преобразует токен в обьект содержащий данные о ролях пользователя и имени пользователя
 *
 * @param token
 * @returns {any}
 */
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
};

//GET
export const makeGetRequestAsync = async (url, params) => {
    checkExpiration();
    const accessToken = localStorage.getItem("access_token");
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': `application/json`,

        }, data: {}
    };
    return (await axios.get(url, {params: {...params}, ...config})).data;
};


//POST form-data

//POST application/json
export const makePostRequestAsync = async (url,data,config=null)=>{
    checkExpiration();
    return (await axios.post(url, data,config));
};

//DELETE

export const checkExpiration = () => {
    if (!checkExpirationPeriod) {
        const data = updateToken(localStorage.getItem("refresh_token"));
        localStorage.clear();
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("expires_in", data.expires_in);
        localStorage.setItem("refresh_token", data.access_token);
        localStorage.setItem("created_at", data.access_token)
    }

};
//Проверка токена
export const checkExpirationPeriod = (expiresIn, createdAt) => {
    let expirationPeriod = createdAt + expiresIn;
    return Date.now() < expirationPeriod
};

export const updateToken = async (refreshToken) => {
    return (await axios.post(`${baseUrl}/refresh?refresh_token=${refreshToken}`)).data
};

export const clearPreviousErrorData = (responseCode, dispatch) => {
    if (responseCode > 0) {
        dispatch({type: "CLEAR"})
    }
};
// Отладка ошибок при запросах на сервер

export const errorManaging=(status,dispatch,errorPageAction,dispatchClearAction)=>{
    if (status === 401) {
        //unauthorized
        console.log(`error status: ${status}`);
        dispatch(errorPageAction(status,"Вы не авторизованы"));
        setTimeout(() => {
            dispatch(dispatchClearAction());
        }, 1400);
return;
    }

    if (status === 403) {
        //forbidden
        dispatch(errorPageAction(status,"У вас нет полномочий для дальнейшей операции"));
        setTimeout(() => {
            dispatch(dispatchClearAction());
        }, 2000);
        return;
        //show dialog
    }

    if (status === 500) {
        dispatch(errorPageAction(status,"Ошибка на сервере, повторите позже"));
        setTimeout(() => {
            dispatch(dispatchClearAction());
        }, 1400);
        return;
        //server error
    }
    dispatch(errorPageAction(status,"Что-то пошло не так, повторите позже"));
    setTimeout(() => {
        dispatch(dispatchClearAction());
    }, 1400);
};




