import React from "react";
import {useDispatch} from "react-redux";
import {useInput} from "../../../hooks/useInput";
import "./Login.scss";

const Login = ({getUser, getFetchingError, fetchingError}) => {
    const loginEmail = useInput('');
    const loginPassword = useInput('');
    const dispatch = useDispatch();

    const loginRequest = (e) => {
        e.preventDefault()
        dispatch(getUser('login', getFetchingError, loginEmail.value, loginPassword.value,))
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