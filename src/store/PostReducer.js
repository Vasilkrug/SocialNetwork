const initialState = {
    posts: [],
    postsLikeCounter: 0,
}

export const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {...state, posts:[{message: action.payload, id: Date.now()},...state.posts]}
        case 'DELETE_POST':
            return {...state, posts: state.posts.filter(post => post.id !== action.payload)}
        case 'ADD_LIKE':
            return;
        default:
            return state;
    }
}