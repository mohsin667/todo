import React from 'react'
import { FiPlus } from 'react-icons/fi'

function TopNav() {
  return (
    <div className='text-[50px] mb-6 flex items-center justify-between'>
      <h1 className='font-bold'>Todo</h1> 
      <div className='cursor-pointer'><FiPlus /></div>
    </div>
  )
}

export default TopNav
