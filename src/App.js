import "./App.css";
import HookUseState from "./components/HookUseState";
import HookPrvState from "./components/HookPrvState";
import ObjUseState from "./components/ObjUseState";
import ArrayUseState from "./components/ArrayUseState";
import HookUseEffect from "./components/HookUseEffect";

const App = () => {
  return (
    <div className="App">
      {/* <HookUseState /> */}
      {/* <HookPrvState /> */}
      {/* <ObjUseState /> */}
      {/* <ArrayUseState /> */}
      <HookUseEffect />
    </div>
  );
};

export default App;
