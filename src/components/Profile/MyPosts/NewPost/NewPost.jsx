import React from 'react';
import css from './NewPost.module.css';

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div className={css.block}>
            <h4>New post</h4>
            <textarea className={css.textarea} ref={newPostElement}></textarea>
            <button className={css.button} onClick={addPost}>Send</button>
        </div>
    );
}

export default NewPost;
