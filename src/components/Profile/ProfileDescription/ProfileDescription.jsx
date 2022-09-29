import React from 'react';
import styles from "./ProfileDescription.module.css";
import ProfileLinks from "../ProfileLinks/ProfileLinks";

const  ProfileDescription = (props) => {
    return (
        <div className={styles.description}>
            <ul className={styles.user}>
                <li><img src='/images/icons/post.png'/>Posts: 0</li>
                <li><img src='/images/icons/group.png'/>Followers: 0</li>
                <li><img src='/images/icons/location-16.png'/>Location: Moscow</li>
                <li><img src='/images/icons/birthday.png'/>Birthday: 01.02.1993</li>
            </ul>
            <hr/>
            <ProfileLinks/>
        </div>
    );
}

export default ProfileDescription;