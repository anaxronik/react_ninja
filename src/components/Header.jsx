import React from 'react';
import css from './Header.module.css'

const Header = () => {
    return (
        <header className={css.header}>
            <img className={css.logo}
                src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Wikinews-logo.png" alt="" />
        </header>
    )
}

export default Header