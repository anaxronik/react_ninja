import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import NewPost from './NewPost';


const NewPostContainer = (props) => {
    let state = props.store.getState()
    let newPostText = state.profilePage.newPostText

    let onPostChanged = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }


    return (
        <NewPost
            newPostText={newPostText}
            updateNewPostText={onPostChanged}
            addPost={addPost}
        />
    );
}

export default NewPostContainer;
