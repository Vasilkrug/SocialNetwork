import React from 'react';
import styles from "./ProfileAvatar.module.scss";

const ProfileAvatar = (props) => {
    return (
        <div className={styles.avatar_img}>
            <img src='/images/avatar.png'/>
            <button>Изменить фото</button>
        </div>
    );
}

export default ProfileAvatar;