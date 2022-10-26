import {useLayoutEffect, useState} from "react";

export const switchTheme = () => {
    const [theme, setTheme] = useState('light');

    useLayoutEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme)
    },[theme])
    return {theme,setTheme}
}