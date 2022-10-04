import React from 'react';
import styles from './Header.module.scss'

const Header = (props) => {
    return (
            <header className={styles.header}>
                <img className={styles.icon} src="/images/icons/logo.png" alt="#"/>
                <div className={styles.title}>
                    <h2>Социальная сеть</h2>
                </div>
                <div className={styles.authorization}>
                    <a type="button" href="#">Войти</a>
                </div>
            </header>
    );
}

export default Header;