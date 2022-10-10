import React from 'react';
import style from "./Chat.module.scss";

const Chat = ({message, id}) => {
    return (
        <div className={style.chat_list}>
            <div className={style.chat_item}>{message}</div>
        </div>
    );
}

export default Chat;