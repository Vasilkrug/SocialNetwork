import React from "react";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import "./Auth.scss";

const Auth = () => {

    return (
        <div className="auth">
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true"/>
                <SignUp/>
                <Login/>
            </div>
        </div>
    );
};

export default Auth;