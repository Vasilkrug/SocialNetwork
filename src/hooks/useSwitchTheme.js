import {useLayoutEffect, useState} from "react";

export const useSwitchTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useLayoutEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])
    return {theme, setTheme}
}