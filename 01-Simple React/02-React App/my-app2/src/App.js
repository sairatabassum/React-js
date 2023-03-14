import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ["Rubel", "BappaRaz", "Kuber"];
  return (
    <div className="App">
      {/* <Person name="saira" nayika="moushumi"></Person>
      <Person name="tabassum" nayika="cheka"></Person>
      <Person name="Kuber" nayika="kopila"></Person> */}

      <Person name={nayoks[0]}></Person>
      <Person name={nayoks[1]}></Person>
      <Person name={nayoks[2]}></Person>

      <h5>New component</h5>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  );
}

function Friend() {
  return (
    <div>
      <h3>Name: Saia Tabassum</h3>
      <p>Job: coder</p>
    </div>
  );
}

export default App;
