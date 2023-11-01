import React from 'react'
import { useReducer } from 'react'

const DispatchContext = React.createContext()
const StateContext = React.createContext()
const AppProvider = ({children}) => {



const initialState = {
    cartItem: []
}
const reducer = (state, action) => {

    console.log("Action is", action)
    switch(action.type){
        case"add_to_cart": 
            return {...state, 
              cartItem: [...state.cartItem, action.payload]
            }
        default: 
            return state;
    }
    
  }
  
   

const [state, dispatch] = useReducer(reducer, initialState)
console.log("State is", state.cartItem)
  return (
    <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
            {children}
        </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export {AppProvider, DispatchContext, StateContext}