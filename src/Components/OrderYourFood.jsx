import React, { useEffect } from 'react'
import { useState } from 'react'
import ORDER_CHILD from '../CHILD/ORDER_CHILD'
import MORE_CAT from '../CHILD/MORE_CAT'
const OrderYourFood = () => {
  //constant for menu items in which data is available
  const [menu, setMenu] = useState([])

  // Getting all menu items
  const API_SOURCE = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c'
  async function getAllMealsData() {
    let response = await fetch(API_SOURCE)
    const data = await response.json()
    setMenu(data.meals)
  }
  //by using useState we are showing the following async function in a faster way
  useState(() => {
    getAllMealsData()
  }, [])
  //logging onto the console
  console.log("The Required meals are,", menu)

  return (
  <>
    <ORDER_CHILD/>
    <MORE_CAT categories={menu}/>
  </>
  )
}

export default OrderYourFood