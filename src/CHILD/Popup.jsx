import React, { useContext } from "react";
import { Button, Popover } from "react-bootstrap";
import { AllMenuContext } from "../Components/AllMenuContext";

const Popup = ({closeBtn, detail}) => {
 const allMenu = useContext(AllMenuContext)
 console.log("all menus are " , allMenu);
  const popItem = allMenu.filter((catItem) => {
    return catItem.strMeal === detail
  }).map((catItem) => {
    return (
      <div>
      <div className="mb-36 ">
      <img src={catItem.strMealThumb} alt="Popup Image" class="w-[1300px] h-[140px] object-cover border-[rgb(17,17,17)] rounded-lg" />
      <h2 class="text-white text-center font-extrabold font-serif text-2xl relative">{catItem.strMeal}</h2>
      <h5 class="absolute bg-[#ffb902] m-0 p-3 sm:bottom-[180px] bottom-[167px] sm:right-44 right-12 rounded-lg">{catItem.strCategory}</h5>
      </div>
      <h4 className="text-center top-[360px] absolute text-white font-mono font-extrabold text-xl">Ingredients</h4>
      <ul className="items-center justify-center bottom-56 absolute flex sm:grid-rows-4 grid-rows-2 gap-3 mb-4">
        <li className="px-4 text-black rounded-lg bg-gray-200 py-2 gap-3"> {catItem.strIngredient1} </li>
        <li className="px-4 text-black rounded-lg bg-gray-200 py-2 gap-3"> {catItem.strIngredient2} </li>
        <li className="px-4 text-black rounded-lg bg-gray-200 py-2 gap-3"> {catItem.strIngredient3} </li>
        <li className="px-4 text-black rounded-lg bg-gray-200 py-2 gap-3"> {catItem.strIngredient4} </li>
      </ul>
      </div>
    )
  })

  return (
    <div class="fixed left-0 right-0 top-0 bottom-0 z-50 bg-black bg-opacity-80 flex flex-col items-center justify-center">
      <div class="bg-gray-900 w-[80%] h-96 rounded-lg p-4 items-center justify-center">
        {popItem}
        {/* <p class="text-white text-md mb-6 h-44 overflow-auto">
          Your text content goes here. Your text content goes here. Your text
          content goes here.
        </p> */}
        <Button className="bg-green-400 text-black px-6 py-2 rounded-lg text-xl font-bold cursor-pointer transition-all duration-300 hover:bg-red-500 absolute" onClick={closeBtn}>Close</Button>

        </div>


      </div>
  );
};

export default Popup;
