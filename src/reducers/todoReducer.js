import {ADD_TODO,EDIT_POPUP_OPEN, EDIT_POPUP_CLOSE, EDIT_TODO,} from "../actions/constants"
import { v4 as uuidv4 } from 'uuid';
const initialState = [ 
    {
      id:uuidv4(),
      title: "Do Exercise",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "high",
      color: "#f87171",
      pop: false,
    },
    {
      id:uuidv4(),
      title: "Gain Skills",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "medium",
      color: "#facc16",
      pop: false
    },
    {
      id:uuidv4(),
      title: "Make Tutorial Video",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "low",
      color: "#65cdaa",
      pop: false
    },
    {
      id:uuidv4(),
      title: "Eat vegitables",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "low",
      color: "#65cdaa",
      pop: false
    },
    {
      id:uuidv4(),
      title: "Drink Milk",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "low",
      color: "#65cdaa",
      pop: false
    },
    {
      id:uuidv4(),
      title: "Go Out for Running",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, culpa?",
      priority: "low",
      color: "#65cdaa",
      pop: false
    },
  ]

  const todoReducer = (state = initialState,action) => {
    switch(action.type) {

        case ADD_TODO:
        return [...state,{
          id:uuidv4(),
          title: action.payload.title, 
          description: action.payload.description, 
          priority:action.payload.priority,
          color: action.payload.color,
          pop: false
        }];

        case EDIT_POPUP_OPEN: 

        return  [
            ...state.slice(0,action.payload),
            {...state[action.payload],pop:true},
            ...state.slice(action.payload + 1)
          ]

        case EDIT_POPUP_CLOSE: 
          let temp = [...state]
          temp[action.payload].pop = false;
        return temp;
        
        case EDIT_TODO: 
        return  [
          ...state.slice(0,action.payload.index),
          {
            ...state[action.payload.index],
            title: action.payload.title,
            description: action.payload.description
          },
          ...state.slice(action.payload.index + 1)
        ]
        
        default: 
        return state
    }
  }

  export default todoReducer
