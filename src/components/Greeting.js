import React, { useState } from 'react'

const Greeting = () => {

    const[completed,setCompleted]=useState(false);

    const changecompleted=()=>{
        setCompleted(true)
    }
    
  return (
    <div>
        
        {!completed && <p>Hey this is before case</p>}
        {console.log(completed)}
        {completed&&<p>This is changed case</p>}
        
        <button id='button' onClick={changecompleted}>click me change the state</button>

    </div>
  )
}

export default Greeting