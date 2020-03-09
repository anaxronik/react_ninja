import React from 'react';
import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={css.block}>
            <div>
                <img className={css.bigimg} src="https://pix10.agoda.net/hotelImages/5647641/-1/45ee96c8c2b177ffcd99818b6b6387f0.jpg?s=1024x768" alt="" />
            </div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} />
        </div >
    )
}

export default Profile