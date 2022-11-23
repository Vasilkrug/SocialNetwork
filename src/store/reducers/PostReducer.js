import {ADD_POST, DELETE_POST, LIKES_TOGGLE, INCREMENT, DECREMENT} from "../actionsTypes/PostActionsTypes";

const initialState = {
    posts: [],
    postsLikeCounter: 0,
    isLike: false,
}

export const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [{message: action.text, id: Date.now()}, ...state.posts]}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.id)}
        case LIKES_TOGGLE:
             return {...state,isLike: !state.isLike}
        case INCREMENT:
            return {...state,postsLikeCounter: state.postsLikeCounter + 1}
        case DECREMENT:
            return {...state,postsLikeCounter: state.postsLikeCounter - 1}
        default:
            return state;
    }
}