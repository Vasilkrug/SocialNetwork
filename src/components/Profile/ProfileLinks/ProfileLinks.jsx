import React from 'react';
import styles from "./ProfileLinks.module.scss";

const ProfileLinks = (props) => {
    return (
        <nav className={styles.nav}>
            <h2>Подпишись</h2>
            <ul className={styles.nav_links}>
                <li className={styles.link}><img src='/images/icons/vk.png' alt="vk"/></li>
                <li className={styles.link}><img src='/images/icons/instagram.png' alt="inst"/></li>
                <li className={styles.link}><img src='/images/icons/facebook.png' alt="#facebook"/></li>
                <li className={styles.link}><img src='/images/icons/youtube.png' alt="youtube"/></li>
                <li className={styles.link}><img src='/images/icons/reddit.png' alt="reddit"/></li>
                <li className={styles.link}><img src='/images/icons/google.png' alt="google"/></li>
            </ul>
        </nav>
    );
}

export default ProfileLinks;