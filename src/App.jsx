import React, { useEffect } from 'react'
import axios from "axios"
const App = () => {
const showapi=async()=>{
  const response=await axios.get("https://images-api.nasa.gov/search?q=Mars")
  console.log(response.data)
   return response.data
}
useEffect(()=>{
  showapi()
},[])

  return (
    <div>App</div>
  )
}

export default App