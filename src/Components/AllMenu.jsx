import React from 'react'
import { useEffect } from 'react'
import Loader from '../CHILD/Loader'
import { useState } from 'react'

export const AllMenuContext = React.createContext()
export const AllMenu = ({children}) => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    async function getAllMealsData() {
        const API_SOURCE = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c'
        let response = await fetch(API_SOURCE)
        const data = await response.json()
        setMenu(data.meals);
        setLoading(false)
      }
    
      useEffect(() => {
        getAllMealsData()
      })

    return (
    <AllMenuContext.Provider value={menu}>
        {!loading ? children : <Loader/>}
    </AllMenuContext.Provider>
    )

}

