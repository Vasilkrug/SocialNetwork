import React, {useState} from 'react';
import style from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Chat from "./Chat/Chat";
import SearchForm from "../UI/SearchForm/SearchForm"

const Dialogs = ({state}) => {

    return (
        <div className={style.dialogs_content}>
            <div className={style.dialogs}>
                <SearchForm/>
                <hr/>
                <ul className={style.dialog_list}>
                    {state.dialogs.map(item => {
                        return (
                            <DialogItem
                                pathToImage={item.path}
                                user={item.name}
                                dialogPreview={item.message}
                                id={item.id}
                                key={item.id}
                            />
                        )
                    })}
                </ul>
            </div>
            <Chat message="Hi" id={1}/>
        </div>
    )
}

export default Dialogs;