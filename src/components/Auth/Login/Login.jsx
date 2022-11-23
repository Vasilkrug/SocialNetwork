import React, {useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import {useInput} from "../../../hooks/useInput";
import {setLoginAction, setUserAction} from "../../../store/actions/UserActions";
import {setToLocalStorage} from "../../../utilits/utilits";
import "./Login.scss";

const Login = () => {
    const loginEmail = useInput('');
    const loginPassword = useInput('');
    const [fetchingError, setFetchingError] = useState('');
    const dispatch = useDispatch();

    const loginRequest = async (e) => {
        e.preventDefault()
        try {
            const request = await axios.get(`http://localhost:3001/user/login?email=${loginEmail.value}&password=${loginPassword.value}`)
            const response = await request
            setFetchingError('')
            setToLocalStorage('user', response.data.message.user)
            dispatch(setUserAction(response.data.message.user))
            dispatch(setLoginAction(true))
        } catch (e) {
            setFetchingError("Неверная почта или пароль")
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