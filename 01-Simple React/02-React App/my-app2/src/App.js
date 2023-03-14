import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h5>New component</h5>
      <Person></Person>
      <Friend></Friend>
    </div>
  );
}

function Person() {
  return (
    <div className="person">
      <h1>Sakib Al hasan</h1>
      <p>Profession: Cricket</p>
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
