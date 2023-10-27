import React, { useEffect } from 'react'
import { useState } from 'react'
import ORDER_CHILD from '../CHILD/ORDER_CHILD'
import MORE_CAT from '../CHILD/MORE_CAT'
const OrderYourFood = () => {
  //constant for menu items in which data is available
  const [veg, setVeg] = useState([])

  // Getting all menu items
  
  async function getAllMealsData() {
    const API_SOURCE = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian'
    let response = await fetch(API_SOURCE)
    const data = await response.json()
    setVeg(data.meals)
  }
  //by using useState we are showing the following async function in a faster way
  useState(() => {
    getAllMealsData()
  }, [])
  //logging onto the console
  // console.log("The Required meals are,", veg)

  return (
  <>
    <ORDER_CHILD/>
    <MORE_CAT categories={veg}/>
  </>
  )
}

export default OrderYourFood