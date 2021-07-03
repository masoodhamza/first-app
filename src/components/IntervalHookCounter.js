import { useEffect, useState } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>count is: {count}</h1>
    </>
  );
};

export default IntervalHookCounter;
