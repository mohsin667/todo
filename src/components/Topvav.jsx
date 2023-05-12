import React from 'react'
import { FiPlus } from 'react-icons/fi'
import {openDialogAction} from "../actions/dialogAction"
import { useDispatch } from 'react-redux'
function TopNav() {
  const dispatch = useDispatch()
  return (
    <div className='text-[50px] mb-6 flex items-center justify-between'>
      <h1 className='font-bold'>Todo</h1> 
      <div onClick={()=> dispatch(openDialogAction())} className='cursor-pointer'><FiPlus /></div>
    </div>
  )
}

export default TopNav
