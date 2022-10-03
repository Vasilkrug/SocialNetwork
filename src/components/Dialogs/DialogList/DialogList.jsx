import React from 'react';
import style from "./DialogList.module.scss";
import DialogItem from "./DialogItem/DialogItem";

const DialogList = (props) => {
    return (
        <ul className={style.dialog_list}>
            <DialogItem/>
        </ul>
    );
}

export default DialogList;