import React from 'react';
import style from './Dialogs.module.css'

const Dialogs = () => {
return (
    <div className={style.dialogs_content}>
        <div className={style.dialogs}>
            <form className={style.form}>
                <input placeholder='Search dialog'/>
            </form>
            <hr/>
        <ul>
            <li>Василий Кругловецкий</li>
            <li>Владимир Путин</li>
            <li>Дмитрий Медведев</li>
            <li>Джо Байден</li>
        </ul>
        </div>
        <div className={style.chat_item}>
            <div className={style.dialog}>Привет</div>
            <div className={style.dialog}>Как дела?</div>
            <div className={style.dialog}>Что делаешь</div>
            <div className={style.dialog}>КАк дела?</div>
            <div className={style.dialog}>Все супер</div>
            <div className={style.dialog}>Ну и хорошо</div>
        </div>
    </div>
)
}

export default Dialogs;