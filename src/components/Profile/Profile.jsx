import React from 'react';
import css from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import NewPostContainer from './NewPost/NewPostContainer';


const ProfileInfo = (props) => {
    return (
        <div className={css.info}>
            <div><img src={props.profile.photos.small} alt="avatar" className={css.avatar} /></div>
            <div className={css.info_block}>
                <div>Name: {props.profile.fullName}</div>
                <div>aboutMe: {props.profile.aboutMe}</div>
                <div>userId: {props.profile.userId}</div>
                <div>lookingForAJob: {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
                <div>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</div>
                <div>small: {props.profile.photos.small}</div>
                <div>
                    <div>facebook: {props.profile.contacts.facebook}</div>
                    <div>website: {props.profile.contacts.website}</div>
                    <div>vk: {props.profile.contacts.vk}</div>
                    <div>twitter: {props.profile.contacts.twitter}</div>
                    <div>instagram: {props.profile.contacts.instagram}</div>
                    <div>youtube: {props.profile.contacts.youtube}</div>
                    <div>github: {props.profile.contacts.github}</div>
                    <div>mainLink: {props.profile.contacts.mainLink}</div>
                </div>
            </div>
        </div>
    );
}


const Profile = (props) => {
    if (!props.profile) {
        console.log('Props empty')
    }
    return (
        <div className={css.block}>
            <ProfileInfo profile={props.profile} />
            <NewPostContainer />
            <PostsContainer />
        </div >
    )
}

export default Profile