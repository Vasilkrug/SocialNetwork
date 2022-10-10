import React from 'react';
import style from "./Chat.module.scss";
import TextArea from "../../UI/TextArea/TextArea";

const Chat = ({message, id}) => {
    return (
        <div className={style.chat_list}>
            <div className={style.chat_title}>
                <p>Собеседник</p>
                <img src="/images/animal.jpeg"/>
            </div>
            <hr/>
            <div className={style.chat_item}>{message}</div>
            <hr/>
            <div className={style.chat_input}>
                <TextArea placeholder={"Напишите сообщение"}/>
            </div>
        </div>
    );
}

export default Chat;