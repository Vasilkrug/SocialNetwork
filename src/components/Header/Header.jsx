import React, {useState} from 'react';
import styles from './Header.module.scss'
import SearchForm from "../UI/SearchForm/SearchForm";
import {CSSTransition} from "react-transition-group";

const Header = (props) => {
    const styleForSearchForm = {
        border: "1px solid #5f6368",
        borderRadius: "20px",
        padding: "0 0 0 30px",
        height: "40px"
    }
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const showMenu = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    return (
        <header className={styles.header}>
            <img className={styles.icon} src="/images/icons/logo.png" alt="#"/>
            <div className={styles.searchForm}>
                <SearchForm styles={styleForSearchForm} placeholder={'Поиск'}/>
            </div>
            <div className={styles.authorization}>
                <ul className={styles.menu}>
                    <li><img src="/images/avatar.png" alt="avatar"/></li>
                    <li>
                        <svg onClick={showMenu} fill="none" height="8" viewBox="0 0 12 8" width="12"
                             xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd"
                                  d="M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z"
                                  fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                            <ul className={styles[isMenuVisible ? `show` : '']}>
                                <li>Темная тема</li>
                                <li><a type="button" href="#">Выйти</a></li>
                            </ul>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;