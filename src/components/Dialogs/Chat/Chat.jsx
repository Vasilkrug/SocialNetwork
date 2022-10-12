import React from 'react';
import style from "./Chat.module.scss";
import TextArea from "../../UI/TextArea/TextArea";

const Chat = ({activeDialog}) => {
    console.log(activeDialog.id)
    return (
        <div className={style.chat}>
            <div className={style.chat_title}>
                <p>{activeDialog.name}</p>
                <img src={activeDialog.path} alt="user-icon"/>
            </div>
            <hr/>
            <ul className={style.messages_list}>
                    <li className={style.messages_item}><p>{activeDialog.message}</p></li>
            </ul>
            <hr/>
            <div className={style.chat_input}>
                <TextArea placeholder="Напишите сообщение"/>
            </div>
        </div>
    );
}

export default Chat;