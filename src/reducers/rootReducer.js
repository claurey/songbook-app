import { combineReducers } from "redux";

import authReducer from "./authReducer";
import songsReducer from "./songsReducer";



export const rootReducer = combineReducers({
    auth:authReducer,
    songs:songsReducer
})
