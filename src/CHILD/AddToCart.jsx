import React, { useContext, useEffect, useReducer, useState } from 'react'
import Cart from '../assets/icons8-cart.gif'
import { StateContext, DispatchContext } from '../globalContext/AppProvider'
import { Button } from 'reactstrap'
import { Link } from 'react-scroll'


const AddToCart = ({dishes}) => {
    const cartDishes = useContext(StateContext); 
    const rmvDishes = useContext(DispatchContext);
    const cartAdded = cartDishes.cartItem.map((cartItem) => {
        return (
            <div>
            <img src={cartItem.img} alt=""  className='rounded-lg px-3 pt-2'/>
            <h6 className='top-[53%] text-center text-white font-italic'> {cartItem.item} </h6>
            </div>
        )
    })
    localStorage.setItem('cartItem', JSON.stringify(cartDishes))
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
        <div className=' w-[100px] h-[30%]  md:w-[110px] md:h-[40%] fixed top-[30%] right-0 flex border-r-1 bg-gray-500 p-2 py-2 mr-3 ml-3 px-4 rounded-lg shadow-lg bg-opacity-30 overflow-y-auto overflow-x-hidden'>
        <div className='w-[100%]  '>
            <h6 className="text-center font-italic font-bold text-white ">Your Cart </h6>
            {cartAdded}
            {cartAdded.length != 0 ? <><div><button className='bg-red-600 italic text-bold text-white delay-300 px-3 mt-3 mr-6 py-1 rounded-lg' onClick={() => rmvDishes({ type: 'remove', payload: 'cartAdded' })}> Remove All </button></div></> : <div></div>}
            <Link activeClass='active' to="1" spy={true} smooth={true} offset={-70} duration={500}><Button className='bg-green-300 italic text-bold text-black hover:bg-red-400 delay-300 px-2 mr-6 py-1 rounded-lg'>Checkout!</Button></Link>

        </div>
        </div>
    )
}
export default AddToCart