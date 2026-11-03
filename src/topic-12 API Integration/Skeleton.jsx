import React from "react";
const Skeleton = () => {
  return (
    <div className="skeleton_container">
      {
        // [ , , , , , , , , , , , , , , , , , , ]
        Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="skeleton_card"></div>
        ))
      }
    </div>
  );
};

export default Skeleton;

// - Array.from() creates a new array from the given input.
// - { length: 30 } tells JavaScript to create an array with 30 positions.

// _ represents the current array value. We use _ because we don't need that value.
// i represents the current index (position), starting from 0.