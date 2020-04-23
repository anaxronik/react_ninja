import React from 'react';
import css from './Header.module.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import Button from '@material-ui/core/Button';

const Header = (props) => {
    return (
        <header className={css.header}>
            <img src={logo} alt="Logo" className={css.logo} />

            <div className={css.loginBlock}>
                {props.isAuth
                    ? < Button variant="contained" color="primary">{props.login}</Button>
                    : <NavLink to={'/login'}><Button variant="contained">Default</Button></NavLink>}
            </div>
        </header>
    )
}

export default Header