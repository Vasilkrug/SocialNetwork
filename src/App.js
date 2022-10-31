import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import FriendsList from "./components/FriendsList/FriendsList";
import Chat from "./components/Dialogs/Chat/Chat";
import "./App.scss";
import Auth from "./components/Auth/Auth";

const App = () => {
    return (
        <Auth/>
        // <BrowserRouter>
        //     <div className="app_wrapper">
        //         <Header/>
        //         <NavBar/>
        //         <div className="app_wrapper_content">
        //             <Routes>
        //                 <Route path="/dialogs" element={<Dialogs/>}/>
        //                 <Route path="/profile" element={<Profile/>}/>
        //                 <Route path="/friends" element={<FriendsList/>}/>
        //                 <Route path="/dialogs/:id" element={<Chat/>}/>
        //             </Routes>
        //         </div>
        //     </div>
        // </BrowserRouter>

    )
}

export default App;
