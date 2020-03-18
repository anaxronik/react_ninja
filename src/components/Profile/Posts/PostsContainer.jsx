import React from 'react';
import Posts from './Posts';


const PostsContainer = (props) => {
    let state = props.store.getState()
    let posts = state.profilePage.posts

    return (<Posts posts={posts} />);
}

export default PostsContainer;
