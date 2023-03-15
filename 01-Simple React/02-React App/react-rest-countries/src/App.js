import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1>Visiting Every Country of the world</h1>
      <h3>Available Countires: {countries.length} </h3>

      {countries.map((country) => console.log(country.region))}
    </div>
  );
}

export default App;
