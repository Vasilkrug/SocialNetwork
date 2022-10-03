import React from 'react';
import styles from './Header.module.scss'

const Header = (props) => {
    console.log(styles)
    return (
            <header className={styles.header}>
                <img className={styles.icon} src="/images/icons/logo.png" alt="#"/>
                <div className={styles.title}>
                    <h2>Social Network</h2>
                </div>
                <div className={styles.authorization}>
                    <a type="button" href="#">Login</a>
                </div>
            </header>
    );
}

export default Header;