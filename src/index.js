import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updateNewPostText } from './redux/state'

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App
        appState={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
    />,
        document.getElementById('root'));
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)