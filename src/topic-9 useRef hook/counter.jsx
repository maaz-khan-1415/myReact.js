import React, { useRef, useState } from 'react'
import "./counter.css"
const Counter = () => {
   const[count,setCount]=useState(0);
   const countRef=useRef(0);
   console.log("counter component");

   const handleclick=()=>{
    countRef.current=countRef.current+1;
   }
  
    return (
    <div>
        <div className='container'>
            <h2>State Counter</h2>
            <h3>count:{count}</h3>
            <button onClick={()=> setCount(count+1)}>Add</button>
        </div>
        <div className='container'>
            <h2>Ref Counter</h2>
            <h3>countRef:{countRef.current}</h3>
            <button onClick={handleclick}>Add</button>
        </div>
    </div>
  )
}

export default Counter;