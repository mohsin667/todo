import { useState } from 'react'
import Navigation from "./components/Navigation"
import Form from './components/Form'
import TopNav from './components/Topvav'
import Todo from './components/Todo'

function App() {
  return (
    <>
      <div className="px-6 relative py-6">
        <div className='container mx-auto relative'>
          <TopNav />
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
