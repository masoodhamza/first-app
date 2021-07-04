import React from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";

// three steps to context
// 1. create context
// 2. provide this context with a value
// 3. consume the context value (export it and import where we need i.e., ComponentF)
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const App = () => {
  return (
    <div className="App">
      <UserContext.Provider value={"Hamza"}>
        <ChannelContext.Provider value={"HamzaChannel"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
