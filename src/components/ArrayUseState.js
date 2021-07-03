import { useState } from "react";

const ArrayUseState = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems((prevItems) => {
      return [
        ...prevItems,
        {
          id: items.length,
          value: Math.floor(Math.random() * 10) + 1,
        },
      ];
    });
  };

  return (
    <>
      <button onClick={addItem}>Add number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
};

export default ArrayUseState;