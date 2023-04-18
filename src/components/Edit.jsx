import React, {useState} from 'react'
import {editPopUpClose,editTodo} from "../actions/todoAction"
import {useDispatch,useSelector} from "react-redux"
function Edit({id}) {
  const state = useSelector(state => state.todos[id])
  const dispatch = useDispatch()
  const [title,setTitle] = useState(state.title)
  const [description,setDescription] = useState(state.description)
  const handleEdit = () => {
    dispatch(editTodo({...state,title,description,index:id}))
    dispatch(editPopUpClose(id))
  }
  console.log(state)
  return (
    <div className='absolute bg-white p-3 right-0 rounded-md top-[30px] shadow-md'>
      <label htmlFor="edit mb-[15px]"> Edit Title
        <input type='text' className='border rounded-sm mb-5 border-slate-300 mt-1 py-1 px-2' value={title} onChange={(e) => setTitle(e.target.value) } id="edit" />
      </label>

      <label htmlFor="edit"> Edit Description
        <textarea className='border border-slate-300 rounded-sm mb-5 mt-1 py-1 px-2' value={description} onChange={(e) => setDescription(e.target.value) } id="edit" />
      </label>

      <button className='bg-blue-400 hover:bg-blue-600 text-white px-3 py-2 rounded-md mr-2' onClick={handleEdit}>Change</button>
      <button className='bg-slate-100 hover:bg-slate-600 hover:text-[#fff] px-3 py-2 rounded-md' onClick={()=> dispatch(editPopUpClose(id))}>Cancel</button>
    </div>
  )
}

export default Edit
