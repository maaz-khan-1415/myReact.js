import React, { useState } from 'react'
import Dashboard from './Dashboard';
import Login from './login';

const Toggle = () => {
    const[isLogin,setIsLogin]=useState(false);
    const handleClick=()=>{
        setIsLogin(!isLogin)
    }
    console.log("toggle render");
    return (
    <div>
        <button onClick={handleClick}>Toggle</button>
        {isLogin?<Dashboard/>:<Login/>}
    </div>
  )
}

export default Toggle;

