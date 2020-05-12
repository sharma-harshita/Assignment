import * as actionTypes from "./actionTypes"

let id=0;

export const createTodo = (todo) =>{
    return{
        type:actionTypes.NEW_TODO,
        id:id++,
        todo:todo
    }
}

export const deleteTodo = (id)=>{
    return{
        type:actionTypes.DELETE_TODO,
        id:id
    }
}

export const completeTodo = (id)=>{
    return {
        type:actionTypes.COMPLETE_TODO,
        id:id
    }
}