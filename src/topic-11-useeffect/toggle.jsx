import React from "react";
import Counter from "./counter";
import { useState } from "react";
const Toggle = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h2>App</h2>
      <button onClick={() => setShow(!show)}>Toggle button</button>
      {show && <Counter />}
    </div>
  );
};

export default Toggle;

//maz khan panli kasjckscK
