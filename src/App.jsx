import { useState,useEffect } from 'react'
import Navigation from "./components/Navigation"
import { FiPlus } from 'react-icons/fi'
import Todo from './components/Todo'
import {openDialogAction} from "./actions/dialogAction"
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  return (
    <>
      <div className="App px-6 relative py-6">
        <div className='container mx-auto relative'>
          <div className='text-[50px] mb-6 flex items-center justify-between'>
            <h1 className='font-bold'>Todo</h1> 
            <div onClick={()=> dispatch(openDialogAction())} className='cursor-pointer'><FiPlus /></div>
          </div>
          <div className='flex gap-[15px] items-start flex-col md:flex-row'>
            <Navigation />
            <Todo />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
