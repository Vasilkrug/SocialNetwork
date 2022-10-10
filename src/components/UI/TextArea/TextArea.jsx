import React from 'react';
import styles from "./TextArea.module.scss";

const TextArea = ({placeholder}) => {
    return (
        <form className={styles.post_form}>
            <textarea placeholder={placeholder}/>
        </form>
    );
}

export default TextArea;