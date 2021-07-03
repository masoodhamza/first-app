import { useState } from "react";

const ObjUseState = () => {
  const [name, setName] = useState({ first: "", last: "" });

  return (
    <>
      <input
        type="text"
        value={name.first}
        onChange={(e) => setName({ ...name, first: e.target.value })}
      />
      <input
        type="text"
        value={name.last}
        onChange={(e) => setName({ ...name, last: e.target.value })}
      />
      <h2>First name: {name.first}</h2>
      <h2>Last name: {name.last}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </>
  );
};

export default ObjUseState;
