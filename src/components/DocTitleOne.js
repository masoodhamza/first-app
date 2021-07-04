import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const DocTitleOne = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </>
  );
};

export default DocTitleOne;
