import * as actionTypes from '../actions/actionTypes'

export default (state=[], action)=>{
    switch(action.type){
        case actionTypes.NEW_TODO:
            return [
                ...state,
                {
                    id:action.id,
                    name:action.todo,
                    completed:false
                }
            ];

        case actionTypes.DELETE_TODO:
            return state.filter((data, i) => i !== action.id);

        case actionTypes.COMPLETE_TODO:
            return state.map(value=>(value.id===action.id)?{...value, completed:!value.completed}:value)

        default:
            return state
    }
}