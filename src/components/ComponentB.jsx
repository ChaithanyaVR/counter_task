import React from 'react'

function ComponentB({data}) {
    const {initialCount,isActive,count,setCount,handleClick} = data
  return (
    <>
    <div className='container'><div className='counter'style={{
      backgroundColor:isActive ? 'red' :'lightblue'
    }}>{count}
   <button className='increase_counter'onClick={()=>setCount(prevCount=>prevCount+10)}>Click To Increase Counter</button>
   </div>
   </div>
        

   <button style={{
    backgroundColor:isActive ? 'red' :'lightblue'}}className='btn_color_change' onClick={handleClick}>Change Color</button>
    

    </>
  )
}

export default ComponentB