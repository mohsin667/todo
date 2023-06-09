import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import Form from './Form'

function TopNav() {
  const [dialog, setDialog] = useState(false)
  return (
    <>
      <div className='text-[50px] mb-6 flex items-center justify-between'>
        <h1 className='font-bold'>Todo</h1> 
        <div className='cursor-pointer'><FiPlus /></div>
      </div>
      {dialog && <Form setDialog={setDialog} />}
    </>
  )
}

export default TopNav
