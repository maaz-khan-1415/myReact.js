import React from "react";
const Child1 = (props) => {
  console.log("child2");
  return (
    <div>
      <h1>I am child-1 component</h1>
      <h1>Fullname:{props.user.fullname}</h1>
    </div>
  );
};
export default React.memo(Child1);
