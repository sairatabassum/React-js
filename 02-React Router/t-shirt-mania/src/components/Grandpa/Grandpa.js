import React, { createContext, useState } from "react";
import Uncle from "../Uncle/Uncle";
import Father from "../Father/Father";
import Aunty from "../Aunty/Aunty";
import "./Granpa.css";

export const RingContext = createContext("diamond");

const Grandpa = () => {
  const [house, setHouse] = useState(1);
  const handleBuyAHouse = () => {
    setHouse(house + 1);
  };
  const ornament = "Diamond Ring";

  return (
    <RingContext.Provider value={ornament}>
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
