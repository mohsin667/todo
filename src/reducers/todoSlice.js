import { createSlice } from '@reduxjs/toolkit'
export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading:false,
        todoState: [],
        filter: "all"
    },
    reducers: {
        addTodo: (state,action) => {
            console.log(action.payload)
            state.isLoading = true
        },
        addTodoSuccess: (state,action) => {
            state.todoState.push(action.payload)
            state.isLoading = false
        },
        addTodoFailure: (state) => {
            state.isLoading = true
        },
        getTodoFetch: (state) => {
            state.isLoading = true
        },
        getTodoSuccess: (state,action) => {
            state.todoState = action.payload
            state.isLoading = false
        },
        getTodoFailure: (state) => {
            state.isLoading = false
        },
        editTodo: (state,action) => {
            state.isLoading = true 
            console.log(action)
        },
        getEditTodoSuccess: (state,action) => {
            state.todoState.map(item => {
                if(item._id == action.payload._id) {
                    item.title = action.payload.title;
                    item.priority = action.payload.priority
                    item.description = action.payload.description
                    item.color = action.payload.color
                }
            })
            state.isLoading = false
        },
        deleteTodo: (state) => {
            state.isLoading = true
        },
        deleteTodoSuccess: (state,action) => {
            const id = action.payload
            const data =  state.todoState.filter(item => item._id !== id)
            state.todoState = data;
            state.isLoading = false
        },
        handleChecked: (state,action) => {
            const {id,target} = action.payload
            const item = state.todoState.find((todo)=> todo._id === id)
            if(item) {
                item.completed = target
            }
            state.isLoading = true
        },
        handleCheckedSuccess: (state) => {
            state.isLoading = false
        },
        filter: (state,action) => {
            state.filter = action.payload
        }
    }
})

export const {getTodoFetch, 
    getTodoSuccess, 
    getTodoFailure,
    editTodo,
    getEditTodoSuccess,
    deleteTodo,
    deleteTodoSuccess,
    addTodo,
    addTodoSuccess,
    addTodoFailure,
    handleChecked,
    handleCheckedSuccess,
    filter
} = todoSlice.actions;

export default todoSlice.reducer
