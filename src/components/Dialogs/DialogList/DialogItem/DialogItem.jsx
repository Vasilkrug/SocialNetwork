import React from 'react';
import style from "./DialogItem.module.scss";

const DialogItem = (props) => {
    return (
        <li className={style.dialog_item}>
            <div className={style.dialog_photo}>
                <img src="/images/animal.jpeg"/>
            </div>
            <div className={style.dialog}>
                <div className={style.dialog_title}>
                    <h2>Василий Кругловецкий</h2>
                </div>
                <div className={style.dialog_preview}>
                    <span>какое то сообщение блабалалалалабалалаs</span>
                </div>
            </div>
        </li>
    );
}

export default DialogItem;