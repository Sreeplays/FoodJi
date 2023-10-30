import React, {useState, useContext, useEffect} from 'react'
import Loader from '../CHILD/Loader'

const AllMenuContextProvider = React.createContext()
const AllMenuContext = (props) => {
   const [menu, setMenu] = useState([])
   const [loading, setLoading] = useState(true)
    async function getAllMealsData() {
        setLoading(true)
        const API_SOURCE = ('https://www.themealdb.com/api/json/v1/1/search.php?f=a', 'https://www.themealdb.com/api/json/v1/1/search.php?f=b', 'https://www.themealdb.com/api/json/v1/1/search.php?f=c')
        let response = await fetch(API_SOURCE)
        const data = await response.json()
        setMenu(data.meals);
        setLoading(false)
      }
    useEffect(() => {
        getAllMealsData()
    })
  return (
    <AllMenuContextProvider.Provider value={menu}> {!loading ? props.children : <Loader/>} </AllMenuContextProvider.Provider>
  )
}

export default AllMenuContext