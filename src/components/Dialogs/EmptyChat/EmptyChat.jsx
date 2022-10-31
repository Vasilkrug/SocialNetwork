import React from 'react';
import style from './EmptyChat.module.scss'

const EmptyChat = (props) => {
    return (
        <div className={style.empty_chat_content}>
            <div className={style.image}>
                <img src="/images/icons/chat.png" alt="chat-icon"/>
            </div>
            <div className={style.description}>
                <p>Выберите чат</p>
            </div>
        </div>
    );
}

export default EmptyChat;