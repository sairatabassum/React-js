import React from "react";
import "./Country.css";

const Country = (props) => {
  // console.log(props);
  const { area, region, population, name, flags } = props.country;
  return (
    <div className="country">
      {/* <h2>Country Name: {props.country.name.common}</h2>
      <p>population={props.country.population}</p>
      <p>
        <small>Region: {props.country.region}</small>
      </p>
      <p>
        <small>Area={props.country.area}</small>
      </p> */}

      <h2>Country Name: {name.common}</h2>
      <p>population={population}</p>
      <p>
        <small>Region: {region}</small>
      </p>
      <p>
        <small>Area={area}</small>
      </p>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
