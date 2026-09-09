import React from 'react'
import MyButton from './Components/MyButton'

const App = () => {
  function handleClick(){
    alert("hiii")
  }

  function handleClick1(){
    alert("hiii1")
  }

  function handleClick2(){
    alert("hiii2")
  }
  return (
    <>
    
    <h1>App Page</h1>
    <MyButton text="click" ayush={handleClick}/><br /><br />  
    <MyButton text="click1" ayush={handleClick1}/><br /><br />  
    <MyButton text="click2" ayush={handleClick2}/><br /><br />  
    </>
  )
}

export default App