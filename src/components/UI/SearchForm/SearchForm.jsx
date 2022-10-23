import React from 'react';
import style from "./SearchForm.module.scss";

const SearchForm = ({placeholder,styles}) => {
    return (
        <input className={style.searchForm} style={{...styles}} placeholder={placeholder}/>
    )
}

export default SearchForm;