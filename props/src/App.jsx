import React from 'react'
import Mycard from './Components/Mycard'

const App = () => {
  let data=[
    {id:1, price:20, image:"/Images/1.webp"},
    {id:2, price:30, image:"/Images/1.webp"}
  ]
  return (
    <>
    
    <Mycard data={data}/>
    
    </>
  )
}

export default App