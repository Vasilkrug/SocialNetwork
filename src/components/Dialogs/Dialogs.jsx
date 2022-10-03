import React from 'react';
import style from './Dialogs.module.scss'
import DialogForm from "./DialogForm/DialogForm";
import DialogList from "./DialogList/DialogList";

const Dialogs = () => {
    return (
        <div className={style.dialogs_content}>
            <div className={style.dialogs}>
            <DialogForm/>
                <hr/>
                <DialogList/>
            </div>
            <div className={style.chat_list}>
                <div className={style.chat_item}>Привет</div>
            </div>
        </div>
)
}

export default Dialogs;