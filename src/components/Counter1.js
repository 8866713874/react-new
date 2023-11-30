import React, { useState, useEffect } from "react";

const Counter1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <>
        <p>{count}</p>
        <button onClick={() => setCount(count < 10 ? count + 1 : 10)}>
          Counter
        </button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
          Counter
        </button>
      </>
    </div>
  );
};

export default Counter1;
