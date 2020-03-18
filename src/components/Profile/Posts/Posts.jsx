import React from 'react';
import css from './Posts.module.css';


const Post = (props) => {
    return (
        <div className={css.post}>
            <img className={css.avatar} src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2" alt="" />
            <div className={css.textblock}>
                <div>
                    {props.text}
                </div>
                <div className={css.likesCount}>
                    like {props.likesCount}
                </div>
            </div>
        </div>
    );
}


const Posts = (props) => {
    let PostsElement = props.posts.map(post => <Post text={post.text} likesCount={post.likesCount} />)

    return (
        <div>
            {PostsElement}
            {/* <Post /> */}
        </div>
    );
}

export default Posts;
