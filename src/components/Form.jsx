import React,{useState} from 'react'
import {addTodo} from "../reducers/todoSlice";
import { useDispatch} from 'react-redux';

function Form({setDialog}) {
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [priority,setPriority] = useState("Select Priority")
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    setTitle("")
    setDescription("")
    setPriority("Select Priority")

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

    const obj = {
        title: title,
        description: description,
        priority: priority,
        color: color,
        completed: false
    }
    dispatch(addTodo(obj))
    setDialog(false)
  }
  return (
    <>
        {<div className='w-full h-full fixed top-0 left-0 flex items-center justify-center z-50'>
            <div onClick={()=> setDialog(false)} className='w-full h-full absolute bg-[rgba(0,0,0,0.4)] cursor-pointer'></div>
            <div className="container px-4">
                <form onSubmit={handleSubmit} className='md:w-[500px] mx-auto py-6 px-6 md:py-10 md:px-20 bg-white relative rounded-sm'>
                    <label className="block mb-5">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Title
                        </span>
                        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Title" />
                    </label>
                    <label className="block mb-5">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Select Priority
                        </span>
                        <select value={priority} onChange={(e)=> setPriority(e.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com">
                            <option value="Select Priority">Select Priority</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </label>
                    <label className="block mb-5">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Description
                        </span>
                        <textarea value={description} onChange={(e)=> setDescription(e.target.value)} type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Description" />
                    </label>
                    <button className='bg-blue-400 px-3 py-2 rounded-md text-white mr-2' type="submit">Submit</button>
                    <button className='bg-slate-200 px-3 py-2 rounded-md' onClick={()=> setDialog(false)}>Cancel</button>
                </form>
            </div>
        </div>}
    </>
    
  )
}

export default Form
