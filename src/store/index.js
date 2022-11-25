import {createStore, combineReducers, applyMiddleware} from "redux";
import {PostReducer} from "./reducers/PostReducer";
import {UserReducer} from "./reducers/UserReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    posts: PostReducer,
    user: UserReducer,
})

export const store = createStore(rootReducer,
    applyMiddleware(thunk),)