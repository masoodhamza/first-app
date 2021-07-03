import "./App.css";
import HookUseState from "./components/HookUseState";
import HookPrvState from "./components/HookPrvState";
import ObjUseState from "./components/ObjUseState";
import ArrayUseState from "./components/ArrayUseState";
import HookUseEffect from "./components/HookUseEffect";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";

const App = () => {
  return (
    <div className="App">
      {/* <HookUseState /> */}
      {/* <HookPrvState /> */}
      {/* <ObjUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <HookUseEffect /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      <DataFetching />
    </div>
  );
};

export default App;
