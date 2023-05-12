import { combineReducers } from "redux";
import todoReducer from "./todoReducer"
import dialogReducer from "./dialogReducer";

const rootReducer = combineReducers({
    todos: todoReducer,
    dialog: dialogReducer
})

export default rootReducer