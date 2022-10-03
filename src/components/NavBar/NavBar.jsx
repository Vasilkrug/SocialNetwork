import React from 'react';
import styles from './NavBar.module.scss'
import {Link} from "react-router-dom";
const NavBar = (props) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav_list}>
                <li><img src="/images/icons/user.png"/><Link to="/profile">Profile</Link></li>
                <li> <img src="/images/icons/message.png"/><Link to="/dialogs">Messages</Link></li>
                <li><img src="/images/icons/news.png"/><Link>News</Link></li>
                <li><img src="/images/icons/music.png"/><Link>Music</Link></li>
                <li><img src="/images/icons/settings.png"/><Link>Settings</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;