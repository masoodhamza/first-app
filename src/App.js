import "./App.css";
import HookUseState from "./components/HookUseState";
import HookPrvState from "./components/HookPrvState";
import ObjUseState from "./components/ObjUseState";
import ArrayUseState from "./components/ArrayUseState";
import HookUseEffect from "./components/HookUseEffect";
import HookMouse from "./components/HookMouse";

const App = () => {
  return (
    <div className="App">
      {/* <HookUseState /> */}
      {/* <HookPrvState /> */}
      {/* <ObjUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <HookUseEffect /> */}
      <HookMouse />
    </div>
  );
};

export default App;
