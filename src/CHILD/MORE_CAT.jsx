import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

const MORE_CAT = (props) => {
    // const [veg, setVeg] = useState([])
    
    // // Fetching and displaying through a jsx return function
    // async function VegBasedFood () {
    //   const API_VEG = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
    //   let response = await fetch(API_VEG)
    //   const data = await response.json()
    //   setVeg(data)
    // }
    // useState(() => {
    //   VegBasedFood()
    // })
    console.log("The categories are ,",props.categories)
    let categories = props.categories.map((catItems) => {

        return(
               
                    
                 
                    <div className='border border-white rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600'>
        
                          <img src={catItems.strMealThumb} alt="hot burger king hd png @transparentpng.com" className='w-16 '></img>
                      <div className=''>
                        <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'><div className='justify-center grid md:grid-cols-2 lg:grid-cols-3 align-middle'>{catItems.strMeal}</div></h3>
                        <p className='text-gray-100 font-extralight italic backdrop-blur-sm'><Button className='text-green-300 italic text-bold'>Add to cart</Button></p>
          
                       </div>
                    </div>
                 
                    

        )
    })

  return (
    <div>  <div className='text-white justify-start grid md:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-9  pt-4 px-28'>{categories}</div>  </div>
  )
}

export default MORE_CAT