import React from 'react';
import style from './Dialogs.module.scss'
import DialogForm from "./DialogForm/DialogForm";

const Dialogs = () => {
    return (
        <div className={style.dialogs_content}>
            <div className={style.dialogs}>
            <DialogForm/>
                <hr/>
                <ul className={style.dialog_list}>
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

                </ul>
            </div>
            <div className={style.chat_list}>
                <div className={style.chat_item}>Привет</div>
            </div>
        </div>
)
}

export default Dialogs;