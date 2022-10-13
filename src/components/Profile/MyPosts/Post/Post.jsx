import React from 'react';
import styles from './Post.module.scss'
import LikesCounter from "../LikesCounter/LikesCounter";

const Post = ({message,deletePost,id}) => {
    return (
        <div className={styles.post}>
            <img className={styles.avatar} src="/images/avatar.png" alt="avatar"/>
            <div className={styles.post_description}>
                <div className={styles.description_header}>
                    <h3>Василий Кругловецкий</h3>
                    <button onClick={() => deletePost(id)}><img src="/images/icons/close.svg"/></button>
                </div>
                <div className={styles.description_body}>
                    <p>{message}</p>
                </div>
                <div className={styles.description_footer}>
                    <LikesCounter/>
                </div>
            </div>

        </div>
    );
}

export default Post;