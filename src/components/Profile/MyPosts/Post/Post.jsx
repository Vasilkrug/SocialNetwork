import React from "react";
import styles from "./Post.module.scss";

const Post = ({message, deletePost, id, likes, userId, likesToggle}) => {
    return (
        <li className={styles.post}>
            <img className={styles.avatar} src="/images/avatar.png" alt="avatar"/>
            <div className={styles.post_description}>
                <div className={styles.description_header}>
                    <h3>Василий Кругловецкий</h3>
                    <a type="button" onClick={() => deletePost(id)}>
                        <img src="/images/icons/close.svg" alt="close-icon"/>
                    </a>
                </div>
                <div className={styles.description_body}>
                    <p>{message}</p>
                </div>
                <div className={styles.description_footer}>
                    <div className={styles.like}>
                        <img onClick={() => likesToggle(id, userId)}
                             alt="like"
                             src={likes.includes(userId) ? "/images/icons/red-heart.png" : "/images/icons/heart.png"}/>
                        <p>{likes.length > 0 ? likes.length : ''}</p>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Post;