import {ADD_TODO, EDIT_POPUP_CLOSE, EDIT_POPUP_OPEN, EDIT_TODO,TASK_COMPLETED,FILTER , DELETE} from "./constants"

export const todoAction = (payload) => {
    return {
        type: ADD_TODO,
        payload: payload
    }
}

export const editPopUpOpen = (id) => {
    return {
        type: EDIT_POPUP_OPEN,
        payload: id
    }
}


export const editTodo = (payload) => {
    return {
        type: EDIT_TODO,
        payload
    }
}

export const taskCompleted = (payload) => {
    return {
        type: TASK_COMPLETED,
        payload
    }
}

export const filterAction = (payload) => {
    return {
        type: FILTER,
        payload
    }
}

export const deleteTodo = (payload) => {
    console.log(payload)
    return {
        type: DELETE,
        payload
    }
}
