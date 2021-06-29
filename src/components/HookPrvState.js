import { useState } from "react";

const HookPrvState = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount((prevCount) => prevCount + 5)}>
        Add 5
      </button>
    </>
  );
};

export default HookPrvState;
