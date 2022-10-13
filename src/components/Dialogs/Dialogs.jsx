import React, {useState} from 'react';
import style from './Dialogs.module.scss'
import Chat from "./Chat/Chat";
import SearchForm from "../UI/SearchForm/SearchForm"
import EmptyChat from "./EmptyChat/EmptyChat";
import DialogsList from "./DialogsList/DialogsList";

const Dialogs = () => {
    const [dialogs, setDialogs] = useState([
        {
            name: "Дмитрий Медведев",
            path: "/images/avatar.png",
            id: 1,
            message: 'wgergwergrhreh'
        },
        {
            name: "Владимир Путин",
            path: "/images/animal.jpeg",
            id: 2,
            message: 'awegwegewg'
        },
    ])
    const [activeDialog, setActiveDialog] = useState({});

    const findId = (id) => {
        const newObj = dialogs.find(city => city.id === id)
        setActiveDialog(Object.assign({}, activeDialog, newObj))
    }
    return (
        <div className={style.dialogs_content}>
            <div className={style.dialogs}>
                <SearchForm/>
                <hr/>
                <DialogsList dialogs={dialogs} findId={findId}/>
            </div>
            {Object.keys(activeDialog).length ? <Chat activeDialog={activeDialog}/> : <EmptyChat/>}
        </div>
    )
}

export default Dialogs;