import React from 'react';
import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={css.block}>
            <div>
                <img className={css.bigimg} src="https://pix10.agoda.net/hotelImages/5647641/-1/45ee96c8c2b177ffcd99818b6b6387f0.jpg?s=1024x768" alt="" />
            </div>
            <div className={css.info}>
                <div>
                    <img className={css.avatar} src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg" alt="" />
                </div>
                <div>
                    <div> Dmitriy K</div>
                    <div>Date of Birth</div>
                    <div>City</div>
                    <div>Education</div>
                    <div>web site</div>
                </div>
            </div>
            <MyPosts />
        </div >
    )
}

export default Profile