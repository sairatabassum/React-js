import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Country from "./components/Country/Country";
import Person from "./components/Person/Person";
import Header from "./components/Header/Header";
import Countries from "./components/Countries/Countries";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Country></Country>
      <Person></Person> */}

      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountries(data));
//   }, []);

//   return (
//     <div>
//       <h1>Visiting Every Country of the world</h1>
//       <h3>Available Countires: {countries.length} </h3>

//       {countries.map((country) => (
//         <Country
//           name={country.name.common}
//           population={country.population}
//         ></Country>
//       ))}
//     </div>
//   );
// }

// function Country(props) {
//   return (
//     <div className="country">
//       <h2>Name: {props.name}</h2>
//       <p>Population: {props.population}</p>
//     </div>
//   );
// }

export default App;
