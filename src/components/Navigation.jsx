import React from 'react'
import {BsCheckCircleFill} from "react-icons/bs"
function Navigation() {
  return (
    <>
    <nav>
        <ul className='flex gap-[10px] md:gap-[0] flex-wrap md:flex-col'>
            <li className='flex p-2 gap-2 md:my-[7.5px]  bg-gray-100 rounded-md text-slate-950'><div className='w-6 h-6 rounded-full bg-red-400'></div> High Priority</li>
            <li className='flex p-2 gap-2 md:my-[7.5px]  bg-gray-100 rounded-md text-slate-950'><div className='w-6 h-6 rounded-full bg-yellow-400'></div> Medium Severity</li>
            <li className='flex p-2 gap-2 md:my-[7.5px]  bg-gray-100 rounded-md text-slate-950'><div className='w-6 h-6 rounded-full bg-[#66cdaa]'></div> Low Severity</li>
            <li className='flex p-2 gap-2 md:my-[7.5px]  bg-gray-100 rounded-md text-slate-950'><div className='w-6 h-6 rounded-full bg-white flex items-center justify-center'><BsCheckCircleFill className='text-[#66cdaa] font-bold'/></div> Low Severity</li>
            <li className='flex p-2 gap-2 md:my-[7.5px]  bg-gray-100 rounded-md text-slate-950'><input type="checkbox" className="checked:bg-blue-500 relative left-1 w-4 mr-2" />Hide Completed</li>
        </ul>
    </nav>
    </>
  )
}

export default Navigation
