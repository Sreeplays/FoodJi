import React, { useContext, useState } from 'react'
// import Parotta from '../assets/pngegg.png'
// import GheeRoast from '../assets/Ghee-Roast.png'
// import ThaliNorth from '../assets/pngwing.com.png'
// import ParottaSet from '../assets/2-Parotta-Curry.png'
// import Bhatoora from '../assets/Chole-Bhatoora.png'
// import Pizza from '../assets/Pizza.png'
// import Poori from '../assets/Poori-Set.png'
// import VegWrap from '../assets/Veg-Wrap.png'
import { Button } from 'react-bootstrap'
import Popup from './Popup'
import {AllMenuContext} from '../Components/AllMenu'
import AddToCart from './AddToCart'

const ORDER_CHILD = (props) => {
  const allMenu = useContext(AllMenuContext)
  const [popUp, setPopUp] = useState(false)
  const [detailedPopUp, setDetailedPopUp] = useState([])
  const [addToCart, setAddToCart] = useState([{}])
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


  
  return (
    <div>
      
    {popUp && <Popup closeBtn={closePopUpHandler} detail={detailedPopUp} addToCartHandler={addToCartHandler}></Popup>}
  <div className='text-white'>
  <AddToCart dishes={addToCart}/>

   <div><h1 className='text-4xl font-serif rounded-md drop-shadow-md text-green-300 text-center hover:animate-pulse delay-700 duration-300'>Our most DEMANDED items!!</h1></div>
    {/* Grids for most demandive items */}
    
    <div className='text-white justify-start grid md:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-12 pt-4 px-28 '>
      {specialMeals}
    </div>

  </div>
  </div>
  )
}

export default ORDER_CHILD