import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("I am mounting phase");
    
    // return () => console.log("i am unmounting phase");

    if(count==0) return
    console.log("mounting phase");
  }, [count]);
   console.log("maaz");
  return (
    <div>
      <h2>Counter Component</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default Counter;
