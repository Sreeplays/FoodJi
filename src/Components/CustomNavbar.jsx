import React from 'react'
import { useState } from 'react'
import { NavLink, Navbar, NavbarBrand } from 'reactstrap'
import logoimg from '../assets/cheeseburger.png'
import {AiOutlineMenu, AiOutlineClose, AiOutlineHome} from 'react-icons/ai'
import { NavDropdown } from 'react-bootstrap'

const CustomNavbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    
  return (
<div>

<Navbar className='px-2 flex w-full h-full justify-between bg-transparent'>
  <div>
    <div className='flex' >
        <NavbarBrand className='font-bold text-2xl mr-4 mt-5 sm:text-3xl text-white pl-1'>
         
          <a href="/"><p className=' text-[#00df9a] mx-[-10px] text-lg text-center'>FoodJi!!</p></a>
        </NavbarBrand>
        <div className='my-5 hidden md:flex'>
          <div className='pl-4 text-white'><NavLink href='/order'>Order Now!!</NavLink></div>

        </div>
    </div>
    </div>
    <div className='md:hidden absolute top-6 right-1' onClick={handleClick}>
            {!nav ? (<AiOutlineMenu className=' text-white '/>) : (<AiOutlineClose className=' relative text-white'/>)}
            
    </div>
</Navbar>
<div className={!nav ? 'hidden ease-out duration-700 text-white relative border-none' : ' w-full pt-2  pr-2 pl-2 ease-in duration-400 text-white bg-black bg-opacity-80'}>
                 <div className='border-b border-zinc-500 w-full pb-3 '><NavLink href='/'>Home</NavLink></div>
                 <div className='border-b border-zinc-500 w-full pb-3 '><NavLink href='/order'>Order Now!!!</NavLink></div>
  
                
            
           </div>

</div>
  )
}

export default CustomNavbar
