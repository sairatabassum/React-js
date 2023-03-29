import React from "react";
import { add, multiply } from "../../Utilities/calculate";

const Shoes = () => {
  const first = 13;
  const second = 11;
  const result = multiply(first, second);
  const sum = add(first, second);
  return (
    <div>
      <h3>This is shoes component</h3>
      <p>Result : {result}</p>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default Shoes;
