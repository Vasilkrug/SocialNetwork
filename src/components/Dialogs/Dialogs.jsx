import React from 'react';
import style from './Dialogs.module.scss'

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

        </ul>
        </div>
        <div className={style.chat_list}>
            <div className={style.chat_item}>Привет</div>
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