import {createStore,combineReducers} from "redux";
import {PostReducer} from "./PostReducer";

const rootReducer = combineReducers({
posts:PostReducer
})

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())