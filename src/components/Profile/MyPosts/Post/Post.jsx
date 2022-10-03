import React from 'react';
import styles from './Post.module.scss'

const Post = ({message}) => {
    return (
        <div className={styles.item}>
            <img src="/images/avatar.png"/>
            <p>{message}</p>
        </div>
    );
}

export default Post;