import React from 'react';
import style from "./SearchForm.module.scss";

const SearchForm = ({styles}) => {
  return (
          <input className={style.searchForm} style={{...styles}} placeholder='Поиск'/>
  )
}

export default SearchForm;