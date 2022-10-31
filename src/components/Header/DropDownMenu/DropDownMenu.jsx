import React from 'react';
import styles from "./DropDownMenu.module.scss";

const DropDownMenu = ({theme,isMenuVisible,handleThemeClick}) => {
    return (
        <ul className={styles[isMenuVisible ? `show` : 'hidden']}>
            <li onClick={(event) => handleThemeClick(event)}>
                <a type="button">{theme === 'dark' ? 'Светлая тема' : 'Темная тема'}</a>
            </li>
            <li><a type="button">Выйти</a></li>
        </ul>
    );
};

export default DropDownMenu;