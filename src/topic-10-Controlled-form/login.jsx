import  { useRef } from 'react';

const Login = () => {
    const searchTextRef=useRef("");
    
    const handleClick=()=>{
        console.log(searchTextRef.current.value);
    }
    console.log("Login Component")
    return (
    <div>
        <input type="text"  ref={searchTextRef} placeholder='Search here...' />
        <button onClick={handleClick}>Search</button>
        <p>Query:</p>
    </div>
  )
}

export default Login;