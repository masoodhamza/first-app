import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";

const App = () => {
  return (
    <div className="App">
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      <CounterOne />
      <CounterTwo />
    </div>
  );
};

export default App;
