import React from 'react';
import css from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={css.info}>
            <div>
                <img className={css.avatar} src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg" alt="" />
            </div>
            <div className={css.info_block}>
                <div>Dmitriy K</div>
                <div>Date of Birth</div>
                <div>City</div>
                <div>Education</div>
                <div>web site</div>
            </div>
        </div>
    );
}

export default ProfileInfo;
