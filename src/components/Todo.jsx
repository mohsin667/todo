import React,{useState} from 'react'
import {SlOptionsVertical} from "react-icons/sl"
import Edit from './Edit'
function Todo() {
    const [state,setState] = useState([
        {
          id:1,
          title: "Do Exercise",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
          priority: "high",
          color: "#f87171",
          pop:false
        },
        {
          id:2,
          title: "Gain Skills",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
          priority: "medium",
          color: "#facc16",
          pop:false
        },
        {
          id:3,
          title: "Make Tutorial Video",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
          priority: "low",
          color: "#65cdaa",
          pop:false
        }
      ])
      const handlePop = (id) => {
        const temp = [...state]
        temp.map((item,index) => {
          return item.pop = false
        })
        temp[id].pop = true
        setState(temp)
      }
  return (
    <div className='bg-gray-100 rounded-md md:w-[calc(100%-200px)] mt-[10px] p-[15px] flex flex-wrap items-start gap-[15px] flex-col md:flex-row'>
        {state && state.map((data,index)=> {
        return <div key={index} className='p-[10px] self-stretch rounded-md bg-[#D1E5F7] text-sm md:w-[calc(100%/3-10px)] flex flex-col'>
            <div className='flex justify-between items-start'>
            <h3>{data.title}</h3>
            <div className='relative'>
                <SlOptionsVertical onClick={()=> handlePop(index)} className='mt-[5px] cursor-pointer' />
                {data.pop && <Edit state={state} setState={setState}/>}
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
  )
}

export default Todo
