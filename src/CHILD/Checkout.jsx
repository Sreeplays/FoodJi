import React, { useContext, useEffect, useState } from 'react'
import { DispatchContext, StateContext } from '../globalContext/AppProvider'

const Checkout = () => {
  const cartDishes = useContext(StateContext);
  // const rmvDishes = useContext(DispatchContext)
  const cartAdded = cartDishes.cartItem.map((cartItem) => {
      return (
        <div className='border border-white rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600 backdrop-blur-xl' id='1'>
         
        <img src={cartItem.img} className='w-20 '></img>
          <div>
            <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>{cartItem.item}</h3>
            {/* <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.100</p> */}
            
          </div>
        </div>
        
      )
      
  })
 

  // const [st ate, dispatch] = useReducer(reducer, initialState)
  // let addToCart = dishes.map((item) => {
  //     return (
  //         <div>
  //         <img src={item.img} alt=""  className='rounded-lg px-3 pt-2'/>
  //         <h6 className='top-[53%] text-center text-white font-italic'> {item.title} </h6>
  //         <div className='flex pr-6 items-center'>
  //         {/* <button className=' text-center text-black font-italic border-b border-gray-200 bg-green-200 rounded-full px-3 mr-2'> - </button>
  //         <p className='flex justify-center'>{state}</p>
  //         <button className=' text-center text-black font-italic border-b border-gray-200 bg-green-200 rounded-full px-3 ml-2 mr-2' onClick={() => dispatch({type: "add_more"})}> + </button> */}
  //         </div>
  //         {/* <br className='border border-gray-200'/> */}
  //         </div>
  //     )
  // })
  return (
    <div id='1'>
      <div className='text-3xl font-serif rounded-md drop-shadow-md text-green-300 text-center mb-14 '><h1 >Pay for the exclusious ones here !!</h1></div>
    <div className='text-white justify-start grid sm:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-7 pt-4 px-20'>

        {cartAdded}
    </div>
    </div>
  )
}

export default Checkout