import React from 'react';
import styles from "./PostForm.module.scss";

const PostForm = (props) => {
    return (
        <form className={styles.post_form}>
            <textarea placeholder="Напишите что-нибудь"/>
        </form>
    );
}

export default PostForm;