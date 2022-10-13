import React from 'react';
import styles from './Post.module.scss'
import LikesCounter from "../LikesCounter/LikesCounter";

const Post = ({message}) => {
    return (
        <div className={styles.post}>
            <img className={styles.avatar} src="/images/avatar.png" alt="avatar"/>
            <div className={styles.post_description}>
                <h3>Василий Кругловецкий</h3>
                <p>{message}</p>
            </div>
         <LikesCounter/>
        </div>
    );
}

export default Post;