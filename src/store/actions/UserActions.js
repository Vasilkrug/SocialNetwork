import {LOGIN, GET_USER} from "../actionsTypes/UserActionsTypes";

export const setLoginAction = (isLogin) => ({type: LOGIN, isLogin})
export const setUserAction = (user) => ({type: GET_USER, user})