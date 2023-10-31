import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Pagination from './Pagination'
import Popup from './Popup'
import {AllMenuContext} from '../Components/AllMenu'
import AddToCart from './AddToCart'


const MORE_CAT = (props) => {
    const [categories, setCategories] = useState([])
 
   const [singleDish, setSingleDish] = useState([])
  //  console.log("Single Dishes are", props.singleDishVar)
    //Assigning these functions into an array to display the filtered results
    const [filteredDishesArray, setFilteredDishesArray] = useState([])
    const allMenu = useContext(AllMenuContext)
    const [active, setActive] = useState("Vegetarian")
    const [initialPage, setInitialPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const [popUp, setPopUp] = useState(false)
    const [detailedPopUp, setDetailedPopUp] = useState([])
    const [addToCart, setAddToCart] = useState([{}])

    //Using slice function to get pagination
    const indexOfLastDish = initialPage * itemsPerPage
    //1*4, 2*4, 3*4,
    const indexOfFirstDish = indexOfLastDish - itemsPerPage
    //4-4, 8-4, 12-4
    const showPagination = filteredDishesArray.slice(indexOfFirstDish, indexOfLastDish)


  
    // alert("The added to cart items are", addToCart)
    const specialMeals = allMenu.map((catItem, index) => {
      const maxSpecialMeal = 9
      if (index < maxSpecialMeal) {
      return (
        <a  href="javascript:;" onClick={() => {showPopupHandler(catItem.strMeal, catItem.strMealThumb)}}>
        <div className='border border-white rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600 backdrop-blur-xl'>
       
        <img src={catItem.strMealThumb} alt="hot burger king hd png @transparentpng.com" className='w-20 '></img>
          <div>
            <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'>{catItem.strMeal}</h3>
            <p className='text-gray-100 font-extralight italic backdrop-blur-sm'>For Rs.100</p>
            <Button className='text-green-300 italic text-bold'>Add to cart</Button>
          </div>
        </div>
        </a>
      )
      }
  
    })

  
  // Getting all menu items
  

  async function getAllMealsDataCat() {
    const API_SOURCE = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    let response = await fetch(API_SOURCE)
    const categoryData = await response.json()
    setCategories(categoryData.categories)
    
  }
  async function getSingleMealData() {
    const API_SOURCE = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian'
    let response = await fetch(API_SOURCE)
    const singleDishData = await response.json()
    setSingleDish(singleDishData.meals)
    
  }
  //by using useState we are showing the following async function in a faster way
  useState(() => {

    getAllMealsDataCat()
    getSingleMealData()
  }, [])
  function addToCartHandler(addToCartImg, addToCartTitle){
    setAddToCart(
    [
      ...addToCart,
      {
      "img": addToCartImg,
      "title": addToCartTitle
      }
    ]
  )

  }

    function showPopupHandler (dishes){
      setPopUp(true)
      setDetailedPopUp(dishes)
    }
    function closePopUpHandler(){
      setPopUp(false)
    }

    // Fetching a Single Dish based on any one category
    let max = 9 
    let singleDishData = singleDish.map((catItem, index) =>{
      if (index < max) {
      return(
        <a href="javascript:;" onClick={() => {showPopupHandler(catItem.strMeal, catItem.strMealThumb)}}>      
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
      setSingleDish([])
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
    const categoriesmap = categories.map((catItems) => {
          

       return(         
        <div className=' rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600 '>
          <div >
            <Button onClick={() => {FilteredDishesResult(catItems.strCategory)}} className={catItems.strCategory == active ? 'bg-red-500 px-8 text-center py-2 rounded-lg bg-opacity-50 transition-colors transform text-white delay-200 mr-4': ' text-black bg-[#73eaa2] px-8 text-center py-2 rounded-lg bg-opacity-50 transition-colors transform hover:text-white delay-200 mr-4'} >{catItems.strCategory}</Button>

          </div>
        </div>
        )
    })



  
  return (
    <>
    {popUp && <Popup closeBtn={closePopUpHandler} detail={detailedPopUp}  addToCartHandler={addToCartHandler}></Popup>}
    <div>
    <AddToCart dishes={addToCart}/>
    <div className='text-white'>
    
  
     <div><h1 className='text-4xl font-serif rounded-md drop-shadow-md text-green-300 text-center hover:animate-pulse delay-700 duration-300'>Our most DEMANDED items!!</h1></div>
      {/* Grids for most demandive items */}
      
      <div className='text-white justify-start grid md:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-12 pt-4 px-36 '>
        {specialMeals}
      </div>
  
    </div>
    </div>
    <div className='mt-[-68px] pt-16 '> 
     <div className='text-4xl font-serif rounded-md drop-shadow-md text-green-300 text-center mb-14 '><h1 >Not getting enough from our most ultimatum items. Go for the Expedition !!</h1> <p className='text-lg'>Select your deemed category and have a wide variety of selections!!</p></div>
       
    {/* Showing the categories present in the allMenus */}
      <div className='text-white justify-start grid sm:grid-cols-2 lg:grid-cols-7 gap-4  pt-4 px-14 '>
        {categoriesmap}
      </div> 
    {/* Showing the filtered dishes when clicking the categories button */}
      <div className='text-white justify-start grid sm:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-7  pt-4 px-32 '>

        {singleDishData}
        {singleDishData !=0 ||  filteredDishesArray.length != 0 ? showPagination : <div className='text-red-600 text-center text-2xl'> <h3 >Sorry this is the end!</h3></div>}
      </div> 
      <Pagination filteredDishes={filteredDishesArray} itemsPerPage={itemsPerPage} initialPage={initialPage} setInitialPage={setInitialPage}/>
    </div>
    </>
  )
}

export default MORE_CAT