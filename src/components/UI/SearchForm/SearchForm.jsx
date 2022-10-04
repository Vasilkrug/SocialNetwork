import React from 'react';
import style from "./SearchForm.module.scss";

const SearchForm = ({styles}) => {
  return (
      <form className={style.form} style={{...styles}}>
          <input placeholder='Поиск'/>
      </form>
  )
}

export default SearchForm;