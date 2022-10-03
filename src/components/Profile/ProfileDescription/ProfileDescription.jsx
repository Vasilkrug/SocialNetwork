import React from 'react';
import styles from "./ProfileDescription.module.scss";
import ProfileLinks from "../ProfileLinks/ProfileLinks";

const  ProfileDescription = (props) => {
    return (
        <div className={styles.description}>
            <ul className={styles.user}>
                <li><img src='/images/icons/post.png'/>Посты: 0</li>
                <li><img src='/images/icons/group.png'/>Подписчики: 0</li>
                <li><img src='/images/icons/location-16.png'/>Город: Moscow</li>
                <li><img src='/images/icons/birthday.png'/>День рождения: 01.02.1993</li>
            </ul>
            <hr/>
            <ProfileLinks/>
        </div>
    );
}

export default ProfileDescription;