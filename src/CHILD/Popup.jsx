import React, { useContext } from "react";
import { Button, Popover } from "react-bootstrap";
import { AllMenuContext } from "../Components/AllMenu";
import AddToCart from "./AddToCart";
import { DispatchContext } from "../globalContext/AppProvider";
const Popup = ({closeBtn, detail, addToCartHandler}) => {
 const allMenu = useContext(AllMenuContext)
 const addDishes = useContext(DispatchContext)
  const popItem = allMenu.filter((catItem) => {
    return catItem.strMeal === detail || catItem.strCategory === detail
  }).map((catItem) => {
    return (
      <div className="overflow-x-hidden">
      <div className="mb-36 ">
      <img src={catItem.strMealThumb} alt="Popup Image" className="w-[1300px] h-[220px] object-cover border-[rgb(17,17,17)] rounded-lg" />
      <h2 className="text-white text-center font-extrabold font-serif text-2xl relative">{catItem.strMeal}</h2>
      <p className="text-center text-lg text-[#00df9a] animate-bounce delay-100 duration-200">Enjoy a feasty ensilage!!</p>
      <Button className="bg-[#ffb902] text-base font-bold text-black md:p-3p px-6 py-1 mt-2 rounded-lg mb-1 hover:bg-green-300 delay-300 gap-4 ml-[-105px] mr-14" accessKey="s" onClick={()=> addDishes({type: 'add_to_cart', payload: {item: catItem.strMeal, img: catItem.strMealThumb}})}>Add to Cart <p className="text-xs font-serif italic">(alt+s)</p></Button>
      <Button className="bg-green-400 mt-2 text-black px-6 py-1 rounded-lg text-base font-bold cursor-pointer transition-all duration-300 hover:bg-red-500 absolute" onClick={closeBtn} accessKey="e">Close <p className="text-xs font-serif italic">(alt+e)</p></Button>

      </div>
     
      </div>
    )
  })

  return (
    <div>

    <div className="fixed left-0 right-0 top-0 bottom-0 z-50 bg-black bg-opacity-80 flex flex-col items-center justify-center">
    
      <div className="bg-gray-900 md:w-[50%] md:h-[50%] w-[300px] h-[365px] rounded-lg text-center">
        {popItem}
        {/* <p class="text-white text-md mb-6 h-44 overflow-auto">
          Your text content goes here. Your text content goes here. Your text
          content goes here.
        </p> */}
      <div>
      
      </div>

        </div>


      </div>
      </div>
  );
};

export default Popup;
