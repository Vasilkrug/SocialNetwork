import {LOGIN, GET_USER} from "../actionsTypes/UserActionsTypes";

const initialState = {
    isLogin: false,
    user: null
}
export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, isLogin: action.isLogin};
        case GET_USER:
            return {...state, user: action.user}
        default:
            return state;
    }
}