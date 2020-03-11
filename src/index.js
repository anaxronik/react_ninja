import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
        />, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState)

store.subscribe(rerenderEntireTree)