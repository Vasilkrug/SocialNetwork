import React, {useState} from 'react';
import style from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Chat from "./Chat/Chat";
import SearchForm from "../UI/SearchForm/SearchForm"
import EmptyChat from "./EmptyChat/EmptyChat";

const Dialogs = () => {
    const [dialogs,setDialogs] = useState([
        {
            name: "Дмитрий Медведев",
            path: "/images/avatar.png",
            message: "какое то сообщение блабалалалалабалалаssrher",
            id: 1
        },
        {
            name: "Владимир Путин",
            path: "/images/animal.jpeg",
            message: "Здарова",
            id: 2
        },
    ])
const [activeDialog,setActiveDialog] = useState({});

const findId = (id) => {
    const newObj = dialogs.find(city => city.id ===  id )
    setActiveDialog(Object.assign({},activeDialog,newObj))
}
console.log(activeDialog)
    return (
        <div className={style.dialogs_content}>
            <div className={style.dialogs}>
                <SearchForm/>
                <hr/>
                <ul className={style.dialog_list}>
                    {dialogs.map(item => {
                        return (
                            <DialogItem
                                pathToImage={item.path}
                                user={item.name}
                                dialogPreview={item.message}
                                id={item.id}
                                findId={findId}
                                key={item.id}
                            />
                        )
                    })}
                </ul>
            </div>
            {Object.keys(activeDialog).length ? <Chat activeDialog={activeDialog}/> : <EmptyChat/>}
        </div>
    )
}

export default Dialogs;