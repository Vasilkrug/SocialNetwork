import React from 'react';
import styles from "./ProfileAvatar.module.css";

const ProfileAvatar = (props) => {
    return (
        <div className={styles.avatar_img}>
            <img src='/images/avatar.png'/>
            <button>Edit photo</button>
        </div>
    );
}

export default ProfileAvatar;