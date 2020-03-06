import React from 'react';
import css from './NewPost.module.css';

const NewPost = () => {
    return (
        <div className={css.block}>
            <h4>New post</h4>
            <textarea className={css.textarea}></textarea>
            <button className={css.button}>Send</button>
        </div>
    );
}

export default NewPost;
