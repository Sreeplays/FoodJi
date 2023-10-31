import React, { useContext } from "react";
import { Button, Popover } from "react-bootstrap";
import { AllMenuContext } from "../Components/AllMenu";
import AddToCart from "./AddToCart";

const Popup = ({closeBtn, detail, addToCartHandler}) => {
 const allMenu = useContext(AllMenuContext)
  const popItem = allMenu.filter((catItem) => {
    return catItem.strMeal === detail
  }).map((catItem) => {
    return (
      <div>
      <div className="mb-36 ">
      <img src={catItem.strMealThumb} alt="Popup Image" className="w-[1300px] h-[220px] object-cover border-[rgb(17,17,17)] rounded-lg" />
      <h2 className="text-white text-center font-extrabold font-serif text-2xl relative">{catItem.strMeal}</h2>
      <button className="absolute bg-[#ffb902] p-3 sm:bottom-[5rem] bottom-[8rem] sm:right-[10rem] right-[4rem] rounded-lg mb-1 hover:bg-green-300 delay-300" onClick={()=>addToCartHandler(catItem.strMealThumb, catItem.strMeal)}>Add to Cart</button>
      </div>
      <h4 className="text-center top-[360px] absolute text-white font-mono font-extrabold text-xl pb-4">Ingredients</h4>
      <ul className="items-center justify-center bottom-[15rem] absolute flex sm:grid-rows-4 grid-rows-2 gap-3 mb-4 mt-4">
        <li className="px-4 text-black rounded-lg py-2 gap-3 bg-red-500"> {catItem.strIngredient1} </li>
        <li className="px-4 text-black rounded-lg py-2 gap-3 bg-red-500"> {catItem.strIngredient2} </li>
        <li className="px-4 text-black rounded-lg py-2 gap-3 bg-red-500"> {catItem.strIngredient3} </li>
        <li className="px-4 text-black rounded-lg py-2 gap-3 bg-red-500"> {catItem.strIngredient4} </li>
      </ul>
      </div>
    )
  })

  return (
    <div>

    <div className="fixed left-0 right-0 top-0 bottom-0 z-50 bg-black bg-opacity-80 flex flex-col items-center justify-center">
    
      <div className="bg-gray-900 w-[80%] sm:h-[80%] h-96 rounded-lg p-4 items-center justify-center">
        {popItem}
        {/* <p class="text-white text-md mb-6 h-44 overflow-auto">
          Your text content goes here. Your text content goes here. Your text
          content goes here.
        </p> */}
      <div>
      <Button className="bg-green-400 sm:bottom-[5rem] bottom-[8rem] sm:left-[10rem] left-[4rem] text-black px-6 py-2 rounded-lg text-xl font-bold cursor-pointer transition-all duration-300 hover:bg-red-500 absolute" onClick={closeBtn}>Close</Button>
      </div>

        </div>


      </div>
      </div>
  );
};

export default Popup;
