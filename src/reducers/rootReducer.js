import { combineReducers } from "redux";

import authReducer from "./authReducer";
import songsReducer from "./songsReducer";
import uiReducer from "./uiReducer";



export const rootReducer = combineReducers({
    auth:authReducer,
    songs:songsReducer,
    ui:uiReducer
})
