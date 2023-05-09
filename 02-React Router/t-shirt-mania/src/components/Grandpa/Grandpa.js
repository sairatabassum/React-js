import React, { createContext, useState } from "react";
import Uncle from "../Uncle/Uncle";
import Father from "../Father/Father";
import Aunty from "../Aunty/Aunty";
import "./Granpa.css";

/**
 * Context api
 *  1. call createContext with a default value
 *  2. set a variable of the context with uppercase
 *  3. Make sure you export the context to use it in other plaxes
 *  4. Wrap your child content using RingContext.Provider
 *  5. Provide a value
 *  6. to consume the context from child component
 *  7. useContext hook and you will need to pass the contextName
 *  8. Make sure you take single note
 *
 * */

export const RingContext = createContext("diamond");

const Grandpa = () => {
  const [house, setHouse] = useState(1);
  const handleBuyAHouse = () => {
    setHouse(house + 1);
  };
  const ornament = "Diamond Ring";

  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <h3>Grandpa</h3>
        <p>House: {house}</p>
        <button onClick={handleBuyAHouse}>Buy a house</button>

        <section style={{ display: "flex" }}>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
          <Father house={house}></Father>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
