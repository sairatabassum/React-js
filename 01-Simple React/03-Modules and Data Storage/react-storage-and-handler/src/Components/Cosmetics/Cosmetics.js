import React from "react";
import { add } from "../../Utilities/calculate";
import Cosmetic from "../Cosmetic/Cosmetic";
// import add from "../../Utilities/calculate";

const Cosmetics = () => {
  const first = 55;
  const second = 66;
  const total = add(first, second);
  const cosmetics = [
    {
      id: "6424a9ee9bf07614eda1eba5",
      price: 99,
      name: "Beryl Riley",
    },
    {
      id: "6424a9ee9e1d64431657a7c3",
      price: 600,
      name: "Ernestine Rios",
    },
    {
      id: "6424a9ee4150ef04ad2c764f",
      price: 464,
      name: "Houston Farrell",
    },
    {
      id: "6424a9ee188543b5de4436c1",
      price: 68,
      name: "Knox Hernandez",
    },
    {
      id: "6424a9eeb481060964705557",
      price: 42,
      name: "Gena Haney",
    },
    {
      id: "6424a9eeda63d5679e7d7b98",
      price: 203,
      name: "Candace Davis",
    },
  ];
  return (
    <div>
      <h1>Welcome to my cosmetics</h1>
      <p>Total: {total}</p>
      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
