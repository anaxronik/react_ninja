import React from 'react';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

const MyPosts = (props) => {


    let PostsElement = props.posts.map(post => <Post text={post.text} likesCount={post.likesCount} />)
    // let PostsElement = posts.reverse()

    return (
        <div>
            <NewPost addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText} />
            {PostsElement.reverse()}
        </div>
    );
}

export default MyPosts;
