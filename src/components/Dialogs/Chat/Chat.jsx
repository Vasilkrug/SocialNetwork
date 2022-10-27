import React from 'react';
import TextArea from "../../UI/TextArea/TextArea";
import style from "./Chat.module.scss";

const Chat = ({activeDialog}) => {
    return (
        <div className={style.chat}>
            <div className={style.chat_title}>
                <p>{activeDialog.name}</p>
                <img src={`${activeDialog.img}`} alt="user-icon"/>
            </div>
            <ul className={style.messages_list}>
                <li className={style.messages_item}><p>{activeDialog.message}</p></li>
            </ul>
            <div className={style.chat_input}>
                <TextArea placeholder="Напишите сообщение"/>
            </div>
        </div>
    );
}

export default Chat;