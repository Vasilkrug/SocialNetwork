import React, {useEffect, useState} from 'react';
import {useInput} from "../../../hooks/useInput";
import "./Login.scss"
import axios from "axios";

const Login = () => {
    const loginEmail = useInput('');
    const loginPassword = useInput('');
    const [fetchingError, setFetchingError] = useState('');

    const loginRequest = async () => {
        try {
            const request = await axios.get(`http://localhost:3001/user/login?email=${loginEmail.value}&password=${loginPassword.value}`)
            const response = await request
            setFetchingError('')
        } catch (e) {
            setFetchingError('Неверная почта или пароль')
        }
    }

    return (
        <div className="login">
            <form>
                <label htmlFor="chk" aria-hidden="true">Войти</label>
                <input
                    onChange={(e) => loginEmail.onChange(e)}
                    onBlur={loginEmail.onBlur}
                    value={loginEmail.value}
                    type="email"
                    name="email"
                    placeholder="Почта"
                    required=""/>
                <input
                    onChange={(e) => loginPassword.onChange(e)}
                    onBlur={loginPassword.onBlur}
                    value={loginPassword.value}
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    required=""/>
                {fetchingError && <span>{fetchingError}</span>}
                <button onClick={(e) => loginRequest(e)}>Войти</button>
            </form>
        </div>
    );
};

export default Login;