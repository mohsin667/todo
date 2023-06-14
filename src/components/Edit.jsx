import React, {useState} from 'react'
import { editTodo } from '../reducers/todoSlice';
import {useDispatch,useSelector} from "react-redux"
function Edit({selectedData,setPopUpIndex}) {
  const state = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [title,setTitle] = useState(selectedData[0].title)
  const [priority,setPriority] = useState(selectedData[0].priority)
  const [description,setDescription] = useState(selectedData[0].description)
  const selectPriority = ["high","medium","low"]

  const handleEdit = () => {
    let color = "fff"
    if(priority==="high"){
        color = "#f87171"
    }
    if(priority==="medium") {
        color = "#facc16"
    }
    if(priority==="low") {
        color = "#65cdaa"
    }
    const payload = {
      id: selectedData[0]._id,
      title,
      priority,
      description,
      color
    }
    dispatch(editTodo(payload))
    setPopUpIndex(null)
  }

  return (
    <div className='absolute bg-white p-3 right-0 rounded-md top-[30px] shadow-md z-[99]'>
      <label htmlFor="edit" className='mb-[15px]'> Edit Title
        <input value={title} type='text' onChange={(e) => setTitle(e.target.value)} className='border rounded-sm mb-5 border-slate-300 mt-1 py-1 px-2' id="edit" />
      </label>

      <label htmlFor='select' className="block mb-5">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Edit Priority</span>
        <select id="select" value={priority} onChange={(e) => setPriority(e.target.value)} className="mt-1 px-1 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
            <option value="Select Priority">Select Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
      </label>
      
      <label htmlFor="description"> Edit Description
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className='border border-slate-300 rounded-sm mb-5 mt-1 py-1 px-2' />
      </label>

      <button onClick={()=> handleEdit()} className='bg-blue-400 hover:bg-blue-600 text-white px-3 py-2 rounded-md mr-2' >Change</button>
      <button onClick={()=> setPopUpIndex(null)} className='bg-slate-100 hover:bg-slate-600 hover:text-[#fff] px-3 py-2 rounded-md'>Cancel</button>
    </div>
  )
}
export default Edit
