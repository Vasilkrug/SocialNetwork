import React, {useEffect, useState} from 'react';
import "./SignUp.scss"
import {useInput} from "../../../hooks/useInput";

const SignUp = () => {
    const userName = useInput('', {isEmpty: ''});
    const userEmail = useInput('', {isEmail: ''});
    const userPassword = useInput('', {isEmpty: '', minLength: 8});
    const repeatUserPassword = useInput('');

    const handleFormValid = () => {
        return userName.inputValid &&
            userEmail.inputValid &&
            userPassword.inputValid &&
            userPassword.value === repeatUserPassword.value
    }

    const registrationSubmit = (e) => {
        e.preventDefault()
        handleFormValid() ?
            alert(`Добро пожаловать, ${userName.value}`)
            : alert('Заполните поля правильно')
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
                <button onClick={(e) => registrationSubmit(e)}>Создать аккаунт</button>
            </form>
        </div>
    );
};

export default SignUp;