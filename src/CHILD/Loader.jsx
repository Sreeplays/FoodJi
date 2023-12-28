import React from 'react'

const Loader = () => {
  return (
    <div className='text-gray-400 italic font-extrabold text-center text-6xl fixed top-0 w-[100%] h-[100%] flex bg-black opacity-80 items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="0 0 100 100">
    <path d="M 50,50 L 33,60.5 a 20 20 -210 1 1 34,0 z" fill="#fff">
      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.2s" repeatCount="indefinite"/>
    </path>
      <circle cx="50" cy="50" r="16" fill="#424242"></circle>
    </svg>
        
    </div>
  )
}

export default Loader