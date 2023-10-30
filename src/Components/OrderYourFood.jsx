import React, { useEffect } from 'react'
import { useState } from 'react'
import ORDER_CHILD from '../CHILD/ORDER_CHILD'
import MORE_CAT from '../CHILD/MORE_CAT'
import Loader from '../CHILD/Loader'



const OrderYourFood = () => {
  //constant for menu items in which data is available

  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [singleDish, setSingleDish] = useState([])
  
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
  //logging onto the console
  // console.log("The Required meals are,", veg)

  return (
  <AllMenuContext>
    
    {!loading ? <ORDER_CHILD /> : <Loader/>}
    {!loading ? <MORE_CAT allMenu={menu} categories={categories} singleDishVar={singleDish} setSingleDish={setSingleDish}/> : null}
  </AllMenuContext>
  )
}

export default OrderYourFood