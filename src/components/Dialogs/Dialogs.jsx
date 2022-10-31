import React, {useState} from 'react';
import Chat from "./Chat/Chat";
import SearchForm from "../UI/SearchForm/SearchForm";
import EmptyChat from "./EmptyChat/EmptyChat";
import DialogsList from "./DialogsList/DialogsList";
import style from "./Dialogs.module.scss";

const Dialogs = () => {
    const [dialogs, setDialogs] = useState([
        {
            name: "Дмитрий Медведев",
            img: "/images/avatar.png",
            id: 1,
            messages: ['hello','как дела','wgwgwgwg','ggggggeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefwfwfwfwfw']
        },
        {
            name: "Владимир Путин",
            img: "/images/animal.jpeg",
            id: 2,
            messages: ['awegwegewg', 'erhyerh hhhh']
        },
    ])
    const [activeDialog, setActiveDialog] = useState({});

    const findId = (id) => {
        const newObj = dialogs.find(city => city.id === id)
        setActiveDialog({...activeDialog, ...newObj})
    }
    return (
        <div className={style.dialogs_content}>
            <div className={style.dialogs}>
                <SearchForm placeholder={'Поиск'}/>
                <DialogsList dialogs={dialogs} findId={findId}/>
            </div>
            {Object.keys(activeDialog).length ? <Chat activeDialog={activeDialog}/> : <EmptyChat/>}
        </div>
    )
}

export default Dialogs;