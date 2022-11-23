import React, {useState} from "react";
import {useSwitchTheme} from "../../hooks/useSwitchTheme";
import styles from "./Header.module.scss";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import {useDispatch} from "react-redux";
import {setLoginAction, setUserAction} from "../../store/actions/UserActions";

const Header = (props) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const {theme, setTheme} = useSwitchTheme();
    const dispatch = useDispatch();

    const logoutUser = () => {
        dispatch(setLoginAction(false))
        dispatch(setUserAction(null))
        localStorage.removeItem('user')
    }
    const showMenu = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    const handleThemeClick = (e) => {
        e.target.text === 'Темная тема' ? setTheme('dark') : setTheme('light')
    }

    return (
        <header className={styles.header}>
            <img className={styles.header_logo} src="/images/icons/logo.png" alt="#"/>
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
                      <DropDownMenu
                          theme={theme}
                          isMenuVisible={isMenuVisible}
                          handleThemeClick={handleThemeClick}
                          logoutUser={logoutUser}/>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;