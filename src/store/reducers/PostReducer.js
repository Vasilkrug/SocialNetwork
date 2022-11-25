import {ADD_POST, DELETE_POST, LIKES_TOGGLE} from "../actionsTypes/PostActionsTypes";

const initialState = {
    posts: [],
}

export const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [{message: action.text, id: Date.now(), likes: []}, ...state.posts]}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.id)}
        case LIKES_TOGGLE:
            return {
                ...state, posts: state.posts.map(post => {
                    if (post.id === action.postId) {
                        return {
                            ...post,
                            likes: post.likes.includes(action.userId) ? post.likes.filter(id => id !== action.userId)
                                : [...post.likes,action.userId]
                        }
                    }
                    return post
                })
            }
        default:
            return state;
    }
}