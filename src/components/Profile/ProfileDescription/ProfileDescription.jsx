import React from 'react';
import styles from "./ProfileDescription.module.scss";
import ProfileLinks from "../ProfileLinks/ProfileLinks";

const  ProfileDescription = (props) => {
    return (
        <div className={styles.description}>
            <div className={styles.user_title}>
                <h2>Василий Кругловецкий</h2>
            </div>
            <ul className={styles.user}>
                <li><img src='/images/icons/post.png'/>Посты: <span>0</span></li>
                <li><img src='/images/icons/group.png'/>Подписчики: <span>0</span></li>
                <li><img src='/images/icons/location-16.png'/>Город: <span>Mосква</span></li>
                <li><img src='/images/icons/birthday.png'/>День рождения: <span>01.02.1993</span></li>
            </ul>
            <hr/>
            <ProfileLinks/>
        </div>
    );
}

export default ProfileDescription;