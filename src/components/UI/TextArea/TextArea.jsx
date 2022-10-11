import React from 'react';
import styles from "./TextArea.module.scss";

const TextArea = (props) => {
    return (
            <textarea className={styles.textArea} {...props}/>
    );
}

export default TextArea;