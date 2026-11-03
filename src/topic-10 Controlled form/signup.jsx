import React from 'react'
import { useState } from 'react';
const Signup = () => {
    const[searchText,setSearchText]=useState("")
   
     console.log("component rerender");
    const handleChange=(event)=>{
     setSearchText(event.target.value);
     console.log("value:",event.target.value);
    }
  
    return (
    <div>
        <label htmlFor="inp1">Search here</label>
        <input type="text"  id='inp1'  onChange={handleChange} value={searchText} placeholder=' Search here '/>
        <p>Query:</p>
    </div>
  )
}

export default Signup;