import React from 'react';
import {useInput} from "../../../hooks/useInput";
import "./Login.scss"
const Login = () => {
    const loginEmail = useInput('');
    const loginPassword = useInput('');

    return (
        <div className="login">
            <form>
                <label htmlFor="chk" aria-hidden="true">Войти</label>
                <input
                    onChange={(e) => loginEmail.onChange(e)}
                    value={loginEmail.value}
                    type="email"
                    name="email"
                    placeholder="Почта"
                    required=""/>
                <input
                    onChange={(e) => loginPassword.onChange(e)}
                    value={loginPassword.value}
                    type="password"
                    name="pswd"
                    placeholder="Пароль"
                    required=""/>
                <button>Войти</button>
            </form>
        </div>
    );
};

export default Login;