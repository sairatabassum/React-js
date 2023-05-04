import logo from "./logo.svg";
import "./App.css";
import MyLineChart from "./components/MyLineChart/MyLineChart";
import SpecialChart from "./components/SpecialChart/SpecialChart";

function App() {
  return (
    <div className="App">
      <SpecialChart></SpecialChart>
      <MyLineChart></MyLineChart>
    </div>
  );
}

export default App;
