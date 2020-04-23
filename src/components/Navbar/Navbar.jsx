import React from 'react'
import css from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={css.navBlock}>
            <NavLink to="/profile" className={css.item} activeClassName={css.active}>
                Профиль
            </NavLink>
            <NavLink to="/dialogs" className={css.item} activeClassName={css.active}>
                Сообщения
            </NavLink>
            <NavLink to="/news" className={css.item} activeClassName={css.active}>
                Новости
            </NavLink>
            <NavLink to="/music" className={css.item} activeClassName={css.active}>
                Музыка
            </NavLink>
            <NavLink to="/settings" className={css.item} activeClassName={css.active}>
                Настройки
            </NavLink>
            <NavLink to="/users" className={css.item} activeClassName={css.active}>
                Пользователи
            </NavLink>
        </nav >
    )
}

export default Navbar