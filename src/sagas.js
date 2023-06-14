import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getTodoSuccess, getEditTodoSuccess, deleteTodoSuccess,addTodoSuccess, handleCheckedSuccess, } from './reducers/todoSlice'

function* initInitialLoad() {
  const todo = yield call(() => fetch('http://localhost:3001/todos'))
  const response = yield todo.json()
  yield put(getTodoSuccess(response))
}

function* initialLoad() {
  yield takeLatest('todo/getTodoFetch', initInitialLoad)
} 

function* addTodoSuccessCall(action) {
  const {title,description,priority,completed,color} = action.payload
  
  const todo = yield call(() => fetch(`http://localhost:3001/todos/`,{
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify({
      title,description,priority,completed,color
    })
  }))
  const response = yield todo.json()
  yield put(addTodoSuccess(response))
}

function* addTodoCall() {
  yield takeLatest('todo/addTodo', addTodoSuccessCall)
}

function* getEditTodoSuccessCall(action) {
  const {id,title,description,priority,color} = action.payload
  const todo = yield call(() => fetch(`http://localhost:3001/todos/${id}`,{
    method: 'PUT',
    headers: {'content-type':'application/json'},
    body: JSON.stringify({
      title,description,priority,color
    })
  }))
  const response = yield todo.json()
  yield put(getEditTodoSuccess(response))
}

function* editTodoCall() {
  yield takeLatest('todo/editTodo', getEditTodoSuccessCall)
}

function* handleCheckedSuccessCall(action) {
  const {id,target} = action.payload
  const todo = yield call(() => fetch(`http://localhost:3001/todos/${id}`,{
    method: 'PUT',
    headers: {'content-type':'application/json'},
    body: JSON.stringify({
      completed: target
    })
  }))
  const response = yield todo.json()
  yield put(handleCheckedSuccess(response))
}

function* handleCheckedCall() {
  yield takeLatest('todo/handleChecked', handleCheckedSuccessCall)
}

function* deleteTodoSuccessCall(action) {
  const id = action.payload
  yield call(()=> fetch(`http://localhost:3001/todos/${id}`,{ method: 'DELETE' }).then(res => console.log(res)))
  yield put(deleteTodoSuccess(id))
}

function* deleteTodoCall() {
  yield takeLatest('todo/deleteTodo', deleteTodoSuccessCall)
}

export default function* rootSaga() {
  yield all([initialLoad(), editTodoCall(), deleteTodoCall(), addTodoCall(), handleCheckedCall()]) 
}
