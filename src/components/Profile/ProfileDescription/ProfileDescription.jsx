import React from "react";
import {useSelector} from "react-redux";
import ProfileLinks from "../ProfileLinks/ProfileLinks";
import styles from "./ProfileDescription.module.scss";

const ProfileDescription = (props) => {
    const postsLength = useSelector(state => state.posts.posts.length);

    return (
        <div className={styles.description}>
            <div className={styles.user_title}>
                <h2>Василий Кругловецкий</h2>
            </div>
            <ul className={styles.user}>
                <li><img src='/images/icons/post.png' alt="post"/>Посты: <span>{postsLength}</span></li>
                <li><img src='/images/icons/group.png' alt="group"/>Подписчики: <span>0</span></li>
                <li><img src='/images/icons/location-16.png' alt="location"/>Город: <span>Mосква</span></li>
                <li><img src='/images/icons/birthday.png' alt="birthday"/>День рождения: <span>01.02.1993</span></li>
            </ul>
            <hr/>
            <ProfileLinks/>
        </div>
    );
}

export default ProfileDescription;