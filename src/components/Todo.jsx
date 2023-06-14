import React,{useEffect,useState} from 'react'
import { SlOptionsVertical } from 'react-icons/sl'
import {RiDeleteBin6Line} from "react-icons/ri"
import Edit from "./Edit";
import { useDispatch, useSelector } from "react-redux";
import {deleteTodo,handleChecked} from "../reducers/todoSlice";
import { getTodoFetch } from '../reducers/todoSlice';
function Todo() {  
  
  const dispatch = useDispatch()
  const [state,setState] = useState(null)
  const [popUpIndex,setPopUpIndex] = useState(null)
  const [selectedData,setSelectedData] = useState(null)
  // Dispatch Action
  useEffect(()=> {
    dispatch(getTodoFetch())
  },[])
  
  // update state
  const todo = useSelector(state => state.todos)
  const filter = useSelector(state => state.todos.filter)
  useEffect(()=> {
    setState(todo)
  },[todo])

  useEffect(()=> {
    console.log(filter)
    const filteredData = todo.todoState.filter(todo => {
      if(filter === "all") {
        return true
      } else if (filter === "high") {
        return todo.priority === "high"
      } else if (filter === "medium") {
        return todo.priority === "medium" 
      } else if (filter === "low") {
        return todo.priority === "low"
      } else if (filter == "completed") {
        return todo.completed
      }
    })
    setState(state => {
      return {
        ...state,
        todoState: filteredData
      }
    })
  },[filter])

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }
  
  const handleChange = (e,index,id) => {
    const payload = {
      id: id,
      target: e.target.checked,
      index: index
    }
    dispatch(handleChecked(payload))
  }

  //toggle edit popup
  const handleEdit = (index,id) => {
    if(popUpIndex === null) {
      setPopUpIndex(index)
      const filterdData = todo.todoState.filter(item => item._id === id)
      setSelectedData(filterdData)
      return
    }
    setPopUpIndex(null)
  }
 
  return (
    <>
      <div className='bg-gray-100 rounded-md md:w-[calc(100%-200px)] mt-[10px] p-[15px] flex flex-wrap items-start gap-[15px] flex-col md:flex-row'>
          {state && state.todoState.length > 0 ? state.todoState.map((data,index)=> {
            return <div key={index} className='p-[10px] self-stretch rounded-md bg-[#D1E5F7] text-sm md:w-[calc(100%/3-10px)] flex flex-col'>
              <div className='flex justify-between items-start'>
              <h3 className={`${data.completed ? 'line-through': ""}`}>{data.title}</h3>
                <div className='relative flex items-center gap-1'>
                  <RiDeleteBin6Line className='text-[18px] cursor-pointer' onClick={()=> handleDelete(data._id)} />
                  <SlOptionsVertical onClick={()=> handleEdit(index,data._id)} className='cursor-pointer' />
                  {index === popUpIndex && <Edit popUpIndex={popUpIndex} selectedData={selectedData} setPopUpIndex={setPopUpIndex} /> }
                </div>
              </div>
              <p>{data.description}</p>
              <div className='flex justify-between items-center mt-3 ml-[-5px]'>
                <label htmlFor={data._id} className='inline-flex'>
                    <input id={data._id} type="checkbox" onChange={(e)=> handleChange(e,index,data._id)} checked={data.completed ? true : false} className="checked:bg-blue-500 relative left-1 w-4 mr-2" />Done
                </label>
                <div className={`w-[15px] h-[15px] rounded-full`} style={{background: data.color}}></div>
              </div>
          </div>
          }): <div className='flex justify-center w-full self-center'><h2 className='font-bold text-[35px] py-[30px]'>No Task Available</h2></div>
          
        }
      </div>
    </>
  )
}


export default Todo
