import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Pagination from './Pagination'
import Popup from './Popup'
import {AllMenuContext} from '../Components/AllMenuContext'


const MORE_CAT = (props) => {

  //  console.log("Single Dishes are", props.singleDishVar)
    //Assigning these functions into an array to display the filtered results
    const [filteredDishesArray, setFilteredDishesArray] = useState([])
    const allMenu = useContext(AllMenuContext)
    const [active, setActive] = useState("Vegetarian")
    const [initialPage, setInitialPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const [popUp, setPopUp] = useState(false)
    const [detailedPopUp, setDetailedPopUp] = useState([])
    
    //Using slice function to get pagination
    const indexOfLastDish = initialPage * itemsPerPage
    //1*4, 2*4, 3*4,
    const indexOfFirstDish = indexOfLastDish - itemsPerPage
    //4-4, 8-4, 12-4
    const showPagination = filteredDishesArray.slice(indexOfFirstDish, indexOfLastDish)

    function showPopupHandler (dishes){
      setPopUp(true)
      setDetailedPopUp(dishes)
    }
    function closePopUpHandler(){
      setPopUp(false)
    }

    // Fetching a Single Dish based on any one category
    let max = 9 
    let singleDishData = props.singleDishVar.map((catItem, index) =>{
      if (index < max) {
      return(
        <a href="#" onClick={() => {showPopupHandler(catItem.strMeal, catItem.strMealThumb)}}>      
         <div className='border border-white rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600 backdrop-blur-xl'>
        
        <img src={catItem.strMealThumb} alt={catItem.strMeal} className='w-20 '></img>
          <div>
            <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>{catItem.strMeal}</h3>
            {/* <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.100</p> */}
            <Button className='text-green-300 italic text-bold'>Add to cart</Button>
          </div>
        </div>
        </a>

      )
      }

    })
    // the function to filter the dishes based on the current cateogory when clicked
    function FilteredDishesResult (category){
      props.setSingleDish([])
      setActive(category)
      const filteredDishes = allMenu.filter((catItems) => {
        return catItems.strCategory === category
      }).map((catItem) => {
        return (
          <a href="#" onClick={() => {showPopupHandler(catItem.strMeal, catItem.strMealThumb)}}>      
          <div className='border border-white rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600 backdrop-blur-xl'>
         
         <img src={catItem.strMealThumb} alt={catItem.strMeal} className='w-20 '></img>
           <div>
             <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>{catItem.strMeal}</h3>
             {/* <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.100</p> */}
             <Button className='text-green-300 italic text-bold'>Add to cart</Button>
           </div>
         </div>
         </a>
        )
      })
      
      if (filteredDishes < 1) {
        alert("No dishes found! Try any other category.")
      }else(
        setFilteredDishesArray(filteredDishes)
      )
    }
    // Showing categories obtained from parent file
    let categories = props.categories.map((catItems) => {
          

       return(         
        <div className=' rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600 '>
          <div >
            <Button onClick={() => {FilteredDishesResult(catItems.strCategory)}} className={catItems.strCategory == active ? 'bg-red-500 px-10 text-center py-2 rounded-lg bg-opacity-50 transition-colors transform text-white delay-200': ' text-black bg-[#73eaa2] px-10 text-center py-2 rounded-lg bg-opacity-50 transition-colors transform hover:text-white delay-200'} >{catItems.strCategory}</Button>

          </div>
        </div>
        )
    })

  return (
    <>
    {popUp && <Popup closeBtn={closePopUpHandler} detail={detailedPopUp} ></Popup>}
    <div className='mt-[-68px] pt-16 '> 
     <div className='text-4xl font-serif rounded-md drop-shadow-md text-green-300 text-center mb-14 '><h1 >Not getting enough from our most ultimatum items. Go for the Expedition !!</h1> <p className='text-lg'>Select your deemed category and have a wide variety of selections!!</p></div>

    {/* Showing the categories present in the allMenus */}
      <div className='text-white justify-start grid sm:grid-cols-2 lg:grid-cols-7 gap-7  pt-4 px-14 '>
        {categories}
      </div> 
    {/* Showing the filtered dishes when clicking the categories button */}
      <div className='text-white justify-start grid sm:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-7  pt-4 px-14 '>

        {singleDishData}
        {singleDishData !=0 ||  filteredDishesArray.length != 0 ? showPagination : <div className='text-red-600 text-center text-2xl'> <h3 >Sorry this is the end!</h3></div>}
      </div> 
      <Pagination filteredDishes={filteredDishesArray} itemsPerPage={itemsPerPage} initialPage={initialPage} setInitialPage={setInitialPage}/>
    </div>
    </>
  )
}

export default MORE_CAT