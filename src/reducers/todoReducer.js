import {ADD_TODO,EDIT_POPUP_OPEN, EDIT_POPUP_CLOSE, EDIT_TODO, TASK_COMPLETED, FILTER,DELETE} from "../actions/constants"
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  todos: [ 
    {
      id:uuidv4(),
      title: "Do Exercise",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "high",
      color: "#f87171",
      pop: false,
      completed: false
    },
    {
      id:uuidv4(),
      title: "Gain Skills",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "medium",
      color: "#facc16",
      pop: false,
      completed: false
    },
    {
      id:uuidv4(),
      title: "Make Tutorial Video",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "low",
      color: "#65cdaa",
      pop: false,
      completed: false
    },
    {
      id:uuidv4(),
      title: "Eat vegitables",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "low",
      color: "#65cdaa",
      pop: false,
      completed: false
    },
    {
      id:uuidv4(),
      title: "Drink Milk",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "low",
      color: "#65cdaa",
      pop: false,
      completed: false
    },
    {
      id:uuidv4(),
      title: "Go Out for Running",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "low",
      color: "#65cdaa",
      pop: false,
      completed: true
    },
  ],
  selectedFilter: "all"
}

let temp;
  const todoReducer = (state = initialState,action) => {
    switch(action.type) {
        case ADD_TODO:
        temp = [...state.todos];
        temp.push({
          id:uuidv4(),
          title: action.payload.title, 
          description: action.payload.description, 
          priority:action.payload.priority,
          color: action.payload.color,
          pop: false
        })
        return {
          ...state,
          todos : temp,
        };

        case EDIT_POPUP_OPEN: 
          temp = [...state.todos]
          temp[action.payload].pop = !temp[action.payload].pop;
        return {
          ...state,
          todos: temp
        };

        case EDIT_POPUP_CLOSE: 
          temp = [...state.todos]
          temp[action.payload].pop = false;
        return {
          ...state,
          todos:temp
        };
        
        case EDIT_TODO: 
          temp = [...state.todos]
          console.log(action.payload)
          temp[action.payload.index].title = action.payload.title
          temp[action.payload.index].description = action.payload.description
          temp[action.payload.index].color = action.payload.color
        return {
          ...state,
          todos: temp
        }
        
        case TASK_COMPLETED: 
          temp = [...state.todos]
          temp[action.payload.index].completed = action.payload.completed 
        return {
          ...state,
          todos: temp
        }
        
        case FILTER: 

        return {
          ...state,
          selectedFilter: action.payload
        }
        
        case DELETE: 
        temp = [...state.todos]
        console.log(action.payload, temp)
        const deleteTodo =  temp.filter((todo)=> {
          return todo.id !== action.payload
        })
        return {
          ...state,
          todos: deleteTodo
        }
        
        default: 
        return state
    }
  }

  export default todoReducer
