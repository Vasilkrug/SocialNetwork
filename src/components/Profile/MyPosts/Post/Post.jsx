import React from 'react';
import styles from './Post.module.scss'

const Post = ({message,like,changeLike}) => {
    return (
        <div className={styles.post}>
            <img className={styles.avatar} src="/images/avatar.png"/>
            <div className={styles.post_description}>
                <h3>Василий Кругловецкий</h3>
                <p>{message}</p>
            </div>
            <img
                onClick={changeLike}
                className={styles.like}
                alt="like"
                src={like ? "/images/icons/red-heart.png" : "/images/icons/heart.png"}/>
        </div>
    );
}

export default Post;