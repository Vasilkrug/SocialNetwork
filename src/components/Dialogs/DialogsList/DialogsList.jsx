import React from 'react';
import style from "./DialogList.module.scss";
import DialogItem from "./DialogItem/DialogItem";

const DialogsList = ({dialogs, findId}) => {
    return (
        <ul className={style.dialog_list}>
            {dialogs.map(item => {
                return (
                    <DialogItem
                        pathToImage={item.img}
                        user={item.name}
                        dialogPreview={item.message}
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