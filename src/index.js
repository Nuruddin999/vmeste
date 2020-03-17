import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import Chat from "./HelperWorkplace/TasksList/Chat";


let renderAllView = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
                {/*            <Chat/>*/}
            </BrowserRouter>
        </Provider>, document.getElementById('root'));
};

renderAllView();
store.subscribe(() => {
    let state = store.getState();
    renderAllView(state)
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
