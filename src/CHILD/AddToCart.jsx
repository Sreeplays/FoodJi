import React from 'react'
import Cart from '../assets/icons8-cart.gif'
const AddToCart = ({dishes}) => {
    let addToCart = dishes.map((item) => {
        return (
            <div><img src={item.img} alt=""  className='rounded-lg px-3 '/>
            <h6 className='top-[53%] text-center text-white font-italic '> {item.title} </h6></div>
        )
    })
    return (
        <div className='w-[100px] h[100%] fixed top-[30%] right-0 flex border-r-1 bg-gray-500 p-2 py-2 mr-3 rounded-lg shadow-lg bg-opacity-30'>
        <div className='w-[100%] h-auto '>
            <h6 className="text-center font-italic font-bold text-white ">Your Cart </h6>
            {addToCart}
        </div>
        </div>
    )
}
export default AddToCart