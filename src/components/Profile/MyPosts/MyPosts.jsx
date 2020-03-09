import React from 'react';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

const MyPosts = (props) => {


    let PostsElement = props.posts.map(post => <Post text={post.text} likesCount={post.likesCount} />)

    return (
        <div>
            <NewPost />
            {PostsElement}
        </div>
    );
}

export default MyPosts;
