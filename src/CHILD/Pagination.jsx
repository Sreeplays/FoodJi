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
    <section className='pt-4 '><ul className='text-black flex top-0 gap-4 flex-row pb-6 border-white items-center justify-center px-10'>{pages} </ul> </section>
  )
}

export default Pagination