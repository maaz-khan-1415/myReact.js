import React from 'react';
import { useState } from 'react';
 const Counter = () => {
    const [count,setCount]=useState(0)//react satate variable.
    
    const handleIncrease=()=>{
        setCount(count+1);
       
    };

    const handleDecrease=()=>{
       if(count>0){
        setCount(count-1);
       }
       console.log(count)
    };
    console.log("counter component");

    const handleReset=()=>{
        setCount(0);
    }
  
  
    return (
    <div>
       <h2>Counter:{count}</h2> 
        <button onClick={handleIncrease}>Incerase</button>
        <button onClick={handleDecrease}>Decrease</button>
         <button onClick={handleReset}>Reset</button>

        
        </div>

  )
}
export default Counter;
//what is usestate-- usestate is a built-in ract hook that allows you to add and manage local state inn funcitonal component it return an array  with two  elements the current state value and a function to update it..
//syntax-const[sate,useState]=useState(intialvalue);

//state--current value of the state (read-only)
//setsate--function used to update the state
//initialvalue- intial value (can be number,string,boolean,object,array ,etc.);
//whenever satate variable changes react will rerender (re-call) the component..
//Re-rendering means React calls the component function again when its state changes, so it can update the UI with the new value.