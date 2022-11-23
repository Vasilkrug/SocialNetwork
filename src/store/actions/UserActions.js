import {LOGIN, SET_USER} from "../actionsTypes/UserActionsTypes";

export const setLoginAction = (isLogin) => ({type:LOGIN,isLogin})
export const setUserAction = (user) => ({type:SET_USER,user})