import React from 'react';
import css from './NewPost.module.css';
import { addPostActionCreator, updateNewPostText } from './../../../../redux/profileReducer';



const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onChangeTextFields = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostText(text))
    }

    return (
        <div className={css.block}>
            <h4>New post</h4>
            <textarea
                className={css.textarea}
                ref={newPostElement}
                value={props.newPostText}
                onChange={onChangeTextFields}
            />
            <button
                className={css.button}
                onClick={addPost}
            >Send</button>
        </div>
    );
}

export default NewPost;
