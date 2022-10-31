import React from "react";
import "./Auth.scss";

const Auth = () => {
    return (
       <div className="auth">
           <div className="main">
               <input type="checkbox" id="chk" aria-hidden="true"/>
               <div className="signup">
                   <form>
                       <label htmlFor="chk" aria-hidden="true">Регистрация</label>
                       <input type="text" name="txt" placeholder="Имя пользователя" required=""/>
                       <input type="email" name="email" placeholder="Почта" required=""/>
                       <input type="password" name="pswd" placeholder="Пароль" required=""/>
                       <button>Создать аккаунт</button>
                   </form>
               </div>
               <div className="login">
                   <form>
                       <label htmlFor="chk" aria-hidden="true">Войти</label>
                       <input type="email" name="email" placeholder="Почта" required=""/>
                       <input type="password" name="pswd" placeholder="Пароль" required=""/>
                       <button>Войти</button>
                   </form>
               </div>
           </div>
       </div>
    );
};

export default Auth;