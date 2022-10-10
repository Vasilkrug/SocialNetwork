import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import state from "./redux/state";

const App = () => {
    return (
        <BrowserRouter>
        <div className="app_wrapper">
            <Header/>
            <NavBar/>
            <div className="app_wrapper_content">
                <Routes>
                <Route path="/dialogs" element={<Dialogs state={state.messagesPage}/>}/>
                <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default App;
