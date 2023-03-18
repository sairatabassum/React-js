import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <District name="NeoCalifornia" special="vibag"></District>
      <District name="Brahomnbaria" special="jodha akbar"></District>
      <District name="Sumilla" special="Moyna and moti"></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: "yellow",
  margin: "20px",
  borderRadius: "20px",
};

function District(props) {
  return (
    <div style={districtStyle}>
      <h2>Name:{props.name}</h2>
      <p>Speciality: {props.special} </p>
    </div>
  );
}

export default App;
