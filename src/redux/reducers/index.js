import { combineReducers } from "redux";
import todoList from './todoReducer';

export default combineReducers({
    todoList:todoList
})