import React from 'react';
import styles from './Post.module.scss'

const Post = ({message}) => {
    return (
        <div className={styles.post}>
            <img src="/images/avatar.png"/>
            <div className={styles.post_description}>
                <h3>Василий Кругловецкий</h3>
                <p>{message}</p>
            </div>

        </div>
    );
}

export default Post;