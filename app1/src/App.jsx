import React from 'react'
import { useState } from 'react';

const App = () => {
  let [count , setCount]=useState(0)

  function handleIncrease(){
    setCount(count+1)
    
  }

  function reset (){
    setCount(0)
  }
  
  function handleDecrease(){
    setCount(count-1)
  }
  
  return (
    <>
    <h1>Count:-{count}</h1>
    
    <button onClick={handleIncrease}>+</button> <br /><br />
    <button onClick={reset}>Reset</button><br /><br />
    <button onClick={handleDecrease}>-</button>
    
    </>
  )
}

export default App