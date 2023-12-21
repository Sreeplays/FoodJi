import React, { useEffect } from 'react'
import { useState } from 'react'
import ORDER_CHILD from '../CHILD/ORDER_CHILD'
import MORE_CAT from '../CHILD/MORE_CAT'
import Loader from '../CHILD/Loader'
import {AllMenu} from './AllMenu'
import AddToCart from '../CHILD/AddToCart'
import {AppProvider} from '../globalContext/AppProvider'
import Checkout from '../CHILD/Checkout'
import { Helmet } from 'react-helmet'

export const AllMenuContext = React.createContext()
const OrderYourFood = () => {
  //constant for menu items in which data is available
  // const [menu, setMenu] = useState([])
 
  //  async function getAllMealsData() {
  //      setLoading(true)
  //      const API_SOURCE = ('https://www.themealdb.com/api/json/v1/1/search.php?f=a', 'https://www.themealdb.com/api/json/v1/1/search.php?f=b', 'https://www.themealdb.com/api/json/v1/1/search.php?f=c')
  //      let response = await fetch(API_SOURCE)
  //      const data = await response.json()
  //      setMenu(data.meals);
  //      setLoading(false)
  //    }
  
  //logging onto the console
  // console.log("The Required meals are,", veg)

  return (
  <AppProvider>
  <AllMenu >
    <Helmet>
      <title>Foodjii | Order</title>
    </Helmet>
    
    <MORE_CAT /> 
    <Checkout/>
  </AllMenu>
  
  </AppProvider>
  )
}

export default OrderYourFood