import React from 'react'
import { Button } from 'react-bootstrap'

const MORE_CAT = (props) => {
    console.log("The categories are ,", props.categories)
    // Fetching and displaying through a jsx return function
    let categories = props.categories.map((catItems) => {
        return(
               
                    
                  <div className='text-white justify-start grid md:grid-cols-2 lg:grid-cols-3 grid-rows-4  pt-4 px-28'>
                    <div className='border border-white rounded-md px-2 py-1 transition-transform transform hover:scale-110 delay-600'>
        
                          <img src={catItems.strMealThumb} alt="hot burger king hd png @transparentpng.com" className='w-16 '></img>
                      <div className=''>
                        <h3 className='text-xl font-semibold rounded-md drop-shadow-md text-green-300 py-2 my-2'><div className='justify-center grid md:grid-cols-2 lg:grid-cols-3 align-middle'>{catItems.strMeal}</div></h3>
                        <p className='text-gray-100 font-extralight italic backdrop-blur-sm'><Button className='text-green-300 italic text-bold'>Add to cart</Button></p>
          
                       </div>
                    </div>
                 </div>
                    

        )
    })

  return (
    <div> {categories}  </div>
  )
}

export default MORE_CAT