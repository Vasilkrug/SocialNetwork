import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import styles from './Profile.module.scss';

const Profile = (props) => {
    return (
        <main>
            <div className={styles.user_info}>
                <ProfileAvatar/>
                <ProfileDescription/>
            </div>
            <MyPosts/>
        </main>
    );
}

export default Profile;