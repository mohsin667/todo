import React,{useState} from 'react'
import {SlOptionsVertical} from "react-icons/sl"
import Edit from './Edit'
function Todo() {
  return (
    <div className='bg-gray-100 rounded-md md:w-[calc(100%-200px)] mt-[10px] p-[15px] flex flex-wrap items-start gap-[15px] flex-col md:flex-row'>
        <div className='p-[10px] self-stretch rounded-md bg-[#D1E5F7] text-sm md:w-[calc(100%/3-10px)] flex flex-col'>
            <div className='flex justify-between items-start'>
            <h3>Do some Exercise</h3>
            <div className='relative'>
                <SlOptionsVertical className='mt-[5px] cursor-pointer' />
                <Edit />
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illum?</p>
            <div className='flex justify-between items-center mt-3 ml-[-5px]'>
            <label htmlFor="done" className='inline-flex'>
                <input id="done" type="checkbox" className="checked:bg-blue-500 relative left-1 w-4 mr-2" />
                Done
            </label>
            <div className={`w-[15px] h-[15px] rounded-full`} style={{background: "#f87171"}}></div>
            </div>
        </div>
        
        <div className='p-[10px] self-stretch rounded-md bg-[#D1E5F7] text-sm md:w-[calc(100%/3-10px)] flex flex-col'>
            <div className='flex justify-between items-start'>
            <h3>Do some Exercise</h3>
            <div className='relative'>
                <SlOptionsVertical className='mt-[5px] cursor-pointer' />
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illum?</p>
            <div className='flex justify-between items-center mt-3 ml-[-5px]'>
            <label htmlFor="done" className='inline-flex'>
                <input id="done" type="checkbox" className="checked:bg-blue-500 relative left-1 w-4 mr-2" />
                Done
            </label>
            <div className={`w-[15px] h-[15px] rounded-full`} style={{background: "#65cdaa"}}></div>
            </div>
        </div>
        
        <div className='p-[10px] self-stretch rounded-md bg-[#D1E5F7] text-sm md:w-[calc(100%/3-10px)] flex flex-col'>
            <div className='flex justify-between items-start'>
            <h3>Do some Exercise</h3>
            <div className='relative'>
                <SlOptionsVertical className='mt-[5px] cursor-pointer' />
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illum?</p>
            <div className='flex justify-between items-center mt-3 ml-[-5px]'>
            <label htmlFor="done" className='inline-flex'>
                <input id="done" type="checkbox" className="checked:bg-blue-500 relative left-1 w-4 mr-2" />
                Done
            </label>
            <div className={`w-[15px] h-[15px] rounded-full`} style={{background: "#facc16"}}></div>
            </div>
        </div>
    </div>
  )
}

export default Todo
