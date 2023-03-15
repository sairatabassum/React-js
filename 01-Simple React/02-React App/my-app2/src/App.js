import logo from "./logo.svg";
import "./App.css";

const singers = [
  { name: "Dr.mahfuz", job: "singer" },
  { name: "Eva Tahman", job: "singer2" },
  { name: "Agun", job: "sopno" },
  { name: "Shuvro", job: "singer" },
];

function App() {
  const nayoks = ["Rubel", "BappaRaz", "Kuber", "Koti"];
  const nayika = ["moushumi", "cheka", "kopila"];
  return (
    <div className="App">
      {/* <Person name="saira" nayika="moushumi"></Person>
      <Person name="tabassum" nayika="cheka"></Person>
      <Person name="Kuber" nayika="kopila"></Person> */}

      {/* <Person name={nayoks[0]} nayika={nayika[0]}></Person>
      <Person name={nayoks[1]} nayika={nayika[1]}></Person>
      <Person name={nayoks[2]} nayika={nayika[2]}></Person> */}

      {/* {nayoks.map((nayok) => (
        <Person name={nayok}></Person>
      ))} */}

      {singers.map((singer) => (
        <Person name={singer.name} job={singer.job}></Person>
      ))}

      <h5>New component</h5>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

// // Props Display array of object, Array , Dynamic data to components
function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      {/* <p>Nayika: {props.nayika}</p> */}
      <p>{props.job}</p>
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
