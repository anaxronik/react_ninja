import React from 'react';
import css from './Users.module.css';


export const User = (props) => {
    return (
        <div className={css.userBlock}>
            <div className={css.leftBlock}>
                <img src={props.avatarUrl} alt="avatar" className={css.avatar} />
                <div><button onClick={props.buttonAction}>{props.buttonText}</button></div>
            </div>
            <div className={css.centerBlock}>
                <div>{props.status}</div>
            </div>
            <div className={css.rightBlock}>
                <div>{props.country}</div>
                <div>{props.town}</div>
            </div>

        </div>
    );
}



const Users = (props) => {
    return <div >
        {
            props.users.map(user =>
                <div key={user.id} className={css.userBlock}>
                    <div className={css.leftBlock}>
                        <img src={user.avatarUrl} alt="avatar" className={css.avatar} />
                        <div>
                            {
                                user.followed
                                    ?
                                    <button onClick={() => { console.log('UNFOLLOW button pressed'); }}>UNFOLLOW</button>
                                    :
                                    <button onClick={() => { console.log('FOLLLOW button pressed'); }}>FOLLOW</button>
                            }
                        </div>
                    </div>
                    <div className={css.centerBlock}>
                        <div>{user.status}</div>
                    </div>
                    <div className={css.rightBlock}>
                        <div>{user.location.country}</div>
                        <div>{user.location.town}</div>
                    </div>
                </div>
            )
        }
    </div >
}

export default Users;
