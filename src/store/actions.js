import {ADD_POST,DELETE_POST, LIKES_TOGGLE, INCREMENT, DECREMENT} from "./actionsTypes";

export const addPostAction = (text) => ({type:ADD_POST, text});

export const deletePostAction = (id) => ({type:DELETE_POST, id});

export const toggleLikeAction = () => ({type:LIKES_TOGGLE});

export const incrementAction = () => ({type:INCREMENT});

export const decrementAction = () => ({type:DECREMENT});
