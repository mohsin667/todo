import { useState } from 'react'
import Navigation from "./components/Navigation"
import Form from './components/Form'
import TopNav from './components/Topvav'
import Todo from './components/Todo'

function App() {
  const [state,setState] = useState([
    {
      id:1,
      title: "Do Exercise",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "high",
      color: "#f87171"
    },
    {
      id:2,
      title: "Gain Skills",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "medium",
      color: "#facc16"
    },
    {
      id:3,
      title: "Make Tutorial Video",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "low",
      color: "#65cdaa"
    }
  ])
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
      <Form />
    </>
  )
}

export default App
