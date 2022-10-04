import React, {useState} from 'react';
import style from './Dialogs.module.scss'
import DialogForm from "./DialogForm/DialogForm";
import DialogItem from "./DialogItem/DialogItem";
import Chat from "./Chat/Chat";

const Dialogs = () => {
    const [dialog, setDialog] = useState([
        {
            name: "Василий Кругловецкий",
            path: "/images/animal.jpeg",
            message: "какое то сообщение блабалалалалабалалаs",
            id: 1
        },
        {
            name: "Владимир Путин",
            path: "/images/animal.jpeg",
            message: "Здарова",
            id: 1
        }
    ])
const [messages,seMessages] = useState([
    {id:1,text:'Привет как дела?'}
])
    return (
        <div className={style.dialogs_content}>
            <div className={style.dialogs}>
                <DialogForm/>
                <hr/>
                <ul className={style.dialog_list}>
                    {dialog.map(item => {
                        return (
                            <DialogItem
                                pathToImage={item.path}
                                user={item.name}
                                dialogPreview={item.message}
                                id={item.id}
                            />
                        )
                    })}
                </ul>
            </div>
            {messages.map(item => <Chat message={item.text} id={item.id}/>)}
        </div>
    )
}

export default Dialogs;