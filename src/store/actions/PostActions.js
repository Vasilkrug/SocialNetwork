import {ADD_POST, DELETE_POST, LIKES_TOGGLE} from "../actionsTypes/PostActionsTypes";

export const addPostAction = (text) => ({type: ADD_POST, text});

export const deletePostAction = (id) => ({type: DELETE_POST, id});

export const toggleLikeAction = (postId,userId) => ({type: LIKES_TOGGLE,postId,userId});

