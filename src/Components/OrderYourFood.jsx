import React from 'react'
import Parotta from '../assets/pngegg.png'
import GheeRoast from '../assets/Ghee-Roast.png'
import ThaliNorth from '../assets/pngwing.com.png'
import ParottaSet from '../assets/2-Parotta-Curry.png'
import Bhatoora from '../assets/Chole-Bhatoora.png'
import Pizza from '../assets/Pizza.png'
import Poori from '../assets/Poori-Set.png'
import VegWrap from '../assets/Veg-Wrap.png'
import { Card } from 'react-bootstrap'
const OrderYourFood = () => {
  return (
  <div className='text-white'>
    {/* Search Bar */}
   <div><h1 className='text-4xl font-serif rounded-md drop-shadow-md text-green-300 text-center mb-14 hover:animate-pulse delay-700 duration-300'>Our most DEMANDED items!!</h1></div>
    {/* Grids for most demandive items */}
    <div className='text-white justify-start grid md:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-12 pt-4 px-28'>
      <div className='border border-white rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600'>
        
      <img src="https://www.transparentpng.com/thumb/burger/hot-burger-king-hd-png-9dzyCE.png" alt="hot burger king hd png @transparentpng.com" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>Cheese Burger</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.250</p>
          
        </div>
      </div>
      {/* NEXT ONE */}
      <div className='border border-white rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600'>
        
      <img src={Parotta} alt="Kothu Parotta" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>Veg Kothu Parotta</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.180</p>
        </div>
        
      </div>
      {/* NEXT ONE */}
      <div className='border border-white rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600'>
        
      <img src={GheeRoast} alt="Ghee Roast" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>Ghee Roast</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.70</p>
        </div>
        
      </div>
      {/* NEXT ONE */}
      <div className='border border-white rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600'>
        
      <img src={ThaliNorth} alt="North Indian Thali Meals" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>North Indian Thali</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.120</p>
        </div>
        
      </div>
      {/* NEXT ONE */}
      <div className='border border-white rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600'>
        
      <img src={ParottaSet} alt="Kothu Parotta" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>3 Set Parotta with any Curry</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.100</p>
        </div>
        
      </div>
      {/* NEXT ONE */}
      <div className='border border-white rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600'>
        
      <img src={Bhatoora} alt="Chole Bhatoor a" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>Chole Bhatoora</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.180</p>
        </div>
        
      </div>
      {/* NEXT ONE */}
      <div className='border border-white rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600'>
        
      <img src={Pizza} alt="FoodJii Special Pizza" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>FoodJii's Special Pizza</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.240</p>
        </div>
        
      </div>
      {/* NEXT ONE */}
      <div className='border border-white rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600'>
        
      <img src={Poori} alt="Poori Set (3)" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>Poori Set (3)</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.75</p>
        </div>
        
      </div>
      {/* NEXT ONE */}
      <div className='border border-white rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600'>
        
      <img src={VegWrap} alt="Veg Wrap" className='w-20 '></img>
        <div>
          <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>Veg Wrap</h3>
          <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.150</p>
        </div>
        
      </div>
 
    </div>
  <div><h1 className='text-4xl font-serif rounded-md drop-shadow-md text-green-300 text-center mb-14 hover:animate-bounce delay-500 duration-300'>Not getting enough from our most ultimatum items. Go for the Expedition !!</h1></div>
  <div className='justify-center items-center text-center'><input type="search" placeholder='Search for more...' className='bg-[#000300] text-white px-48 py-3  border-[#00df9a] relative hover:drop-shadow-glow duration-300 rounded-xl'/></div>
  <br className='py-8'/>  
  </div>
  )
}

export default OrderYourFood