import {EDIT_TODO} from "./constants"

export const todoAction = (payload) => {
    return {
        type:'ADD_TODO',
        payload: payload
    }
}

export const editPopUpOpen = (id) => {
    return {
        type: 'EDIT_POPUP_OPEN',
        payload: id
    }
}

export const editPopUpClose = (id) => {
    return {
        type: 'EDIT_POPUP_CLOSE',
        payload: id
    }
}

export const editTodo = (payload) => {
    console.log(payload)
    return {
        type: EDIT_TODO,
        payload
    }
}