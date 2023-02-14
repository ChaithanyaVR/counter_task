import React from 'react'
import { useState } from 'react';
import './ComponentA.css'
import ComponentB from './ComponentB';


function ComponentA() {
  const initialCount = 0
  const[count,setCount]=useState(initialCount);
  const[isActive,setIsActive]=useState(false);
  const handleClick=()=>{
    setIsActive(current=>!current);
   }
  const data = {
    initialCount,
    count,
    setCount,
    isActive,
    setIsActive,
    handleClick,
  } 
 
  return (
    <>
    <ComponentB data={data}/>

    </>

    
   
  )
}

export default ComponentA
