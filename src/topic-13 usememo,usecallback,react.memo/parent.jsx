import { useState, useMemo } from "react";
import Child1 from "./child1";
import Child2 from "./child2";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [searchText, setSearchText] = useState("");

  const user = useMemo(() => {
    return { fullname: "MaazKhan" };
  }, [searchText]);

  console.log("Parent Component");
  return (
    <div id="parent">
      <div id="counter">
        <h1>Count:{count}</h1>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
      <div id="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search here"
        />
        <h3>Your Query:{searchText}</h3>
      </div>
      <div id="child">
        <Child1 user={user} />
      </div>
      <div id="child">
        <Child2 user={user} />
      </div>
    </div>
  );
};
export default Parent;
