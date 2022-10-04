import React from 'react';
import style from "./DialogItem.module.scss";

const DialogItem = ({pathToImage,user,dialogPreview,id}) => {
    return (
        <li className={style.dialog_item}>
            <div className={style.dialog_photo}>
                <img src={pathToImage}/>
            </div>
            <div className={style.dialog}>
                <div className={style.dialog_title}>
                    <h2>{user}</h2>
                </div>
                <div className={style.dialog_preview}>
                    <span>{dialogPreview}</span>
                </div>
            </div>
        </li>
    );
}

export default DialogItem;