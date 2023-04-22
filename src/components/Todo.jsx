import React,{useEffect,useState} from 'react'
import { SlOptionsVertical } from 'react-icons/sl'
import {RiDeleteBin6Line} from "react-icons/ri"
import Form from './Form';
import Edit from "./Edit";
import { useDispatch, useSelector } from "react-redux";
import {editPopUpOpen,taskCompleted,deleteTodo} from "../actions/todoAction";
function Todo() {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }
  const handlePop = (id) => {
    dispatch(editPopUpOpen(id))
  }
  const {todos,selectedFilter} = useSelector((store)=>store.todos);
  const [state,setState] = useState(todos)
  const handleChange = (e,index) => {
    dispatch(taskCompleted({completed: e.target.checked,index}))
  }

  useEffect(()=> {
    if(todos) {
      if(selectedFilter === "all") {
        setState(todos)
      }
      else if(selectedFilter === "completed"){
        const filteredTodos = todos.filter(f=> f.completed)
        setState(filteredTodos)
      }
      else if(selectedFilter === "hide"){
        const filteredTodos = todos.filter(f=> !f.completed)
        setState(filteredTodos)
      }
      else {
        const filteredTodos = todos.filter(f=> f.priority === selectedFilter)
        setState(filteredTodos)
      }

    }
  },[selectedFilter,todos])
  return (
    <>
      <div className='bg-gray-100 rounded-md md:w-[calc(100%-200px)] mt-[10px] p-[15px] flex flex-wrap items-start gap-[15px] flex-col md:flex-row'>
          {state && state.length > 0 ? state.map((data,index)=> {
            return <div key={index} className='p-[10px] self-stretch rounded-md bg-[#D1E5F7] text-sm md:w-[calc(100%/3-10px)] flex flex-col'>
              <div className='flex justify-between items-start'>
              <h3 className={`${data.completed ? 'line-through': ""}`}>{data.title}</h3>
                <div className='relative flex items-center gap-1'>
                  <RiDeleteBin6Line className='text-[18px] cursor-pointer' onClick={()=> handleDelete(data.id)} />
                  <SlOptionsVertical onClick={()=> handlePop(index)} className='cursor-pointer' />
                  {data.pop && <Edit id={index} />}
                </div>
              </div>
              <p>{data.description}</p>
              <div className='flex justify-between items-center mt-3 ml-[-5px]'>
                <label htmlFor={data.id} className='inline-flex'>
                    <input id={data.id} type="checkbox" onChange={(e)=> handleChange(e,index)} checked={data.completed ? true : false} className="checked:bg-blue-500 relative left-1 w-4 mr-2" />
                    Done
                </label>
                <div className={`w-[15px] h-[15px] rounded-full`} style={{background: data.color}}></div>
              </div>
          </div>
          }): <div className='flex justify-center w-full self-center'><h2 className='font-bold text-[35px] py-[30px]'>No card found )-:</h2></div>
          
        }
      </div>
      <Form />
    </>
  )
}


export default Todo
