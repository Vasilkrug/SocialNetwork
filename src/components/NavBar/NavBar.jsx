import React from 'react';
import styles from './NavBar.module.scss'
import {Link} from "react-router-dom";
const NavBar = (props) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav_list}>
                <li><img src="/images/icons/user.png"/><Link to="/profile">Профиль</Link></li>
                <li> <img src="/images/icons/message.png"/><Link to="/dialogs">Мои сообщения</Link></li>
                <li><img src="/images/icons/news.png"/><Link>Новости</Link></li>
                <li><img src="/images/icons/music.png"/><Link>Музыка</Link></li>
                <li><img src="/images/icons/settings.png"/><Link>Настройки</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;