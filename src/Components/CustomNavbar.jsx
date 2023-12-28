// import React from 'react'
import { useState } from 'react'
import { Button, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap'
import logoimg from '../assets/cheeseburger.png'
import {AiOutlineMenu, AiOutlineClose, AiOutlineHome} from 'react-icons/ai'
import { NavDropdown } from 'react-bootstrap'
import { useEffect } from 'react'
import { UserAuth } from '../FireBase-Data-Config/AuthContext'

const CustomNavbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    // Theme config 
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    const handleToggle = (e) => {
      if (e.target.checked) {
        setTheme("business");

      }else{
        setTheme("nord");
      }
    }

    useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])

    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
      try {
        await logOut()
      } catch (error) {
        console.log(error)
      }
    }

  return (
<div>

<Navbar className='px-2 flex w-full h-full justify-between backdrop-blur-0'>
  <div>
    <div className='flex' >
        <NavbarBrand className='font-bold text-2xl mr-4 mt-5 sm:text-3xl text-white pl-1'>
         
          <a href="/"><p className=' text-[#00df9a] mx-[-10px] text-lg text-center'>FoodJi!!</p></a>
        </NavbarBrand>
        <div className='my-5 hidden md:flex'>
          <div className='pl-4 '><NavLink href='/order'>Order Now!!</NavLink></div>
          <div className='pl-4 '><NavLink href='/contact'>Contact Us</NavLink></div>

        </div>
        <div className='md:flex flex pr-3 lg:right-10 right-14 fixed top-3'>
               

               {user?.photoURL ? (<> <Button className='px-3 mx-4 my-1 glass bg-red-400 text-black' onClick={handleSignOut}>Logout</Button> <a href="/account"> <img src={user?.photoURL} alt="Profile pic" className='rounded-box border-black py-2 px-5 h-12 w-26' /></a> </>) : (<></>)}
                      
                        
          </div>
        <label className="swap swap-rotate lg:right-5 right-7 fixed top-4">
  
  {/* this hidden checkbox controls the state */}
          <input type="checkbox" onChange={handleToggle} checked={theme == "nord" ? false : true} className='theme-controller'/>
  
  {/* sun icon */}
            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
            <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
         </label>
    </div>
    </div>
    


    <div className='md:hidden absolute top-6 right-1' onClick={handleClick}>
            {!nav ? (<AiOutlineMenu />) : (<AiOutlineClose className=' relative '/>)}
            
    </div>
</Navbar>
<div className={!nav ? 'hidden ease-in-out delay-500 relative border-none' : ' w-full pt-2  pr-2 pl-2 ease-in-out delay-500  bg-opacity-40'}>
                 <div className='border-b border-zinc-500 w-full pb-3 '><NavLink href='/'>Home</NavLink></div>
                 <div className='border-b border-zinc-500 w-full pb-3 '><NavLink href='/order'>Order Now!!!</NavLink></div>
                 <div className='border-b border-zinc-500 w-full pb-3 '><NavLink href='/contact'>Contact Us</NavLink></div> 
                
            
           </div>

</div>
  )
}

export default CustomNavbar
