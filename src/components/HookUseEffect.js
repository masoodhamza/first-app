import { useEffect, useState } from "react";

const HookUseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("state updating");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times
      </button>
    </>
  );
};

export default HookUseEffect;
