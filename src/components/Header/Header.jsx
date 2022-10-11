import React from 'react';
import styles from './Header.module.scss'
import SearchForm from "../UI/SearchForm/SearchForm";

const Header = (props) => {
    const styleForSearchForm = {
        border: "1px solid #5f6368",
        borderRadius: "20px",
        padding: "0 0 0 30px",
        height: "40px"
    }
    return (
        <header className={styles.header}>
            <img className={styles.icon} src="/images/icons/logo.png" alt="#"/>
            <div className={styles.searchForm}>
                <SearchForm styles={styleForSearchForm}/>
            </div>
            <div className={styles.authorization}>
                <a type="button" href="#">Выйти</a>
                <img src="/images/avatar.png" alt="avatar"/>
            </div>
        </header>
    );
}

export default Header;