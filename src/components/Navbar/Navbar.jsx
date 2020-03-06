import React from 'react'
import css from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <div className={`${css.item}`}>
                <a href="/profile">Профиль</a>
            </div >
            <div className={css.item}>
                <a href="/dialogs">Сообщения</a>
            </div>
            <div className={css.item}>
                <a href="/news">Новости</a>
            </div>
            <div className={css.item}>
                <a href="/music">Музыка</a>
            </div>
            <div className={css.item}>
                <a href="/settings">Настройки</a>
            </div>
        </nav >
    )
}

export default Navbar