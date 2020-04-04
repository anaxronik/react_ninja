import React from 'react';
import css from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={css.header}>
            <img
                className={css.logo}
                src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Wikinews-logo.png"
                alt=""
            />
            <div className={css.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header