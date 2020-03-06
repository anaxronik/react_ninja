import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return (
        <div className={css.post}>
            <img className={css.avatar} src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2" alt="" />
            <p>{props.text}</p>
            <span>like</span>
        </div>
    );
}

export default Post;
