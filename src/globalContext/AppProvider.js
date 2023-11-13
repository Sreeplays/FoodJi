import React from 'react'
import { useReducer } from 'react'
import Checkout from '../CHILD/Checkout'
import { Link } from 'react-scroll'

const DispatchContext = React.createContext()
const StateContext = React.createContext()
const AppProvider = ({children}) => {



const initialState = {
    cartItem: []
}
const reducer = (state, action) => {

  
    switch(action.type){
        case"add_to_cart": 
            return {...state, 
              cartItem: [...state.cartItem, action.payload]
            }
          case"remove":
            return { cartItem: [action.payload -1]}
        default: 
            return action.type;
    }
    
  }
  

   

const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
            {children}
            
        </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export {AppProvider, DispatchContext, StateContext}