import React from 'react';
import css from './Posts.module.css';
import userPhoto from '../../../assets/images/userPhoto.png'
import { Paper, Button } from '@material-ui/core';



const Post = (props) => {
    const onLikeClick = () => {
        console.log('onLikeClick')
    }

    return (
        <Paper>
            <div className={css.post}>
                <div>
                    <img className={css.avatar} src={userPhoto} alt="" />
                </div>
                <div className={css.textblock}>
                    <div>
                        {props.text}
                    </div>
                    <div className={css.likeButtonBlock}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={onLikeClick}
                        >like {props.likesCount}</Button>
                    </div>
                </div>
            </div>
        </Paper>
    );
}


const Posts = (props) => {
    let PostsElement = props.posts.map(post => <Post text={post.text} likesCount={post.likesCount} key={post.id} />)
    PostsElement.reverse()

    return (
        <div>
            {PostsElement}
        </div>
    );
}

export default Posts;
