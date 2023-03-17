import React, { useState, useEffect } from "react";

const Countries = () => {
  const [countries, setCountries] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1>Hello from countries: {countries.length}</h1>
    
    {
        countries.map(country=>)
    }
    </div>
  );
};

export default Countries;
