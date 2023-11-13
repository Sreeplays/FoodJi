import React from 'react'
import { PaginationItem } from 'reactstrap'

const Pagination = (props) => {
    const numberOfItems = []
    for(let i = 1; i <= Math.ceil( props.filteredDishes.length/props.itemsPerPage); i++){
        numberOfItems.push(i)
    }
    function showTheNextDishes(event){
        
        const currentPage = event.target.id
        props.setInitialPage(currentPage)
    }
    const pages = numberOfItems.map((catItem) => {
        return(
        <li id={catItem} onClick={showTheNextDishes} className='border border-white rounded-sm px-4 py-1 transition-transform transform hover:scale-110 delay-600 bg-opacity-40 bg-green-300'> {catItem} </li>
        )
        
    })
  return (
    <div><ul className='text-black flex gap-4 pb-6 border-white items-center justify-center'>{pages} </ul> </div>
  )
}

export default Pagination