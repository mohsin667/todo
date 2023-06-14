import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './reducers/todoSlice'
import initialLoad from './sagas'

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: {
        todos: todoSlice
    },
    middleware: [saga]
})
saga.run(initialLoad)
export default store;