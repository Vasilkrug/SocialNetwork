import React, {useState} from "react";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import "./Auth.scss";
import {getUser} from "../../store/asyncActions/userAction";

const Auth = () => {
    const [fetchingError, setFetchingError] = useState('');

    const getFetchingError = (error) => {
        switch (error) {
            case 'User already exists':
                setFetchingError('Пользователь с такой почтой уже существует')
                break;
            case '':
                setFetchingError('')
                break;
            case 'Invalid data':
                setFetchingError('Неверная почта или пароль')
                break;
        }
    }
    return (
        <div className="auth">
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true"/>
                <SignUp getUser={getUser} fetchingError={fetchingError} getFetchingError={getFetchingError}/>
                <Login getUser={getUser} fetchingError={fetchingError} getFetchingError={getFetchingError}/>
            </div>
        </div>
    );
};

export default Auth;