import React from 'react'
import twitter from '../assets/twitter.png'
import insta from '../assets/instagram.png'
import git from '../assets/github.png'
const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
            
            <div className="grid grid-cols-3 gap-6">
            
            <a href="https://twitter.com/SriramS2008" target="_blank" rel="noopener noreferrer" className="text-lg transition duration-300 transform hover:scale-150">
                <i className="fab fa-twitter"><img src={twitter} alt="tweet png" className='w-5 text-white'/></i>
            </a>
            <a href="https://www.instagram.com/__miichio" target="_blank" rel="noopener noreferrer" className="text-lg transition duration-300 transform hover:scale-150">
                <i className="fab fa-instagram"><img src={insta} alt="tweet png" className='w-5 text-white'/></i>
            </a>
            <a href="https://github.com/Sreeplays" target="_blank" rel="noopener noreferrer" className="text-lg transition duration-300 transform hover:scale-150">
                <i className=""><img src={git} alt="tweet png" className='w-5 text-white'/></i>
            </a>
            </div>
            <div className="text-xs md:text-sm">
                <p>&copy; 2023 Your Website Name. All rights reserved.</p>
                <p>Designed and Developed by <a href="https://github.com/Sreeplays" target="_blank" rel="noopener noreferrer" class="text-blue-300 hover:underline">@Sreeplays</a></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer