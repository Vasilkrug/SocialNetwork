import React from 'react';
import styles from './NavBar.module.scss'
import {Link} from "react-router-dom";

const NavBar = (props) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav_list}>
                <li><img src="/images/icons/user.png" alt="user"/><Link to="/profile">Профиль</Link></li>
                <li><img src="/images/icons/group.png" alt="friends"/>Друзья</li>
                <li><img src="/images/icons/message.png" alt="message"/><Link to="/dialogs">Мои сообщения</Link></li>
                <li><img src="/images/icons/news.png" alt="news"/><Link>Новости</Link></li>
                <li><img src="/images/icons/music.png" alt="music"/><Link>Музыка</Link></li>
                <li><img src="/images/icons/settings.png" alt="settings"/><Link>Настройки</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;