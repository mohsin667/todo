import React,{useEffect} from 'react'
import { SlOptionsVertical } from 'react-icons/sl'
import Form from './Form';
import Edit from "./Edit";
import { useDispatch, useSelector } from "react-redux";
import {editPopUpOpen} from "../actions/todoAction";
function Todo() {
  const dispatch = useDispatch()
  const handlePop = (id) => {
    dispatch(editPopUpOpen(id))
  }
  const state = useSelector((store)=>store.todos);

  return (
    <>
      <div className='bg-gray-100 rounded-md md:w-[calc(100%-200px)] mt-[10px] p-[15px] flex flex-wrap items-start gap-[15px] flex-col md:flex-row'>
          {state.map((data,index)=> {
            return <div key={index} className='p-[10px] self-stretch rounded-md bg-[#D1E5F7] text-sm md:w-[calc(100%/3-10px)] flex flex-col'>
              <div className='flex justify-between items-start'>
              <h3>{data.title}</h3>
                <div className='relative'>
                  <SlOptionsVertical onClick={()=> handlePop(index)} className='mt-[5px] cursor-pointer' />
                  {data.pop && <Edit id={index} />}
                </div>
              </div>
              <p>{data.description}</p>
              <div className='flex justify-between items-center mt-3 ml-[-5px]'>
              <label htmlFor={data.id} className='inline-flex'>
                  <input id={data.id} type="checkbox" className="checked:bg-blue-500 relative left-1 w-4 mr-2" />
                  Done
              </label>
              <div className={`w-[15px] h-[15px] rounded-full`} style={{background: data.color}}></div>
              </div>
          </div>
          })}
      </div>
      <Form />
    </>
  )
}


export default Todo
