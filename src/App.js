import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import FriendsList from "./components/FriendsList/FriendsList";
import Chat from "./components/Dialogs/Chat/Chat";
import "./App.scss";
import Auth from "./components/Auth/Auth";
import {useDispatch, useSelector} from "react-redux";
import {setLoginAction, setUserAction} from "./store/actions/UserActions";

const App = () => {
    const isLogin = useSelector(state => state.user.isLogin);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('user')) {
            dispatch(setUserAction(JSON.parse(localStorage.getItem('user'))))
            dispatch(setLoginAction(true))
        } else {
            dispatch(setLoginAction(false))
        }
    }, [])
    return (
        !isLogin ? <Auth/>
            :
            <BrowserRouter>
                <div className="app_wrapper">
                    <Header/>
                    <NavBar/>
                    <div className="app_wrapper_content">
                        <Routes>
                            <Route path="/dialogs" element={<Dialogs/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/friends" element={<FriendsList/>}/>
                            <Route path="/dialogs/:id" element={<Chat/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
    )
}

export default App;
