import React from 'react';
import style from "./DialogForm.module.scss";

const DialogForm = () => {
  return (
      <form className={style.form}>
          <input placeholder='Search dialog'/>
      </form>
  )
}

export default DialogForm;