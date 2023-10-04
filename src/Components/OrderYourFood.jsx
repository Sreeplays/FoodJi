import React from 'react'
import Parotta from '../assets/pngegg.png'
import GheeRoast from '../assets/Ghee-Roast.png'
import ThaliNorth from '../assets/pngwing.com.png'
import ParottaSet from '../assets/2-Parotta-Curry.png'
const OrderYourFood = () => {
  return (
  <div className='text-white'>
    {/* Search Bar */}
    <div><h1 className='text-xl font-serif rounded-md drop-shadow-md text-green-300 text-center'>Not getting enough from our most demanded food items. Go for the Expedition !!</h1></div>
    <div className='justify-center items-center text-center'><input type="search" placeholder='Search for more luscious food...' className='bg-[#000300] text-white px-48 py-3 border-[#00df9a] relative  hover:drop-shadow-glow duration-300 rounded-xl'/></div>
    {/* Grids for most demandive items */}
    <div className='text-white justify-start grid md:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-12 pt-4 px-28'>
      <div className='border border-white rounded-md px-2 py-1'>
        
      <img src="https://www.transparentpng.com/thumb/burger/hot-burger-king-hd-png-9dzyCE.png" alt="hot burger king hd png @transparentpng.com" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>Cheese Burger</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.250</p>
          <br />
        </div>
      </div>
      {/* NEXT ONE */}
      <div className='border border-white rounded-md px-2 py-1'>
        
      <img src={Parotta} alt="Kothu Parotta" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>Veg Kothu Parotta</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.180</p>
        </div>
      </div>
      {/* NEXT ONE */}
      <div className='border border-white rounded-md px-2 py-1'>
        
      <img src={GheeRoast} alt="Ghee Roast" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>Ghee Roast</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.70</p>
        </div>
      </div>
      {/* NEXT ONE */}
      <div className='border border-white rounded-md px-2 py-1'>
        
      <img src={ThaliNorth} alt="North Indian Thali Meals" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>North Indian Thali</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.120</p>
        </div>
      </div>
      {/* NEXT ONE */}
      <div className='border border-white rounded-md px-2 py-1'>
        
      <img src={ParottaSet} alt="Kothu Parotta" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>3 Set Parotta with any Curry</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.100</p>
        </div>
      </div>
      {/* NEXT ONE */}
      <div className='border border-white rounded-md px-2 py-1'>
        
      <img src={Parotta} alt="Kothu Parotta" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>Veg Kothu Parotta</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.180</p>
        </div>
      </div>
      {/* NEXT ONE */}
      <div className='border border-white rounded-md px-2 py-1'>
        
      <img src={Parotta} alt="Kothu Parotta" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>Veg Kothu Parotta</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.180</p>
        </div>
      </div>
      {/* NEXT ONE */}
      <div className='border border-white rounded-md px-2 py-1'>
        
      <img src={Parotta} alt="Kothu Parotta" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>Veg Kothu Parotta</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.180</p>
        </div>
      </div>
      {/* NEXT ONE */}
 
    </div>
  </div>
  )
}

export default OrderYourFood