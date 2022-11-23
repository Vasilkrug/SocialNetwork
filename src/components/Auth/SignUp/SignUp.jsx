import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useInput} from "../../../hooks/useInput";
import axios from "axios";
import {setLoginAction, setUserAction} from "../../../store/actions/UserActions";
import {setToLocalStorage} from "../../../utilits/utilits";
import "./SignUp.scss";

const SignUp = () => {
    const userName = useInput('', {isEmpty: ''});
    const userEmail = useInput('', {isEmail: ''});
    const userPassword = useInput('', {isEmpty: '', minLength: 8});
    const repeatUserPassword = useInput('');
    const [fetchingError, setFetchingError] = useState('');

    const dispatch = useDispatch()

    const isFormValid = () => {
        return userName.inputValid &&
            userEmail.inputValid &&
            userPassword.inputValid &&
            userPassword.value === repeatUserPassword.value
    }

    const registrationSubmit = (e) => {
        e.preventDefault()
        isFormValid() ?
            registrationRequest()
            : alert('Заполните поля правильно')
    }

    const getFetchingError = (error) => {
        switch (error) {
            case 'User already exists':
                setFetchingError('Пользователь с такой почтой уже существует')
                break;
            case '':
                setFetchingError('')
        }
    }

    const registrationRequest = async () => {
        try {
            const request = await axios.get(`http://localhost:3001/user/create?email=${userEmail.value}&password=${userPassword.value}&name=${userName.value}`)
            const res = await request
            getFetchingError('')
            setToLocalStorage('user', res.data.message.user)
            dispatch(setUserAction(res.data.message.user))
            dispatch(setLoginAction(true))
        } catch (e) {
            getFetchingError(e.response.data.message)
        }
    }

    return (
        <div className="signup">
            <form>
                <label htmlFor="chk" aria-hidden="true">Регистрация</label>
                {userName.isDirty && userName.emptyFieldError ? <span>{userName.emptyFieldError}</span> : ''}
                <input
                    onChange={userName.onChange}
                    onBlur={userName.onBlur}
                    value={userName.value}
                    type="text"
                    name="UserName"
                    placeholder="Имя пользователя"
                    required=""/>
                {userEmail.isDirty && userEmail.emailError ? <span>{userEmail.emailError}</span> : ''}
                <input
                    onChange={userEmail.onChange}
                    onBlur={userEmail.onBlur}
                    value={userEmail.value}
                    type="email"
                    name="UserEmail"
                    placeholder="Почта"
                    required=""/>
                {userPassword.isDirty && userPassword.minLengthError ? <span>{userPassword.minLengthError}</span> : ''}
                <input
                    onChange={userPassword.onChange}
                    onBlur={userPassword.onBlur}
                    value={userPassword.value}
                    type="password"
                    name="pswd"
                    placeholder="Пароль"
                    required=""/>
                {repeatUserPassword.isDirty && userPassword.value !== repeatUserPassword.value ?
                    <span>Пароли не совпадают</span> : ''}
                <input
                    onChange={repeatUserPassword.onChange}
                    onBlur={repeatUserPassword.onBlur}
                    value={repeatUserPassword.value}
                    type="password"
                    name="RepeatPassword"
                    placeholder="Повторите пароль"
                    required=""/>
                {<span>{fetchingError}</span> || ''}
                <button onClick={(e) => registrationSubmit(e)}>Создать аккаунт</button>
            </form>
        </div>
    );
};

export default SignUp;