import { v4 as uuidv4 } from 'uuid';
const initialState = [
    {
      id:uuidv4(),
      title: "Do Exercise",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "high",
      color: "#f87171"
    },
    {
      id:uuidv4(),
      title: "Gain Skills",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "medium",
      color: "#facc16"
    },
    {
      id:uuidv4(),
      title: "Make Tutorial Video",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "low",
      color: "#65cdaa"
    }
  ]

  const todoReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state,{id:uuidv4(),title: action.payload.title, description: action.payload.description,priority:action.payload.priority}]
        default: 
        return state
    }
  }

  export default todoReducer
