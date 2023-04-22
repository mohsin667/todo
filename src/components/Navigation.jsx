import React, { useState } from 'react'
import {BsCheckCircleFill} from "react-icons/bs"
import {TiThSmallOutline} from "react-icons/ti"
import {filterAction} from "../actions/todoAction"
import { useDispatch } from 'react-redux'
function Navigation() {
  const dispatch = useDispatch()
  const filter = [
    {
      title: "All",
      color: "#65cdaa",
      priority: "all",
    },
    {
      title: "High Priority",
      color: "#f87171",
      priority: "high",
    },
    {
      title: "Medium Severity",
      color: "#facc16",
      priority: "medium",
    },
    {
      title: "Low Severity",
      color: "#65cdaa",
      priority: "low",
    },
    {
      title: "Completed",
      color: "#65cdaa",
      priority: "completed",
    }
  ]

  const handleFilter = (id) => {
    dispatch(filterAction(id))
  }

  return (
    <>
    <nav>
        <ul className='flex gap-[10px] md:gap-[0] flex-wrap md:flex-col'>
            {filter.map((list,index)=> {
              if(list.title === "All") {
                return <li key={index} onClick={()=> handleFilter(list.priority)} className='flex p-2 gap-2 md:my-[7.5px] items-center bg-gray-100 rounded-md text-slate-950 cursor-pointer'>
                <div style={{background: `${list.color}`}} className={`w-6 h-6 rounded-full flex items-center justify-center`}><TiThSmallOutline color="white" /></div>
                 {list.title}</li>
              }
              if(list.title === "Completed") {
                return <li onClick={()=> handleFilter(list.priority)} key={index} className='flex p-2 gap-2 md:my-[7.5px] items-center bg-gray-100 rounded-md text-slate-950 cursor-pointer'>
                <div style={{background: `${list.color}`}} className={`w-6 h-6 rounded-full flex items-center justify-center`}><BsCheckCircleFill color="white" /></div>
                 {list.title}</li>
              }
              return <li key={index} onClick={()=> handleFilter(list.priority)} className='flex p-2 gap-2 md:my-[7.5px]  bg-gray-100 rounded-md text-slate-950 cursor-pointer'>
                <div style={{background: `${list.color}`}} className={`w-6 h-6 rounded-full`}></div>{list.title}</li>
            }
            )}
        </ul>
    </nav>
    </>
  )
}

export default Navigation
