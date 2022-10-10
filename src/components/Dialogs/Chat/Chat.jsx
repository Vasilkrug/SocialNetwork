import React from 'react';
import style from "./Chat.module.scss";
import TextArea from "../../UI/TextArea/TextArea";

const Chat = ({message, id}) => {
    return (
        <div className={style.chat}>
            <div className={style.chat_title}>
                <p>Собеседник</p>
                <img src="/images/animal.jpeg"/>
            </div>
            <hr/>
            <ul className={style.messages_list}>
                    <li className={style.messages_item}><p>Привет, ну как дела?чем занимаешься?</p></li>
            </ul>
            <hr/>
            <div className={style.chat_input}>
                <TextArea placeholder={"Напишите сообщение"}/>
            </div>
        </div>
    );
}

export default Chat;