import React from 'react';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

const MyPosts = () => {
    return (
        <div>
            <div>
                <NewPost />
            </div>
            <div>
                <Post text='asdasd' />
                <Post text='asdasdasdas' />
                <Post text='asd3g34g34gasd' />
                <Post text='34g34g34g34g' />
                <Post text='34g34g4' />
            </div>
        </div>
    );
}

export default MyPosts;
