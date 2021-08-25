import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    if (e.target.id === "minus") {
      setCount((currCount) => currCount - 1);
    } else {
      setCount((currCount) => currCount + 1);
    }
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <button type="button" id="minus" onClick={handleClick}>
        -
      </button>
      <p>{count}</p>
      <button type="button" id="plus" onClick={handleClick}>
        +
      </button>
    </div>
  );
};

export default Counter;
