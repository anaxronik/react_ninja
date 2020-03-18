import React from 'react';
import css from './NewPost.module.css';


const NewPost = (props) => {
    let newPostElement = React.createRef();

    let updateNewPostText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={css.block}>
            <h4>New post</h4>
            <textarea
                className={css.textarea}
                ref={newPostElement}
                value={props.newPostText}
                onChange={updateNewPostText}
            />
            <button
                className={css.button}
                onClick={props.addPost}
            >Send</button>
        </div>
    );
}

export default NewPost;
