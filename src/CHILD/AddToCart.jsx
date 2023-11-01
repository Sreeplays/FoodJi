import React, { useContext, useReducer, useState } from 'react'
import Cart from '../assets/icons8-cart.gif'
import { StateContext } from '../globalContext/AppProvider'


const AddToCart = ({dishes}) => {
    const cartDishes = useContext(StateContext)
    const cartAdded = cartDishes.cartItem.map((cartItem) => {
        return (
            <div>
            <img src={cartItem.img} alt=""  className='rounded-lg px-3 pt-2'/>
            <h6 className='top-[53%] text-center text-white font-italic'> {cartItem.item} </h6>
            </div>
        )
    })
    // const [state, dispatch] = useReducer(reducer, initialState)
    let addToCart = dishes.map((item) => {
        return (
            <div>
            <img src={item.img} alt=""  className='rounded-lg px-3 pt-2'/>
            <h6 className='top-[53%] text-center text-white font-italic'> {item.title} </h6>
            <div className='flex pr-6 items-center'>
            {/* <button className=' text-center text-black font-italic border-b border-gray-200 bg-green-200 rounded-full px-3 mr-2'> - </button>
            <p className='flex justify-center'>{state}</p>
            <button className=' text-center text-black font-italic border-b border-gray-200 bg-green-200 rounded-full px-3 ml-2 mr-2' onClick={() => dispatch({type: "add_more"})}> + </button> */}
            </div>
            {/* <br className='border border-gray-200'/> */}
            </div>
        )
    })
    return (
        <div className='w-[110px] h[100%] fixed top-[30%] right-0 flex border-r-1 bg-gray-500 p-2 py-2 mr-3 ml-3 px-4 rounded-lg shadow-lg bg-opacity-30'>
        <div className='w-[100%] h-auto '>
            <h6 className="text-center font-italic font-bold text-white ">Your Cart </h6>
            {cartAdded}
        </div>
        </div>
    )
}
export default AddToCart