import React, {useState} from 'react'
import {editPopUpClose,editTodo} from "../actions/todoAction"
import {useDispatch,useSelector} from "react-redux"
function Edit({id}) {
  const state = useSelector(state => state.todos.todos[id])
  const dispatch = useDispatch()
  const [title,setTitle] = useState(state.title)
  const [description,setDescription] = useState(state.description)
  const [priority,setPriority] = useState(state.priority)
  const handleEdit = () => {
    let color = ""
    if(priority==="high"){
        color = "#f87171"
    }
    if(priority==="medium") {
        color = "#facc16"
    }
    if(priority==="low") {
        color = "#65cdaa"
    }
    dispatch(editTodo({...state,title,description,color,index:id}))
    dispatch(editPopUpClose(id))
  }
  return (
    <div className='absolute bg-white p-3 right-0 rounded-md top-[30px] shadow-md z-[99]'>
      <label htmlFor="edit mb-[15px]"> Edit Title
        <input type='text' className='border rounded-sm mb-5 border-slate-300 mt-1 py-1 px-2' value={title} onChange={(e) => setTitle(e.target.value) } id="edit" />
      </label>

      <label className="block mb-5">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Edit Priority
          </span>
          <select value={priority} onChange={(e)=> setPriority(e.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com">
              <option value="Select Priority">Select Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
          </select>
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
