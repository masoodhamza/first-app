import { useContext } from "react";
import { CountContext } from "../App";

const ComponentA = () => {
  const countContext = useContext(CountContext);

  return (
    <>
      <h2>Component A</h2>
      <h2>Count: {countContext.countState}</h2>
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </>
  );
};

export default ComponentA;
