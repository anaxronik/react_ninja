import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
            store={store}
        />, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState)

store.subscribe(rerenderEntireTree)