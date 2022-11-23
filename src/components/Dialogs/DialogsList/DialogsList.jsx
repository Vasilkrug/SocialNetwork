import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import style from "./DialogList.module.scss";

const DialogsList = ({dialogs, findId}) => {
    return (
        <ul className={style.dialog_list}>
            {dialogs.map(item => {
                return (
                    <DialogItem
                        pathToImage={item.img}
                        user={item.name}
                        dialogPreview={item.messages[0]}
                        id={item.id}
                        findId={findId}
                        key={item.id}
                    />
                )
            })}
        </ul>
    );
};

export default DialogsList;