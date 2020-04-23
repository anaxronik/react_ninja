import React from 'react';
import css from './NewPost.module.css';
import { Paper, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


const NewPost = (props) => {
    let newPostElement = React.createRef();

    let updateNewPostText = (event) => {
        props.updateNewPostText(event.target.value)
    }

    return (
        <Paper className='paper'>
            <div className={css.newPostBlock}>
                <TextField
                    id="outlined-multiline-static"
                    label="Текст вашего поста"
                    multiline
                    rows={4}
                    variant="outlined"
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={updateNewPostText}
                />
                <div>
                    <Button variant="contained" color="primary" onClick={props.addPost}>Опубликовать</Button>

                </div>
            </div>
        </Paper>
    );
}

export default NewPost;
