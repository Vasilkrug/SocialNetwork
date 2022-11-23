import {createStore, combineReducers} from "redux";
import {PostReducer} from "./reducers/PostReducer";
import {UserReducer} from "./reducers/UserReducer";

const rootReducer = combineReducers({
    posts: PostReducer,
    user: UserReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())