import { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookMouse />}
    </>
  );
};

export default MouseContainer;
