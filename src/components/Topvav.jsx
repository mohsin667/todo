import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { FaTasks } from 'react-icons/fa'

import Form from './Form'
function TopNav() {
  const [dialog,setDialog] = useState(false)
  return (
    <>
      <div className='text-[50px] mb-6 flex items-center justify-between'>
        <FaTasks color='#66cca9' size={40} />
        <div onClick={()=> setDialog(true)} className='cursor-pointer'><FiPlus /></div>
      </div>
      {dialog && <Form setDialog={setDialog}/>}
    </>
  )
}

export default TopNav
