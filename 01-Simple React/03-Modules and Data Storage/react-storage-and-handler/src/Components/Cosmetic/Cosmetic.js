import React from "react";
import { addToDb } from "../../Utilities/fakedb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  const addToCart = (id) => {
    console.log("Item added", id);
    addToDb(id);
    // localStorage.clear()
  };

  const addToCartWithParam = () => addToCart(id);
  return (
    <div className="product">
      <h3>Buy this: {name}</h3>
      <p>Only for: ${price}</p>
      <p>It has id: {id}</p>
      <button onClick={addToCartWithParam}>Add to Cart</button>
      <button onClick={() => addToCart(id)}>Purchase</button>
    </div>
  );
};

export default Cosmetic;
